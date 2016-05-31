import {BaseService} from "../base/base.service";
import { Injectable }       from '@angular/core';
import { Http }   from '@angular/http';
import {Staff} from "./staff";

@Injectable()
export class StaffService extends BaseService<Staff> {
  constructor(protected http: Http) {
    super(http, BaseService.BASE_URL + 'staff/');
  }
}
