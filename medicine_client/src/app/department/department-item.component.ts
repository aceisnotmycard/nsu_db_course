import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {DepartmentService} from "./department.service";
import {Department} from "./department";
import {BaseItemComponent} from "../base/base-item.component";


@Component({
  selector: 'department-item',
  moduleId: module.id,
  templateUrl: 'department-item.component.html',
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
export class DepartmentItemComponent extends BaseItemComponent<Department> {
  constructor(protected service:DepartmentService, protected router:Router) {
    super(service, router, 'DepartmentDetails');
  }
}
