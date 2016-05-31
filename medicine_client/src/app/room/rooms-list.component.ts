import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MdList, MdListItem} from '@angular2-material/list';
import {MdCard, MdCardHeader} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {BaseListComponent} from "../base/base-list.component";
import {Room} from "./room";
import {RoomService} from "./room.service";
import {RoomItemComponent} from "./room-item.component";
import {DepartmentService} from "../department/department.service";


@Component({
  selector: 'rooms-list',
  moduleId: module.id,
  templateUrl: 'rooms-list.component.html',
  directives: [
    MdCheckbox,
    MdButton,
    MdList,
    MdListItem,
    MdCard,
    MdCardHeader,
    MdInput,
    RoomItemComponent,
  ]
})
export class RoomsListComponent extends BaseListComponent<Room> {
  constructor(protected service:RoomService, protected router:Router, private depService: DepartmentService) {
    super(service, router, () => new Room());
  }

  departmentId:number;

  check(): void {
    this.depService.getBy(this.departmentId.toString()).subscribe(
      d => {
        if (d != null) {
          this.newItem.department = d;
          this.create();
        } else {
          this.errorMsg = "Facility not found";
        }
      },
      msg => this.errorMsg = msg
    );
  }
}

