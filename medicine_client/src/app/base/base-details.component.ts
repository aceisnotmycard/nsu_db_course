import {OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';
import {BaseItem} from "./base-item";
import {BaseService} from "./base.service";


export class BaseDetailsComponent<T extends BaseItem> implements OnInit {

  constructor(protected service:BaseService<T>, protected routeParams:RouteParams, protected router:Router,
              protected listRoute: string, protected detailsRoute: string, protected init: () => T) {
    this.item = init();
    this.id = +this.routeParams.get('id');
  }

  item:T;
  errorMsg:string;
  id:number;

  update() {
    this.service.update(this.id.toString(), this.item).subscribe(
      d => this.router.navigate([this.detailsRoute, {id: d.id}]),
      msg => this.errorMsg = msg
    );
  }

  del() {
    this.service.remove(this.id.toString()).subscribe(_ => _, _ => _, () => this.router.navigate([this.listRoute]));
  }

  ngOnInit() {
    this.service.getBy(this.id.toString()).subscribe(
      item => this.item = item,
      msg => this.errorMsg = msg
    );
  }
}
