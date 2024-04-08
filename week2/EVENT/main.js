let companyName=document.querySelector(".company-name")
let contactName=document.querySelector(".contact-name")
let contactTitle=document.querySelector(".contact-title")
let companyId=document.querySelector(".company-id")
let formInputs=document.querySelectorAll(".form-input")
let add=document.querySelector(".add")
let myTable=document.querySelector(".mytable")
add.addEventListener("click",function(e){
    e.preventDefault()
    let newproduct
    formInputs.forEach(formInput=>{
        if(formInput.value==""){
            formInput.nextElementSibling.nextElementSibling.classList.add("active")
        }else{
            formInput.nextElementSibling.nextElementSibling.classList.remove("active")

             newproduct={
                companyName:companyName.value,
                contactName:companyName.value,
                contactTitle:contactTitle.value,
                companyId:companyId.value
            }
        }
    })
    showProduct(newproduct)
})
 function showProduct(product){
        myTable.innerHTML+=`
        <tr>
        <td>${product.companyName} </td>
        <td>${product.contactName} </td>
        <td>${product.contactTitle} </td>
        <td>${product.companyId}</td>
    </tr> 
        `
        
 }