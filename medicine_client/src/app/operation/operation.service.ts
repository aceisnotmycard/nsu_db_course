import {BaseService} from "../base/base.service";
import { Injectable }       from '@angular/core';
import { Http }   from '@angular/http';
import {Operation} from "./operation";

@Injectable()
export class OperationService extends BaseService<Operation> {
  constructor(protected http: Http) {
    super(http, BaseService.BASE_URL + 'operations/');
  }
}
