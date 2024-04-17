
let id= new URLSearchParams(location.search).get("id")


function getProduct(){
    fetch("https://fakestoreapi.com/products/"+id)
    .then(res=>res.json())
    .then(data=>myproduct(data))
}
getProduct()

let row=document.querySelector(".row-card")

function myproduct(productArr) {
  
         row.innerHTML+=`
         <div class="col-6">
                <div>
                    <img style="height: 70vh;width: 100%; object-fit: cover;" class="card-img-top" src="${productArr.image}" alt="Card image cap">
                </div>

            </div>
            <div class="col-6">
                <div class="card-body " >
                    <h4 class="card-title" style="font-size: 50px;">${productArr.title}</h4>
                    <h6 class="card-text" style="font-size: 50px;">${productArr.price}</h6>
                    <h6 style="font-size: 50px;">category: <span>men's clothing</span></h6>
                    <h6 style="font-size: 50px;">rating: <span>3.9</span></h6>                 
                  </div>
            </div>
         `
    
}