import { Injectable }       from '@angular/core';
import { Http }   from '@angular/http';
import {BaseService} from "../base/base.service";
import {Lab} from "./lab";

@Injectable()
export class LabService extends BaseService<Lab> {
  constructor(protected http: Http) {
    super(http, BaseService.BASE_URL + 'labs/');
  }
}
