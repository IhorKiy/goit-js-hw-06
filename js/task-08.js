  const form = document.querySelector(".login-form");
form.addEventListener("submit", lettSubmit);

function lettSubmit(e) {
    
    e.preventDefault();

      const {
     email, password 
  } = e.currentTarget.elements;
    
  // console.log(e.currentTarget.elements.email.value);

    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log({Login: email.value, Password: password.value});
e.currentTarget.reset();
};
     
