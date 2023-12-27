document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('fetchButton');
    const userDataContainer = document.getElementById('userDataContainer');
  
    fetchButton.addEventListener('click', fetchUsers);
  
    function fetchUsers() {
      // Using the Reqres API to fetch user data
      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => displayUsers(data.data))
        .catch(error => console.error('Error fetching users:', error));
    }
  
    function displayUsers(users) {
      // Clear previous user data
      userDataContainer.innerHTML = '';
  
      // Display user data in a visually appealing manner
      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('userCard');
  
        const userAvatar = document.createElement('img');
        userAvatar.classList.add('userAvatar');
        userAvatar.src = user.avatar;
  
        const userName = document.createElement('p');
        userName.innerText = `Name: ${user.first_name} ${user.last_name}`;
  
        const userEmail = document.createElement('p');
        userEmail.innerText = `Email: ${user.email}`;
  
        userCard.appendChild(userAvatar);
        userCard.appendChild(userName);
        userCard.appendChild(userEmail);
  
        userDataContainer.appendChild(userCard);
      });
    }
  });
  