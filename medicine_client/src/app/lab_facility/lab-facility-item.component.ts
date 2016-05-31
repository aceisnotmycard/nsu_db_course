import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseItemComponent} from "../base/base-item.component";
import {LabFacilityService} from "./lab-facility.service";
import {LabFacility} from "./lab-facility";


@Component({
  selector: 'lab-facility-item',
  moduleId: module.id,
  templateUrl: 'lab-facility-item.component.html',
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
export class LabFacilityItemComponent extends BaseItemComponent<LabFacility> {
  constructor(protected service:LabFacilityService, protected router:Router) {
    super(service, router, 'LabFacilityDetails');
  }
}
