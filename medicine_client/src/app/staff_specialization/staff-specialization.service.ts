import {BaseService} from "../base/base.service";
import { Injectable }       from '@angular/core';
import { Http }   from '@angular/http';
import {StaffSpecialization} from "./staff-specialization";

@Injectable()
export class StaffSpecializationService extends BaseService<StaffSpecialization> {
  constructor(protected http: Http) {
    super(http, BaseService.BASE_URL + 'staff-specializations/');
  }
}
