import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseItemComponent} from "../base/base-item.component";
import {MedicalRecordService} from "./medical-record.service";
import {MedicalRecord} from "./medical-record";


@Component({
  selector: 'medical-record-item',
  moduleId: module.id,
  templateUrl: 'medical-record-item.component.html',
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
export class MedicalRecordItemComponent extends BaseItemComponent<MedicalRecord> {
  constructor(protected service:MedicalRecordService, protected router:Router) {
    super(service, router, 'MedicalRecordDetails');
  }
}
