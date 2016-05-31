import {BaseService} from "../base/base.service";
import {Doctor} from "./doctor";
import { Injectable }       from '@angular/core';
import { Http }   from '@angular/http';

@Injectable()
export class DoctorService extends BaseService<Doctor> {
  constructor(protected http: Http) {
    super(http, BaseService.BASE_URL + 'doctors/');
  }
}
