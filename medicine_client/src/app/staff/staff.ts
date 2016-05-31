import {StaffSpecialization} from "../staff_specialization/staff-specialization";
import {Facility} from "../facility/facility";
export class Staff {
  id: number;
  name: string;
  specialization: StaffSpecialization;
  facility: Facility;
}
