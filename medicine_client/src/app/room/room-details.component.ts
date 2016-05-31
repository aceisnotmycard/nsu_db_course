import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseDetailsComponent} from "../base/base-details.component";
import {Room} from "./room";
import {RoomService} from "./room.service";


@Component({
  selector: 'room-details',
  moduleId: module.id,
  templateUrl: 'room-details.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput
  ]
})
export class RoomDetailsComponent extends BaseDetailsComponent<Room> {

  constructor(protected service:RoomService, protected routeParams:RouteParams, protected router:Router) {
    super(service, routeParams, router, 'Rooms', 'RoomDetails', () => new Room());
  }
}
