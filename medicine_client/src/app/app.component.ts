import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS}    from '@angular/http';
import {MdToolbar} from '@angular2-material/toolbar'
import {MdSidenav, MdSidenavLayout} from '@angular2-material/sidenav';
import {MdButton} from '@angular2-material/button';

import {FacilityDetailsComponent} from "./facility/facility-details.component";
import {FacilitiesListComponent} from "./facility/facilities-list.component";
import {FacilityService} from "./facility/facility.service";
import {DepartmentsListComponent} from "./department/departments-list.component";
import {DepartmentService} from "./department/department.service";
import {DepartmentDetailsComponent} from "./department/department-details.component";
import {DoctorsListComponent} from "./doctor/doctors-list.component";
import {DoctorService} from "./doctor/doctor.service";
import {DoctorSpecializationService} from "./doctor_specialization/doctor-specialization.service";
import {LabService} from "./lab/lab.service";
import {LabFacilityService} from "./lab_facility/lab-facility.service";
import {MedicalRecordService} from "./medical_record/medical-record.service";
import {OperationService} from "./operation/operation.service";
import {PatientService} from "./patient/patient.service";
import {RoomService} from "./room/room.service";
import {StaffService} from "./staff/staff.service";
import {StaffSpecializationService} from "./staff_specialization/staff-specialization.service";
import {DoctorDetailsComponent} from "./doctor/doctor-details.component";
import {DoctorSpecializationsListComponent} from "./doctor_specialization/doctor-specializations-list.component";
import {DoctorSpecializationDetailsComponent} from "./doctor_specialization/doctor-specialization-details.component";
import {LabsListComponent} from "./lab/labs-list.component";
import {LabDetailsComponent} from "./lab/lab-details.component";
import {LabFacilitiesListComponent} from "./lab_facility/lab-facilities-list.component";
import {LabFacilityDetailsComponent} from "./lab_facility/lab-facility-details.component";
import {MedicalRecordsListComponent} from "./medical_record/medical-records-list.component";
import {MedicalRecordDetailsComponent} from "./medical_record/medical-record-details.component";
import {OperationsListComponent} from "./operation/operations-list.component";
import {OperationDetailsComponent} from "./operation/operation-details.component";
import {PatientsListComponent} from "./patient/patients-list.component";
import {PatientDetailsComponent} from "./patient/patient-details.component";
import {RoomsListComponent} from "./room/rooms-list.component";
import {RoomDetailsComponent} from "./room/room-details.component";
import {StaffsListComponent} from "./staff/staffs-list.component";
import {StaffDetailsComponent} from "./staff/staff-details.component";
import {StaffSpecializationsListComponent} from "./staff_specialization/staff-specializations-list.component";
import {StaffSpecializationDetailsComponent} from "./staff_specialization/staff-specialization-details.component";
import {StatsComponent} from "./stats/stats.component";


@RouteConfig([
  {path: '/facilities',                   name: 'Facilities',                   component: FacilitiesListComponent},
  {path: '/facilities/:id',               name: 'FacilityDetails',              component: FacilityDetailsComponent},
  {path: '/departments',                  name: 'Departments',                  component: DepartmentsListComponent},
  {path: '/departments/:id',              name: 'DepartmentDetails',            component: DepartmentDetailsComponent},
  {path: '/doctors',                      name: 'Doctors',                      component: DoctorsListComponent},
  {path: '/doctors/:id',                  name: 'DoctorDetails',                component: DoctorDetailsComponent},
  {path: '/doctors-specializations',      name: 'DoctorSpecializations',        component: DoctorSpecializationsListComponent},
  {path: '/doctors-specializations/:id',  name: 'DoctorSpecializationDetails',  component: DoctorSpecializationDetailsComponent},
  {path: '/labs',                         name: 'Labs',                         component: LabsListComponent},
  {path: '/labs/:id',                     name: 'LabDetails',                   component: LabDetailsComponent},
  {path: '/lab-facilities',               name: 'LabFacilities',                component: LabFacilitiesListComponent},
  {path: '/lab-facilities/:id',           name: 'LabFacilityDetails',           component: LabFacilityDetailsComponent},
  {path: '/medical-records',              name: 'MedicalRecords',               component: MedicalRecordsListComponent},
  {path: '/medical-records/:id',          name: 'MedicalRecordDetails',         component: MedicalRecordDetailsComponent},
  {path: '/operations',                   name: 'Operations',                   component: OperationsListComponent},
  {path: '/operations/:id',               name: 'OperationDetails',             component: OperationDetailsComponent},
  {path: '/patients',                     name: 'Patients',                     component: PatientsListComponent},
  {path: '/patients/:id',                 name: 'PatientDetails',               component: PatientDetailsComponent},
  {path: '/rooms',                        name: 'Rooms',                        component: RoomsListComponent},
  {path: '/rooms/:id',                    name: 'RoomDetails',                  component: RoomDetailsComponent},
  {path: '/staffs',                       name: 'Staffs',                       component: StaffsListComponent},
  {path: '/staffs/:id',                   name: 'StaffDetails',                 component: StaffDetailsComponent},
  {path: '/staff-specializations',        name: 'StaffSpecializations',         component: StaffSpecializationsListComponent},
  {path: '/staff-specializations/:id',    name: 'StaffSpecializationDetails',   component: StaffSpecializationDetailsComponent},
  {path: '/stats',                        name: 'Stats',                        component: StatsComponent}
])
@Component({
  moduleId: module.id,
  selector: 'med-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [
    ROUTER_PROVIDERS,
    FacilityService,
    DepartmentService,
    DoctorService,
    DoctorSpecializationService,
    LabService,
    LabFacilityService,
    MedicalRecordService,
    OperationService,
    PatientService,
    RoomService,
    StaffService,
    StaffSpecializationService,
    HTTP_PROVIDERS
  ],
  directives: [
    ROUTER_DIRECTIVES,
    MdToolbar,
    MdSidenav,
    MdSidenavLayout,
    MdButton
  ]
})
export class AppComponent {
}
