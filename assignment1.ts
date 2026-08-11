let employeeName: string = "Chandru";
let employeeId: number = 101;
let salary: number = 75000;
let isActive: boolean = true;

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