// Write your solution in this file!
const employee = {
 name: 'Sam',
 streetAdress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
 const updatedEmployee = { ...employee };
 updatedEmployee[key] = value;
 return updatedEmployee;
}
console.log(updateEmployeeWithKeyAndValue(employee, 'streetAdress', '12 Broadway'));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
 employee[key] = value;
 return employee;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Maral'))

function deleteFromEmployeeByKey(employee, key) {
 const employeeByKey = { ...employee };
 delete employeeByKey[key];
 return employeeByKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
 delete employee[key];
 return employee;
}