import {Injectable}       from '@angular/core';
import {Http}   from '@angular/http';
import {Department} from "./department";
import {BaseService} from "../base/base.service";
import {Room} from "../room/room";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DepartmentService extends BaseService<Department> {
  constructor(protected http:Http) {
    super(http, BaseService.BASE_URL + 'departments/');
  }

  getRoomsFor(id:string):Observable<Room[]> {
    console.log(this.base_url + id + '/rooms');
    return this.http.get(this.base_url + id + '/rooms').map(this.extractData).catch(this.handleError);
  }
}
