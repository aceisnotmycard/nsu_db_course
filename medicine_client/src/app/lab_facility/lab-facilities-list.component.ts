import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {LabFacilityService} from "./lab-facility.service";
import {LabFacility} from "./lab-facility";
import {LabFacilityItemComponent} from "./lab-facility-item.component";
import {Facility} from "../facility/facility";
import {Lab} from "../lab/lab";


@Component({
  selector: 'lab-facilities-list',
  moduleId: module.id,
  templateUrl: 'lab-facilities-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    LabFacilityItemComponent,
  ]
})
export class LabFacilitiesListComponent extends BaseListComponent<LabFacility> {
  constructor(protected service:LabFacilityService, protected router:Router) {
    super(service, router, () => new LabFacility());
  }

  labName:string;
  facAddress:string;

  create():void {
    this.newItem.facility = new Facility();
    this.newItem.lab = new Lab();
    this.newItem.lab.name = this.labName;
    this.newItem.facility.address = this.facAddress;
    super.create();
  }
}

