import {BaseService} from "../base/base.service";
import { Injectable }       from '@angular/core';
import { Http }   from '@angular/http';
import {DoctorSpecialization} from "./doctor-specialization";

@Injectable()
export class DoctorSpecializationService extends BaseService<DoctorSpecialization> {
  constructor(protected http: Http) {
    super(http, BaseService.BASE_URL + 'doctor-specializations/');
  }
  
}
