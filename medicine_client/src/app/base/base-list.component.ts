import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {BaseService} from "./base.service";
import {BaseItem} from "./base-item";


export class BaseListComponent<T extends BaseItem> implements OnInit {
  constructor(protected service: BaseService<T>, protected router: Router, protected init: () => T) {
    this.newItem = init();
  }

  items: T[];
  newItem: T;
  errorMsg: string;

  ngOnInit() {
    this.service.getAll().subscribe(
      items => this.items = items,
      msg => this.errorMsg = msg
    );
  }

  create() {
    this.service.create(this.newItem).subscribe(
      item => this.items.push(item),
      msg => this.errorMsg = msg
    );
  }
}
