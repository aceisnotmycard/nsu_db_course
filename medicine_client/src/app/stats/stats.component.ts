import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {MdCheckbox} from "@angular2-material/checkbox/checkbox";
import {MdButton} from "@angular2-material/button/button";
import {MdInput} from "@angular2-material/input/input";
import {StaffSpecializationItemComponent} from "../staff_specialization/staff-specialization.component";
import {MdList, MdListItem} from "@angular2-material/list/list";
import {MdCardHeader, MdCard} from "@angular2-material/card/card";
import {MedicalRecordService} from "../medical_record/medical-record.service";
import {MedicalRecord} from "../medical_record/medical-record";
import {MedicalRecordItemComponent} from "../medical_record/medical-record-item.component";

@Component({
  selector: 'stats',
  moduleId: module.id,
  templateUrl: 'stats.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
  ]
})
export class StatsComponent implements OnInit {
  constructor(private recordService: MedicalRecordService) {}

  currentRecords: MedicalRecord[];

  ngOnInit() {
    this.recordService.getCurrent().subscribe(
      cur => this.currentRecords = cur,
      msg => msg
    );
  }

}
