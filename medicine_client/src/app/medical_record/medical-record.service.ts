import {BaseService} from "../base/base.service";
import { Injectable }       from '@angular/core';
import { Http }   from '@angular/http';
import {MedicalRecord} from "./medical-record";
import {Observable} from "rxjs/Rx";

@Injectable()
export class MedicalRecordService extends BaseService<MedicalRecord> {
  constructor(protected http: Http) {
    super(http, BaseService.BASE_URL + 'medical-records/');
  }

  getCurrent(): Observable<MedicalRecord[]> {
    return this.http.get(this.base_url + 'current').map(this.extractData).catch(this.handleError);
  }
}
