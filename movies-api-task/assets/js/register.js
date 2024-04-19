import { endpoints } from "./API/constants.js";
import { getAll, getOne, post } from "./API/requests/index.js";

const registerForm = document.getElementById("register-form");
const userNameInp = document.getElementById("user-name");
const userEmailInp = document.getElementById("user-email");
const userPasswordInp = document.getElementById("user-password");
const userConfirmPassInp = document.getElementById("user-confirm-password");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(userEmailInp.value)

    getAll(endpoints.users).then(res => {
        const existEmail = res.data.find(x => x.email == userEmailInp.value.trim())
        if (existEmail) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "bu email isdifade olunub basqasini qeyd edin",
            });
            return
        }
        if (userPasswordInp.value.trim() != userConfirmPassInp.value.trim()) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "password ve  confirm password beraber olmalidi",
            });
            return
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            post(endpoints.users,
                {
                    " email": userEmailInp.value.trim(),
                    "user-name": userNameInp.value.trim(),
                    "password": userPasswordInp.value.trim(),
                    "confirmpassword": userConfirmPassInp.value.trim(),
                    "wishlistItems": [
                    ]
                }
            )
            userEmailInp.value = ''
            userNameInp.value = ''
            userPasswordInp.value = ''
            userConfirmPassInp.value = ''
        })
    })

})
