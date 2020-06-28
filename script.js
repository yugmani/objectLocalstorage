var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userFirstNameSpan = document.querySelector("#user-first-name");
var userLastNameSpan = document.querySelector("#user-last-name");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");
var localId = document.querySelector("#local");
var clearBtn = document.querySelector("#clear");
var clearId = document.querySelector("#clear-storage");

restoreLocalStorage();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}


function restoreLocalStorage() {
  
  // get most recent submission
  var lastUser = JSON.parse(localStorage.getItem("user"));
  console.log(lastUser);
  if(lastUser) {
      userFirstNameSpan.textContent = lastUser.firstName;
      userLastNameSpan.textContent = lastUser.lastName;
      userEmailSpan.textContent = lastUser.email;
      userPasswordSpan.textContent = lastUser.password;

      var localMessage = "Restored last record from local storage....";
      localId.innerHTML = `<h3>${localMessage}</h3>`;
      // localId.style.display = "block";
      // clearId.style.display = "block";
    }
  else {
    return;
  }
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };
  
  // validate the fields
  if (user.firstName === "") {
    displayMessage("error", "First name cannot be blank");
  } else if (user.lastName === "") {
    displayMessage("error", "Last name cannot be blank");
  } else if (user.email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (user.password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // set new submission
    localStorage.setItem("user", JSON.stringify(user));
    // console.log(JSON.stringify(user));

    userFirstNameSpan.textContent = user.firstName;
    userLastNameSpan.textContent = user.lastName;
    userEmailSpan.textContent = user.email;
    userPasswordSpan.textContent = user.password;
    
  }
});


clearBtn.addEventListener("click", function(){
  var userResponse = confirm("Do you really want to clear the localStorage?");
  if (userResponse) {
    localStorage.clear();
    alert("Local Storage is successfully deleted.")
    window.location.reload(false); 
  }
  else { return; }
})