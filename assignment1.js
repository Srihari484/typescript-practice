"use strict";
let employeeName = "Chandru";
let employeeId = 101;
let salary = 75000;
let isActive = true;
const employee = {
    name: employeeName,
    id: employeeId,
    salary: salary,
    isActive: isActive
};
console.log("Employee:", employee.name);
console.log("ID:", employee.id);
console.log("Salary:", employee.salary);
console.log("Active:", employee.isActive ? "Yes" : "No");
