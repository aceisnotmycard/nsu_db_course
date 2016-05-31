import {Facility} from "../facility/facility";
import {DepartmentSpecialization} from "../department_specialization/department_specialization";
import {BaseItem} from "../base/base-item";

export class Department implements BaseItem {
  id: number;
  facility: Facility;
  specializations: DepartmentSpecialization[];
}
