import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";
import {StaffSpecialization} from "./staff-specialization";
import {StaffSpecializationService} from "./staff-specialization.service";


@Component({
  selector: 'staff-specialization-details',
  moduleId: module.id,
  templateUrl: 'staff-specialization-details.component.html',
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
export class StaffSpecializationDetailsComponent extends BaseDetailsComponent<StaffSpecialization> {

  constructor(protected service:StaffSpecializationService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'StaffSpecializations', 'StaffSpecializationDetails', () => new StaffSpecialization());
  }
}
