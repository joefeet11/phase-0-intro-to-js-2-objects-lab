// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",     


};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};

    newEmployee[key] = value;

    return newEmployee;
}
updateEmployeeWithKeyAndValue(employee, streetAddress, "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, "12 Broadway");

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee};
    delete newEmployee.name;

    return newEmployee;
}
deleteFromEmployeeByKey(employee, name);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;

    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, name);