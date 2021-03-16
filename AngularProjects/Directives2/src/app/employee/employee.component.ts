import { Component, OnInit } from "@angular/core";

import { Employee } from "./employee";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  emplist: Employee[] | undefined;
  showEdit: boolean = false;
  editIcon: any;
  constructor() {}

  ngOnInit() {
    this.editIcon = "assets/edit-512.png";
    this.emplist = [
      {
        id: 1,
        First_Name: "Sadhana",
        Last_Name: "Tripathi",
        Dept: "IT",
        City: "Lucknow",
        Email: "sadhana.tripathi@tatapower.com",
      },
      
    ];
  }

  EditEmp() {
    this.showEdit = true;
  }

  UpdateEmp() {
    this.showEdit = false;
  }
}
