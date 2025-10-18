document.getElementById('addEmployee').addEventListener('click', () => {
  alert('Add Employee button clicked!');
});

const employees = [
  { id: 1, name: "SK Mohd Tanveer", dept: "IT", position: "Developer", status: "Active" },
  { id: 2, name: "Nusrat Praween", dept: "HR", position: "HR Manager", status: "Active" },
  { id: 3, name: "Saba Ansari", dept: "Finance", position: "Accountant", status: "Active" },
  { id: 4, name: "Meraj Ansari", dept: "Marketing", position: "Executive", status: "Active" },
  { id: 5, name: "Amil Pasha", dept: "Sales", position: "Sales Manager", status: "Active" },
  { id: 6, name: "Fatima Ali", dept: "Design", position: "UI Designer", status: "Active" },
  { id: 7, name: "Prawez Alam ", dept: "Support", position: "Support Staff", status: "Inactive" },
  { id: 8, name: "Sara Khan", dept: "Operations", position: "Coordinator", status: "Active" },
  { id: 9, name: "Arshad Sheikh", dept: "Admin", position: "Admin Officer", status: "Inactive" },
  { id: 10, name: "Sheikh Sufiyan", dept: "IT", position: "Tester", status: "Active" },
];

const tableBody = document.querySelector('#employeeTable tbody');

employees.forEach(emp => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>${emp.dept}</td>
    <td>${emp.position}</td>
    <td class="${emp.status === 'Active' ? 'status-active' : 'status-inactive'}">${emp.status}</td>
  `;
  tableBody.appendChild(row);
});
