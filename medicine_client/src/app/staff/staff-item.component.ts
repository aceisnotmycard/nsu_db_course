import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseItemComponent} from "../base/base-item.component";
import {StaffService} from "./staff.service";
import {Staff} from "./staff";


@Component({
  selector: 'staff-item',
  moduleId: module.id,
  templateUrl: 'staff-item.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput
  ]
})
export class StaffItemComponent extends BaseItemComponent<Staff> {
  constructor(protected service:StaffService, protected router:Router) {
    super(service, router, 'StaffDetails');
  }
}
