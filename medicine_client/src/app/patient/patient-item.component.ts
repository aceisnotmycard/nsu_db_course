import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseItemComponent} from "../base/base-item.component";
import {PatientService} from "./patient.service";
import {Patient} from "./patient";


@Component({
  selector: 'patient-item',
  moduleId: module.id,
  templateUrl: 'patient-item.component.html',
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
export class PatientItemComponent extends BaseItemComponent<Patient> {
  constructor(protected service:PatientService, protected router:Router) {
    super(service, router, 'PatientDetails');
  }
}
