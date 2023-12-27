function storeUserData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
  
    if (name && age) {
      const userData = { name, age };
      localStorage.setItem('userData', JSON.stringify(userData));
      alert('User data stored successfully!');
      document.getElementById('userForm').reset();
    } else {
      alert('Please enter both name and age.');
    }
  }
  
  function retrieveAndDisplayData() {
    const userDataString = localStorage.getItem('userData');
  
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const displayArea = document.getElementById('displayArea');
      
      // Clear previous data
      displayArea.innerHTML = '';
  
      // Create a table to display data
      const table = document.createElement('table');
      table.id = 'displayTable';
  
      // Create table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      const nameHeader = document.createElement('th');
      const ageHeader = document.createElement('th');
      nameHeader.textContent = 'Name';
      ageHeader.textContent = 'Age';
      headerRow.appendChild(nameHeader);
      headerRow.appendChild(ageHeader);
      thead.appendChild(headerRow);
      table.appendChild(thead);
  
      // Create table body
      const tbody = document.createElement('tbody');
      const dataRow = document.createElement('tr');
      const nameCell = document.createElement('td');
      const ageCell = document.createElement('td');
      nameCell.textContent = userData.name;
      ageCell.textContent = userData.age;
      dataRow.appendChild(nameCell);
      dataRow.appendChild(ageCell);
      tbody.appendChild(dataRow);
      table.appendChild(tbody);
  
      displayArea.appendChild(table);
    } else {
      alert('No user data found. Please submit the form first.');
    }
  }
  