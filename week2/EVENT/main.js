let companyName=document.querySelector(".company-name")
let contactName=document.querySelector(".contact-name")
let contactTitle=document.querySelector(".contact-title")
let companyId=document.querySelector(".company-id")
let formInputs=document.querySelectorAll(".form-input")
let add=document.querySelector(".add")
let myTable=document.querySelector(".mytable")
let clear=document.querySelectorAll(".btn-clear")



class newProduct{
    static companyId=3
    isCompleted;
    constructor(companyName,contactName,contactTitle){
        this.companyId=newProduct.companyId++
        this.companyName=companyName,
        this.contactName=contactName,
        this.contactTitle=contactTitle
    }
}
add.addEventListener("click",function(e){
    e.preventDefault()
    let newproduct
    formInputs.forEach(formInput=>{
        if(formInput.value==""){
            formInput.nextElementSibling.classList.add("active")
        }else{
            formInput.nextElementSibling.classList.remove("active")
            newproduct=new newProduct(companyName.value,contactName.value,contactTitle.value)
        }
    })
    showProduct(newproduct);
})
function showProduct(product){

    myTable.innerHTML+=`
    <tr>
    <td> ${product.companyId}</td>
    <td> ${product.contactName}</td>
    <td> ${product.contactTitle}</td>
    <td>${product.companyName}</td>
    <td><button>delete</button></td>
</tr>   `

companyName.value="",
contactName.value="",
contactTitle.value="",
clear.forEach(clear=>{
    clear.addEventListener("click",function(){
        clear.closest(".mytable").remove()
    })
})
}