import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {Staff} from "./staff";
import {StaffService} from "./staff.service";
import {StaffItemComponent} from "./staff-item.component";
import {FacilityService} from "../facility/facility.service";
import {StaffSpecializationService} from "../staff_specialization/staff-specialization.service";


@Component({
  selector: 'staffs-list',
  moduleId: module.id,
  templateUrl: 'staffs-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    StaffItemComponent,
  ]
})
export class StaffsListComponent extends BaseListComponent<Staff> {
  constructor(protected service:StaffService, protected router:Router,
              private facilityService: FacilityService, private specService: StaffSpecializationService) {
    super(service, router, () => new Staff());
  }

  specName:string;
  facilityId:number;

  check():void {
    this.facilityService.getBy(this.facilityId.toString()).subscribe(f => {
        if (f != null) {
          this.newItem.facility = f;
          this.specService.getAll().subscribe(
            lst => lst.forEach(spec => {
              if (spec.name.toLocaleLowerCase().localeCompare(this.specName.toLocaleLowerCase()) == 0) {
                this.newItem.specialization = spec;
                this.create();
              }
            }),
            msg => this.errorMsg = msg
          );
        } else {
          this.errorMsg = "Facility not found";
        }
      },
      msg => this.errorMsg = msg
    );
  }
}

