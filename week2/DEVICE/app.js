class device{
    constructor(brand,model,screensize,batterylevel,price,salarprice,discountpercentage,salecount ){
        this.brand=brand;
        this.model=model;
        this.screensize=screensize;
        this.batterylevel=batterylevel;
        this.price=price
        this.discountpercentage=discountpercentage
        this.salecount=salecount
        this.salarprice=salarprice
        if(this.salarprice>this.price){
            if(this.discountpercentage>0){
              this.salarprice=this.salarprice-((this.salarprice*this.discountpercentage)/100)
            }
        }
     
    }
    calculateprofit(){
        let profit=0
        console.log(this.salarprice)
       if(this.discountpercentage>0){
        let discount=this.salarprice-((this.salarprice*this.discountpercentage)/100)
            profit=(discount*this.salecount)-(this.price*this.salecount)
            return profit
       }
       else{
        profit=(this.salarprice*this.salecount)-(this.price*this.salecount)
        return profit
       }
    }
    DisplayBatteryLevel(){
       return `${this.batterylevel} qeder batery var`
    }
    DisplayDetails(){
        return `${this.screensize} ${this.model} ${this.brand}`

    }
}
class Phone extends device {
    constructor(brand,model,screensize,batterylevel,price,salarprice,discountpercentage,salecount,calculateprofit,displaybaterylevel,displaydetails,isSmart=false ){
        super(brand,model,screensize,batterylevel,price,salarprice,discountpercentage,salecount,calculateprofit,displaybaterylevel,displaydetails)
        this.isSmart=isSmart
    }
}
class laptop extends device{
    constructor(brand,model,screensize,batterylevel,price,salarprice,discountpercentage,salecount,calculateprofit,displaybaterylevel,displaydetails ,isRGBkeyboard ){
        super(brand,model,screensize,batterylevel,price,salarprice,discountpercentage,salecount,calculateprofit,displaybaterylevel,displaydetails )
        this.isRGBkeyboard=isRGBkeyboard
    }
}

let Phone1=new Phone("telefon","xiomi","360px",60,100,160,10,5)
// console.log(Phone1.DisplayBatteryLevel())
// console.log(Phone1.DisplayDetails())
let Phone2=new Phone("telefon","samsung","300px,",67,150,180,20,4,)
let laptop1=new laptop("telefon","iphone","500px,",50,200,190,10,3)
let laptop2=new laptop("telefon","iphone","500px,",70,200,200,10,4)
console.log(laptop2.calculateprofit())
let phones=[Phone1,Phone2,laptop1,laptop2]


function FilterbyPrice (arr, price) {
   let filtered=phones.filter((phones)=>(phones.price<price))  
   return filtered
}
// console.log(FilterbyPrice(phones,150))


function FilterbyName  (arr, phone) {
    let count = 0
  arr.map((el)=>{
    console.log(el);
    if (el.model === phone ) {
        count++
    }
  })
  return count;
 }
 console.log(FilterbyName(phones,"iphone"))


// function GetTotalProfit   (arr) {
//     let sum = 0
//   arr.map((el)=>{
// console.log(el.calculateprofit());
//   })
//   return count;
//  }
//  console.log(GetTotalProfit (phones))