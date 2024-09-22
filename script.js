// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Collect employee data
const collectEmployees = function() {
  const employees = [];
  // TODO: Get user input to create and return an array of employee objects
    let addEmployee = true;
    while (addEmployee) {
        employees.push({
        firstName: prompt("Enter employee's first name:"),
        lastName: prompt("Enter employee's last name:"),
        salary: parseFloat(prompt("Enter employee's salary:"))||0
      });
      addEmployee = confirm("Would you like to add another employee?");
      if (!addEmployee) {
        return employees;
    }
} 
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
    let totalSalary = 0;
    for (let i = 0; i < employeesArray.length; i++) {
      totalSalary += employeesArray[i].salary;
    }
    const formattedSalary = (totalSalary / employeesArray.length).toFixed(2);
    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${formattedSalary}`);
    return formattedSalary;
}
// Select a random employee
const getRandomEmployee = function(employees) {
    const selectEmployee = employees[Math.floor(Math.random() * employees.length)];
    console.log(`Congratulations to ${selectEmployee.firstName} ${selectEmployee.lastName}, our random drawing winner!`);
    return selectEmployee;
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);