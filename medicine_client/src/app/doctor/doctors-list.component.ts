
import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {Doctor} from "./doctor";
import {DoctorService} from "./doctor.service";
import {DoctorItemComponent} from "./doctor-item.component";
import {DoctorSpecializationService} from "../doctor_specialization/doctor-specialization.service";


@Component({
  selector: 'doctors-list',
  moduleId: module.id,
  templateUrl: 'doctors-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    DoctorItemComponent,
  ]
})
export class DoctorsListComponent extends BaseListComponent<Doctor> {
  constructor(protected service:DoctorService, protected router:Router, private specService:DoctorSpecializationService) {
    super(service, router, () => new Doctor());
  }
  specialization:string;

  check():void {
    this.specService.getAll().subscribe(
      lst => lst.forEach(spec => {
          if (spec.name.toLocaleLowerCase().localeCompare(this.specialization.toLocaleLowerCase()) == 0) {
            this.newItem.specialization = spec;
            this.create();
          }
        }),
      msg => this.errorMsg = msg
    );
  }
  
  search():void {
    
  }
}

