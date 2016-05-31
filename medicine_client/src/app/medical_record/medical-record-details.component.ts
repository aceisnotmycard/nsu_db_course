import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";
import {MedicalRecord} from "./medical-record";
import {MedicalRecordService} from "./medical-record.service";


@Component({
  selector: 'medical-record-details',
  moduleId: module.id,
  templateUrl: 'medical-record-details.component.html',
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
export class MedicalRecordDetailsComponent extends BaseDetailsComponent<MedicalRecord> {

  constructor(protected service:MedicalRecordService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'MedicalRecords', 'MedicalRecordDetails', () => new MedicalRecord());
  }
}
