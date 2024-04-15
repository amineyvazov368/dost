let kards=document.querySelector(".kards")
let card=document.querySelector(".card")
let img=document.querySelector(".card-img-top")
let cardTitle=document.querySelector("card-title")
let cardText=document.querySelector("card-text")
let button=document.querySelectorAll("btn btn-primary")






class products{
    static id=1
    constructor(imgSrc,title,price,){
        this.imgSrc=imgSrc
        this.price=price
        this.id= products.id ++;
        this.title=title
    }
}
let product1=new products("https://i5.walmartimages.com/seo/Skittles-Original-Fruity-Candy-41-Ounce-Party-Size-Bag_538b1fe3-657b-4160-9e4f-8fa65608d978_1.be04513bfc2c52d66455b77b418730fe.jpeg","skittles","5$",)
let product2=new products("https://i5.walmartimages.com/seo/Skittles-Original-Fruity-Candy-41-Ounce-Party-Size-Bag_538b1fe3-657b-4160-9e4f-8fa65608d978_1.be04513bfc2c52d66455b77b418730fe.jpeg","snikers","3$",)
let product3=new products("https://i5.walmartimages.com/seo/Skittles-Original-Fruity-Candy-41-Ounce-Party-Size-Bag_538b1fe3-657b-4160-9e4f-8fa65608d978_1.be04513bfc2c52d66455b77b418730fe.jpeg","tvixt","2$",)

let productArr=[product1,product2,product3]

function myproduct(arr) {
    let innerText=" "
    for(let i=0; i < arr.length;i++){
        innerText+=` <div class="card">
        <img class="card-img-top"
            src="${arr[i].imgSrc}"
            alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${arr[i].title}</h5>
            <h6 class="card-text">${arr[i].price}</h6>
            <button class="btn btn-primary">basket</button>
            <button class="btn btn-primary">delete</button>
        </div>
    </div>`
    }
    row.innerHTML=innerText
}
myproduct(productArr)