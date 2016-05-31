import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";
import {Staff} from "./staff";
import {StaffService} from "./staff.service";


@Component({
  selector: 'staff-details',
  moduleId: module.id,
  templateUrl: 'staff-details.component.html',
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
export class StaffDetailsComponent extends BaseDetailsComponent<Staff> {

  constructor(protected service:StaffService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'Staffs', 'StaffDetails', () => new Staff());
  }
}


