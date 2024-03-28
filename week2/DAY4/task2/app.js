// let eded= Number(prompt("ededi daxil et"))
// for (let i=eded; i>0; i--){
// console.log(i)
// //
// let ad=["Bakı","Gəncə","Sumqayıt"]
// let text ="";
// for(let x in  ad){
//     text +=x +  "<br>";
//     console.log(x)
// }
// let num=[1,4,5,6,7,8,34,56,98]
// let sum=0;
// for(let i=0; i<num.length;i++){
//      sum+=num[i];
// }
// console.log(sum)

// let eded =Number(prompt("ededi daxil et"))

// for(let i=1 ; i<eded; i+=3){

//    if(i%8==0){
//     console.log(i)
//    }
// }
// let sum=0;
// for (let i=1; i<100; i++){
//     sum+=i
    
// }
// console.log(sum)

// let eded =Number(prompt("ededi daxil"))
// let count = 1
// for(let i=1; i<=eded; i++){
//   count*=i
    
// }
// console.log(count)


// for (let i=1; i<100; i++){

//     if (i%3==0 && i%5==0){
//         console.log("fizzbuz")
//     }
//     else if(i%3==0){
//         console.log("fizz")

//     }
//     else if(i%5==0) {
//         console.log("buz")

//     }
    
//     console.log(i)
// }
let num=(prompt("ededi daxil et"))
let sum=0
for (let i=0; i<num.length; i++){
    sum+=num**3

}
if(num==sum){
    console.log("yes")
}else {
console.log("no")
}