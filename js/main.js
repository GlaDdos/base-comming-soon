const form = document.getElementsByTagName('form')[0];
const email = document.getElementsByTagName('input')[0];
const emailError = document.querySelector(".error")
const divForm = document.querySelector(".form");

form.addEventListener('submit', function (e) {

    if(!email.validity.valid) {
        emailError.setAttribute('style', 'visibility: visible');
        divForm.classList.add("error");
        email.classList.add("error");
        e.preventDefault();
    }
});

email.addEventListener('input', function (e) {
   if(email.validity.valid) {
       emailError.setAttribute('style', 'visibility: hidden');
       divForm.classList.remove("error");
       email.classList.remove("error");
   }
});

