import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";
import {Lab} from "./lab";
import {LabService} from "./lab.service";


@Component({
  selector: 'lab-details',
  moduleId: module.id,
  templateUrl: 'lab-details.component.html',
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
export class LabDetailsComponent extends BaseDetailsComponent<Lab> {

  constructor(protected service:LabService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'Labs', 'LabDetails', () => new Lab());
  }
}
