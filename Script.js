const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () =>{

    document.body.classList.toggle("dark");
  
    if(password.type === "password"){

        password.type = "text";

        btn.textContent = "Hide🙈";
    }

    else {

        password.type = "password";

        btn.textContent = "Show";
    }
});