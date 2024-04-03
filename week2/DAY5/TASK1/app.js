class Product {
    constructor(id,name,price){
        this.id=id
        this.name = name
        this.price=price
    }
}
class Milk extends Product{
    constructor(id,name,price ,FatPercent,Madeİn){
        super(id,name,price)
        this.FatPercent=FatPercent
        this.Madeİn=Madeİn
}
}
let milk1=new Milk(2,"palsud",3,2,"azerbaycan")
let milk2=new Milk(1,"palsud",2,1,"turkey")
let milk3=new Milk(3,"palsud",4,4,"cina")
console.log(milk1);
console.log(milk2);
console.log(milk3);
// task2
let Milks=[milk1,milk2, milk3]
function filterRate(Milks) {
    
return Milks.find((Milks)=>(Milks.id==1))
}
console.log(filterRate(Milks));

// task4
function filterRate(Milks) {
    
return Milks.filter((Milk)=>(Milk.FatPercent>=3))
}
console.log(filterRate(Milks));

// task5

let newarr=Milks.map(milk=>milk.price+10)
console.log(newarr)

// task3
function ProductArrMath(arr) {
    let sum =0
    let total=arr.reduce((acumulyator,current)=>acumulyator+current.price,sum)
    return total/arr.length

    
}
console.log(ProductArrMath(Milks));
// task6

function ProductArrMaths(arr) {
    let sum=0
    let total=arr.reduce((acumulyator,current)=>acumulyator+current.price,sum)
    return total
 
}
console.log(ProductArrMaths(Milks));
