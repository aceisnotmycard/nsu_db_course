
import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {DoctorSpecialization} from "./doctor-specialization";
import {DoctorSpecializationService} from "./doctor-specialization.service";
import {DoctorSpecializationItemComponent} from "./doctor-specialization-item.component";


@Component({
  selector: 'doctor-specializations-list',
  moduleId: module.id,
  templateUrl: 'doctor-specializations-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    DoctorSpecializationItemComponent,
  ]
})
export class DoctorSpecializationsListComponent extends BaseListComponent<DoctorSpecialization> {
  constructor(protected service:DoctorSpecializationService, protected router:Router) {
    super(service, router, () => new DoctorSpecialization());
  }
}

