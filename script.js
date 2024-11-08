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
            <td><button onclick="editEmployee(${index})" id="edit">Edit</button> &nbsp; <button onclick="deleteEmployee(${index})" id="delete">Delete</button></td>
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

function editEmployee(index) {
    // Get the specific employee based on the index provided
    let employee = employees[index];

    // Populate form fields with the employee's details
    document.querySelector('#empName').value = employee.name;
    document.querySelector('#empId').value = employee.empId;
    document.querySelector('#empDept').value = employee.department;
    document.querySelector('#empSalary').value = employee.salary;

    // Hide the "Add Employee" button
    document.getElementById("addEmployeeBtn").style.visibility = "hidden";
    
    // Create an "Update Values" button only if it doesn't already exist
    let updateBtn = document.getElementById("updateEmployeeBtn");
    if (!updateBtn) {
        updateBtn = document.createElement('button');
        updateBtn.id = 'updateEmployeeBtn';
        updateBtn.className = 'btn';
        updateBtn.textContent = "Update Values";
        document.getElementById("employeeForm").appendChild(updateBtn);
    }

    // Add event listener to update employee details
    updateBtn.onclick = () => {
        // Collect the updated values from the form
        employees[index] = {
            name: document.querySelector('#empName').value,
            empId: document.querySelector('#empId').value,
            department: document.querySelector('#empDept').value,
            salary: document.querySelector('#empSalary').value
        };

        // Update localStorage with the modified employees array
        saveToLocalStorage();

        // Reset the form and display updated employee list
        document.querySelector('#employeeForm').reset();
        displayEmployees();

        // Re-show the "Add Employee" button and remove the update button after updating
        document.getElementById("addEmployeeBtn").style.visibility = "visible";
        updateBtn.remove();
    };
}

// Display employees when the page loads
displayEmployees();
