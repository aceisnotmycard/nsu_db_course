import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseItemComponent} from "../base/base-item.component";
import {FacilityService} from "./facility.service";
import {Facility} from "./facility";


@Component({
  selector: 'facility-item',
  moduleId: module.id,
  templateUrl: 'facility-item.component.html',
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
export class FacilityItemComponent extends BaseItemComponent<Facility> {
  constructor(protected service:FacilityService, protected router:Router) {
    super(service, router, 'FacilityDetails');
  }
}
