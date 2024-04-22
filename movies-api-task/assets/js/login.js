import { endpoints } from "./API/constants.js";
import { getAll, getOne, post } from "./API/requests/index.js";

let loginForm = document.getElementById("add-form")
let usernameInp = document.getElementById("username")
let passwordInp = document.getElementById("password")
console.log(passwordInp.value);

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    try {
        await getAll(endpoints.users).then((response)=>{
            console.log(response.data);
            const user = response.data.find(user => user.username == usernameInp.value && user.password == passwordInp.value);
            console.log(user);
            if (user) {
                Swal.fire({
                    icon: "success",
                    title: "Are u stupid?",
                    text: "user not found",
                    footer: '<a href="#">Why do i have this issue?</a>'
                });
                window.location.replace("index.html")
                return;
            }
            else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "you could it congratulations",
                    showConfirmButton: false,
                    time: 1500
                });
            }
        })
    } 
    catch (err) {
        console.log(err);
    }


});
