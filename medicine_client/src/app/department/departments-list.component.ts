import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {Department} from "./department";
import {DepartmentService} from "./department.service";
import {DepartmentItemComponent} from "./department-item.component";
import {BaseListComponent} from "../base/base-list.component";
import {FacilityService} from "../facility/facility.service";


@Component({
  selector: 'departments-list',
  moduleId: module.id,
  templateUrl: 'departments-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    DepartmentItemComponent,
  ]
})
export class DepartmentsListComponent extends BaseListComponent<Department> {
  constructor(protected service:DepartmentService, protected router:Router, private facilityService: FacilityService) {
    super(service, router, () => new Department());
  }
  facilityId: number;

  check(): void {
    this.facilityService.getBy(this.facilityId.toString()).subscribe(
      f => {
        if (f != null) {
          this.newItem.facility = f;
          this.newItem.specializations = [];
          this.create();
        } else {
          this.errorMsg = "Facility not found";
        }
      },
      msg => this.errorMsg = msg
    );
  }
}
