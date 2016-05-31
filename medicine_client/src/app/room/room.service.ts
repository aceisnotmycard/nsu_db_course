import {BaseService} from "../base/base.service";
import { Injectable }       from '@angular/core';
import { Http }   from '@angular/http';
import {Room} from "./room";

@Injectable()
export class RoomService extends BaseService<Room> {
  constructor(protected http: Http) {
    super(http, BaseService.BASE_URL + 'rooms/');
  } 
}
