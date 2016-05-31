import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";
import {Patient} from "./patient";
import {PatientService} from "./patient.service";


@Component({
  selector: 'patient-details',
  moduleId: module.id,
  templateUrl: 'patient-details.component.html',
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
export class PatientDetailsComponent extends BaseDetailsComponent<Patient> {

  constructor(protected service:PatientService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'Patients', 'PatientDetails', () => new Patient());
  }
}
