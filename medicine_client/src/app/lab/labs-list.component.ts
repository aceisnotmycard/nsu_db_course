import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {Lab} from "./lab";
import {LabService} from "./lab.service";
import {LabItemComponent} from "./lab-item.component";


@Component({
  selector: 'labs-list',
  moduleId: module.id,
  templateUrl: 'labs-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    LabItemComponent,
  ]
})
export class LabsListComponent extends BaseListComponent<Lab> {
  constructor(protected service:LabService, protected router:Router) {
    super(service, router, () => new Lab());
  }
}

