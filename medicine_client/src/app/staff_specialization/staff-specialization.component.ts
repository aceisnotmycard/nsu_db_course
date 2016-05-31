import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseItemComponent} from "../base/base-item.component";
import {StaffSpecializationService} from "./staff-specialization.service";
import {StaffSpecialization} from "./staff-specialization";


@Component({
  selector: 'staff-specialization-item',
  moduleId: module.id,
  templateUrl: 'staff-specialization-item.component.html',
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
export class StaffSpecializationItemComponent extends BaseItemComponent<StaffSpecialization> {
  constructor(protected service:StaffSpecializationService, protected router:Router) {
    super(service, router, 'StaffSpecializationDetails');
  }
}

