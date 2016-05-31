import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {Patient} from "./patient";
import {PatientService} from "./patient.service";
import {PatientItemComponent} from "./patient-item.component";


@Component({
  selector: 'patients-list',
  moduleId: module.id,
  templateUrl: 'patients-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    PatientItemComponent,
  ]
})
export class PatientsListComponent extends BaseListComponent<Patient> {
  constructor(protected service:PatientService, protected router:Router) {
    super(service, router, () => new Patient());
  }
}

