import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {FacilityService} from "./facility.service";
import {Facility} from "./facility";
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {FacilityItemComponent} from "./facility-item.component";


@Component({
  selector: 'facilities-list',
  moduleId: module.id,
  templateUrl: 'facilities-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    FacilityItemComponent
  ]
})
export class FacilitiesListComponent extends BaseListComponent<Facility> {
  constructor(protected service:FacilityService, protected router:Router) {
    super(service, router, () => new Facility());
  }
}
