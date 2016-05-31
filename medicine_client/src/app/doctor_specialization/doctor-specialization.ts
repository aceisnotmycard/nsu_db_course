import {BaseItem} from "../base/base-item";
export class DoctorSpecialization implements BaseItem{
  id: number;
  name: string;
  salaryCoef: number = 1;
  vacationDays: number = 0;
  isSurgeon: boolean = false;
}
