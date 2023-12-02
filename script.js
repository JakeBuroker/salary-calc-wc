function handleSubmit(event) {
        event.preventDefault();
        let tableBody = document.getElementById("tableBody");
        
  
        let firstName = document.getElementById("firstNameInput").value;
        let lastName = document.getElementById("lastNameInput").value;
        let employeeId = document.getElementById("idInput").value;
        let jobTitle = document.getElementById("titleInput").value;
        let annualSalary = document.getElementById("annualSalaryInput").value;
        tableBody.innerHTML +=

        `<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeId}</td>
            <td>${jobTitle}</td>
            <td>${annualSalary}</td>
        </tr>`;
    
   document.getElementById('firstNameInput').value = '';
    document.getElementById('lastNameInput').value = '';
    document.getElementById('idInput').value = '';
    document.getElementById('titleInput').value = '';
    document.getElementById('annualSalaryInput').value = '';
}