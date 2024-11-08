// // Employee array to hold employee data
// let employees = [];

// // Function to display employee details in the table
// function displayEmployees() {
//     const tableBody = document.querySelector('#employeeTable tbody');
//     tableBody.innerHTML = ''; // Clear the table before adding new rows

//     employees.forEach((emp, index) => {
//         const row = document.createElement('tr');
        
//         row.innerHTML = `
//             <td>${emp.name}</td>
//             <td>${emp.empId}</td>
//             <td>${emp.department}</td>
//             <td>$${emp.salary}</td>
//             <td><button onclick="deleteEmployee(${index})">Delete</button></td>
//         `;
        
//         tableBody.appendChild(row);
//     });
// }

// // Function to handle form submission
// document.querySelector('#employeeForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.querySelector('#empName').value;
//     const empId = document.querySelector('#empId').value;
//     const department = document.querySelector('#empDept').value;
//     const salary = document.querySelector('#empSalary').value;

//     // Create a new employee object
//     const newEmployee = {
//         name: name,
//         empId: empId,
//         department: department,
//         salary: salary
//     };

//     // Add the new employee to the employees array
//     employees.push(newEmployee);

//     // Reset form fields
//     document.querySelector('#employeeForm').reset();

//     // Display updated employee list
//     displayEmployees();
// });

// // Function to delete an employee
// function deleteEmployee(index) {
//     // Remove the employee from the array
//     employees.splice(index, 1);

//     // Update the displayed employee list
//     displayEmployees();
// }


// Employee array to hold employee data
let employees = JSON.parse(localStorage.getItem('employees')) || []; 

// Function to display employee details in the table
function displayEmployees() {
    const tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = ''; // Clear the table before adding new rows

    employees.forEach((emp, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.empId}</td>
            <td>${emp.department}</td>
            <td>$${emp.salary}</td>
            <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Function to save employees array to localStorage
function saveToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(employees));
}

// Function to handle form submission
document.querySelector('#employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#empName').value;
    const empId = document.querySelector('#empId').value;
    const department = document.querySelector('#empDept').value;
    const salary = document.querySelector('#empSalary').value;

    // Create a new employee object
    const newEmployee = {
        name: name,
        empId: empId,
        department: department,
        salary: salary
    };

    // Add the new employee to the employees array
    employees.push(newEmployee);

    // Save the updated employees array to localStorage
    saveToLocalStorage();

    // Reset form fields
    document.querySelector('#employeeForm').reset();

    // Display updated employee list
    displayEmployees();
});

// Function to delete an employee
function deleteEmployee(index) {
    // Remove the employee from the array
    employees.splice(index, 1);

    // Save the updated employees array to localStorage
    saveToLocalStorage();

    // Update the displayed employee list
    displayEmployees();
}

// Display employees when the page loads
displayEmployees();
