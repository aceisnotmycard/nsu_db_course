import {DoctorSpecialization} from "../doctor_specialization/doctor-specialization";
import {BaseItem} from "../base/base-item";
export class Doctor implements BaseItem {
  id: number;
  name: string;
  specialization: DoctorSpecialization = new DoctorSpecialization();
  isCandidate: boolean = false;
  isMd: boolean = false;
  isProfessor: boolean = false;
  isAssociate: boolean = false;
}
