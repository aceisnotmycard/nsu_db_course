import {Injectable}       from '@angular/core';
import {Http}   from '@angular/http';

import {Facility}         from './facility'
import {BaseService} from "../base/base.service";

@Injectable()
export class FacilityService extends BaseService<Facility> {
  constructor(protected http:Http) {
    super(http, BaseService.BASE_URL + 'facilities/');
  }
}
