import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {FacilityService} from "./facility.service";
import {Facility} from "./facility";

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";


@Component({
  selector: 'facility-details',
  moduleId: module.id,
  templateUrl: 'facility-details.component.html',
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
export class FacilityDetailsComponent extends BaseDetailsComponent<Facility> {
  constructor(protected service:FacilityService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'Facilities', 'FacilityDetails', () => new Facility());
  }
}
