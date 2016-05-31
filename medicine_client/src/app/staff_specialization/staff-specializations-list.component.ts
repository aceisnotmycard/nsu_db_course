import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {StaffSpecialization} from "./staff-specialization";
import {StaffSpecializationService} from "./staff-specialization.service";
import {StaffSpecializationItemComponent} from "./staff-specialization.component";


@Component({
  selector: 'staff-specializations-list',
  moduleId: module.id,
  templateUrl: 'staff-specializations-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    StaffSpecializationItemComponent,
  ]
})
export class StaffSpecializationsListComponent extends BaseListComponent<StaffSpecialization> {
  constructor(protected service:StaffSpecializationService, protected router:Router) {
    super(service, router, () => new StaffSpecialization());
  }
}

