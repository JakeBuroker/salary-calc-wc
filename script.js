
let totalMonthly = 0 
function handleSubmit(event) {
        event.preventDefault();
        let tableBody = document.getElementById("tableBody");
        
  
        let firstName = document.getElementById("firstNameInput").value;
        let lastName = document.getElementById("lastNameInput").value;
        let employeeId = document.getElementById("idInput").value;
        let jobTitle = document.getElementById("titleInput").value;
        let annualSalary = document.getElementById("annualSalaryInput").value;
        tableBody.innerHTML += 
   
`
       <tr>
        <th>${firstName}</th>
        <th>${lastName}</th>
        <th>${employeeId}</th>
        <th>${jobTitle}</th>
        <th>${annualSalary}</th>
        <th><button onclick="deleteEmployee(event)">:x:</button></th>
        </tr>
        </tr>
       
        `
    
   document.getElementById('firstNameInput').value = '';
    document.getElementById('lastNameInput').value = '';
    document.getElementById('idInput').value = '';
    document.getElementById('titleInput').value = '';
    document.getElementById('annualSalaryInput').value = '';
    
        let salaryNum = Number(annualSalary)
         totalMonthly += salaryNum
console.log(totalMonthly)
}
function deleteEmployee(event) {
    event.preventDefault();
   event.target.parentElement.parentElement.remove();
  }

