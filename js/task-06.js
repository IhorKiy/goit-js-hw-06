const input = document.querySelector('#validation-input');
input.addEventListener("blur", checkQuantity);
const lengthData=Number( input.getAttribute('data-length'))
console.log(lengthData);

function checkQuantity(event) {


        if (event.target.value.length === 0) {
            input.classList.remove("invalid", "valid")
    } else if (event.target.value.length === lengthData) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else  {
        input.classList.remove("valid");
         input.classList.add("invalid");
    }
    console.log(event.target);
    };

console.log(checkQuantity());
  