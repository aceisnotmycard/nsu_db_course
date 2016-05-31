import { Injectable }       from '@angular/core';
import { Http }   from '@angular/http';
import {BaseService} from "../base/base.service";
import {LabFacility} from "./lab-facility";

@Injectable()
export class LabFacilityService extends BaseService<LabFacility> {
  constructor(protected http: Http) {
    super(http, BaseService.BASE_URL + 'lab-facility/');
  }
}
