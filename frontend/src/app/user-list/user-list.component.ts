import { Component, OnInit } from '@angular/core';
import { DataService } from '../user-list/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private dataservice:DataService) { }

  ngOnInit() {
  }

  newName : string = "";
  newUnits : string = "";
  newDepartment : string = "";
  newAssignment : string = "";

  addCourse() {
  //   var id = 1;
  //   if (this.dataservice.length > 0) {
  //     id = this.dataservice[this.dataservice.length - 1]["id"] + 1;
  //   }

    this.dataservice.courseList.push({ "name":this.newName, "units":this.newUnits, "department":this.newDepartment, "assignment":this.newAssignment });
    this.newName = "";
    this.newUnits = "";
    this.newDepartment = "";
    this.newAssignment = "";
  }

}
