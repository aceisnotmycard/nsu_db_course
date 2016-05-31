import {Facility} from "../facility/facility";
import {MedicalRecord} from "../medical_record/medical-record";
import {Doctor} from "../doctor/doctor";
import {BaseItem} from "../base/base-item";
export class Operation implements BaseItem {
  id: number;
  isSurvived: boolean;
  date: Date;
  facility: Facility;
  record: MedicalRecord;
  surgeon: Doctor;
}
