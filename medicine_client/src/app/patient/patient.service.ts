import {BaseService} from "../base/base.service";
import { Injectable }       from '@angular/core';
import { Http }   from '@angular/http';
import {Patient} from "./patient";

@Injectable()
export class PatientService extends BaseService<Patient> {
  constructor(protected http: Http) {
    super(http, BaseService.BASE_URL + 'patients/');
  }
}
