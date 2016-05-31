import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {BaseService} from "./base.service";
import {BaseItem} from "./base-item";

export class BaseItemComponent<T extends BaseItem> {
  constructor(protected service:BaseService<T>, protected router:Router, protected detailsRoute:string) {
  }

  @Input()
  item:T;

  errorMsg:string;

  details() {
    this.router.navigate([this.detailsRoute, {id: this.item.id}]);
  }
}
