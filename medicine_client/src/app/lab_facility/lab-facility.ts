import {Facility} from "../facility/facility";
import {Lab} from "../lab/lab";
export class LabFacility {
  id: number;
  facility: Facility = new Facility();
  lab: Lab = new Lab();
  startDate: Date;
  endDate: Date;
}
