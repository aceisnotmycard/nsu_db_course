import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {OperationService} from "./operation.service";
import {Operation} from "./operation";
import {OperationItemComponent} from "./operation-item.component";
import {Doctor} from "../doctor/doctor";
import {Facility} from "../facility/facility";
import {MedicalRecord} from "../medical_record/medical-record";


@Component({
  selector: 'operations-list',
  moduleId: module.id,
  templateUrl: 'operations-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    OperationItemComponent,
  ]
})
export class OperationsListComponent extends BaseListComponent<Operation> {
  constructor(protected service:OperationService, protected router:Router) {
    super(service, router, () => new Operation());
  }

  surgeonName:string;
  facilityAddress:string;
  recordId:number;

  create():void {
    this.newItem.surgeon = new Doctor();
    this.newItem.surgeon.name = this.surgeonName;
    this.newItem.facility = new Facility();
    this.newItem.facility.address = this.facilityAddress;
    this.newItem.record = new MedicalRecord();
    this.newItem.record.id = this.recordId;
    super.create();
  }
}

