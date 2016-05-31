import {Component, OnInit} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {DepartmentService} from "./department.service";
import {Department} from "./department";
import {Facility} from "../facility/facility";
import {BaseDetailsComponent} from "../base/base-details.component";
import {Room} from "../room/room";
import {RoomService} from "../room/room.service";
import {RoomItemComponent} from "../room/room-item.component";


@Component({
  selector: 'department-details',
  moduleId: module.id,
  templateUrl: 'department-details.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    RoomItemComponent
  ]
})
export class DepartmentDetailsComponent extends BaseDetailsComponent<Department> {

  constructor(protected service:DepartmentService, protected routeParams:RouteParams,
              protected router:Router) {
    super(service, routeParams, router, 'Departments', 'DepartmentDetails', () => new Department());
  }

  rooms: Room[];

  ngOnInit():void {
    super.ngOnInit();
    this.service.getRoomsFor(this.id.toString()).subscribe(
      rooms => this.rooms = rooms,
      m => m
    );
  }
}
