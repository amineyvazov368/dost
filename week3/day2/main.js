async function logMovies() {
    const response = await fetch("https://fakestoreapi.com/products");
    const movies = await response.json();
   myproduct(movies)
  }
  logMovies()
  let row=document.querySelector(".row")

  function myproduct(productArr) {
    for (let i = 0; i < productArr.length; i++) {
         row.innerHTML+=`
         <div class="col-3">
         <div class="card" style="width: 19rem;">
             <img class="card-img-top" src="${productArr[i].image}" alt="Card image cap">
             <div class="card-body">
               <h5 class="card-title">${productArr[i].title}</h5>
               <h6 class="card-text">${productArr[i].price}</h6>
               <h6>${productArr[i].category} </h6>
               <h6>${productArr[i].rating.rate}<i class="fa-solid fa-star" style="color: #FFD43B;"></i></h6>
               <a href="detail.html?id=${productArr[i].id}" class="btn btn-primary info">info</a>                
             </div>
         </div>
     </div>
         `
    }

  }
