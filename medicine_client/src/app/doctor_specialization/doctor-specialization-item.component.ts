import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseItemComponent} from "../base/base-item.component";
import {DoctorSpecializationService} from "./doctor-specialization.service";
import {DoctorSpecialization} from "./doctor-specialization";


@Component({
  selector: 'doctor-specialization-item',
  moduleId: module.id,
  templateUrl: 'doctor-specialization-item.component.html',
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
export class DoctorSpecializationItemComponent extends BaseItemComponent<DoctorSpecialization> {
  constructor(protected service:DoctorSpecializationService, protected router:Router) {
    super(service, router, 'DoctorSpecializationDetails');
  }
}


