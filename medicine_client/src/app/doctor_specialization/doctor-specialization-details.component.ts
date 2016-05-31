import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";
import {DoctorSpecialization} from "./doctor-specialization";
import {DoctorSpecializationService} from "./doctor-specialization.service";


@Component({
  selector: 'doctor-specialization-details',
  moduleId: module.id,
  templateUrl: 'doctor-specialization-details.component.html',
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
export class DoctorSpecializationDetailsComponent extends BaseDetailsComponent<DoctorSpecialization> {

  constructor(protected service:DoctorSpecializationService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'DoctorSpecializations', 'DoctorSpecializationDetails', () => new DoctorSpecialization());
  }
}
