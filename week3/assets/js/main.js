import {
    getAllSupplier,
    postSupplier
  } from "./API/requests/books-requests.js";
  import API_URL from "./API/requests/base-url.js";
  
  let tbody=document.querySelector(".tbody")

  getAllSupplier(API_URL).then((res) => {
    console.log(res)
    res.suppliers.forEach(supplier => {
        tbody.innerHTML +=`<tr>
        <th scope="row">${supplier.id}</th>
        <td>${supplier.companyName}</td>
        <td>${supplier.contactName}</td>
        <td>${supplier.contactTitle}</td>
        <td><button class="btn btn-primary">Detail</button></td>
        <td><button class="btn btn-primary">Update</button></td>
        <td><button class="btn btn-primary del">Delete</button></td>
      </tr>`
    })
  })

 let Delete= document.querySelectorAll(".del")

let companyName=document.querySelector("#exampleInputCompanyName")
let contactName=document.querySelector("#exampleInputContactName")
let contactTitle=document.querySelector("#exampleInputContactTitle")

let addThing=document.querySelector(".submit")
addThing.addEventListener('click',(e)=>{
    e.preventDefault()
    let dataObj={
        companyName:companyName.value,
        contactName:contactName.value,
        contactTitle:contactTitle.value
    }
    postSupplier(API_URL,dataObj)
})

 