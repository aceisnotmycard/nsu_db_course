import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";
import {LabFacility} from "./lab-facility";
import {LabFacilityService} from "./lab-facility.service";


@Component({
  selector: 'lab-facility-details',
  moduleId: module.id,
  templateUrl: 'lab-facility-details.component.html',
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
export class LabFacilityDetailsComponent extends BaseDetailsComponent<LabFacility> {

  constructor(protected service:LabFacilityService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'LabFacilities', 'LabFacilityDetails', () => new LabFacility());
  }
}
