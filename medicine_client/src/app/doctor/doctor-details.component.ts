import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";
import {Doctor} from "./doctor";
import {DoctorService} from "./doctor.service";


@Component({
  selector: 'doctor-details',
  moduleId: module.id,
  templateUrl: 'doctor-details.component.html',
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
export class DoctorDetailsComponent extends BaseDetailsComponent<Doctor> {

  constructor(protected service:DoctorService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'Doctors', 'DoctorDetails', () => new Doctor());
  }
}
