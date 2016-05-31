import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseItemComponent} from "../base/base-item.component";
import {LabService} from "./lab.service";
import {Lab} from "./lab";


@Component({
  selector: 'lab-item',
  moduleId: module.id,
  templateUrl: 'lab-item.component.html',
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
export class LabItemComponent extends BaseItemComponent<Lab> {
  constructor(protected service:LabService, protected router:Router) {
    super(service, router, 'LabDetails');
  }

  description(): string {
    let res = "";
    if (this.item.chemistry) {
      res += "chemistry ";
    }
    if (this.item.biochemistry) {
      res += "bio ";
    }
    if (this.item.physiology) {
      res += "physio";
    }
    return res;
  }
}
