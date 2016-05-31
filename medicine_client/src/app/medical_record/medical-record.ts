import {Patient} from "../patient/patient";
import {Room} from "../room/room";
import {Doctor} from "../doctor/doctor";
import {BaseItem} from "../base/base-item";
export class MedicalRecord implements BaseItem{
  id: number;
  patient: Patient;
  room: Room;
  doctors: Doctor[];
  temperature: number = 36.6;
  startDate: Date;
  endDate: Date;
}
