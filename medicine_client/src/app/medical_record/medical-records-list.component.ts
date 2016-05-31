import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {MedicalRecord} from "./medical-record";
import {MedicalRecordService} from "./medical-record.service";
import {MedicalRecordItemComponent} from "./medical-record-item.component";
import {Patient} from "../patient/patient";
import {Room} from "../room/room";
import {Doctor} from "../doctor/doctor";


@Component({
  selector: 'medical-records-list',
  moduleId: module.id,
  templateUrl: 'medical-records-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    MedicalRecordItemComponent,
  ]
})
export class MedicalRecordsListComponent extends BaseListComponent<MedicalRecord> {
  constructor(protected service:MedicalRecordService, protected router:Router) {
    super(service, router, () => new MedicalRecord());
  }

  patientName:string;
  roomName:string;
  doctorName:string;

  create():void {
    this.newItem.patient = new Patient();
    this.newItem.patient.name = this.patientName;
    this.newItem.doctors = [];
    this.newItem.doctors.push(new Doctor());
    this.newItem.doctors[0].name = this.doctorName;
    this.newItem.room = new Room();
    this.newItem.room.name = this.roomName;
    super.create();
  }
}

