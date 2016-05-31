import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";
import {Operation} from "./operation";
import {OperationService} from "./operation.service";


@Component({
  selector: 'operation-details',
  moduleId: module.id,
  templateUrl: 'operation-details.component.html',
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
export class OperationDetailsComponent extends BaseDetailsComponent<Operation> {

  constructor(protected service:OperationService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'Operations', 'OperationDetails', () => new Operation());
  }
}
