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
//     console.log(i)
//     console.l
///
// let num= [1,2,4,3]
// let cut=0
// let tek=0
// for(let i=0;i<num.length;i++){
//  if(i%2==0){
//     cut+=num[i]
//  }
//  else{
//     tek+=num[i]
//  }
// }
// console.log(tek*cut)



function evenOrodd(params) {

    let num = [1, 2, 5]
    let hasil = 1
    let cem = 0
    for (let i = 0; i < num.length; i++) {
        hasil *= num[i]
    }
    if (hasil % 2 === 0) {
        for (let index = 0; index < num.length; index++) {
            cem += num[index]

        }
        console.log(`Cutdur ${cem}`);
    }
    else {
        console.log(0);
    }
}
// evenOrodd()
function evenOrodd(params){
    let num = [5, 1, 3, 7]
    let a = 0
    for (let i = 0; i < num.length; i++) {
        a = num[i]
    }
    if (a % 2 == 0) {
        console.log(true);
    }

    else {
        console.log(false);
    }
}
// evenOrodd()

// let num=[1,3,5,2,8]
// let sum=0
// let or =0

// for(let i=0; i<num.length; i++){
//     sum+=num[i]
//     or=sum/num.length
//     ;
// }
// console.log(parseInt(or));

// function nember (a,b){
//     return 5+4;
// }
// console.log(nember()); 


// const square = function (a ,b) {
//     return a+b
//   };
  
//   console.log(square(4,5)); 
function myFunction(params) {
    let text1="salam necesen yaxsi sen"
    let text1Arr=text1.split(" ")
    console.log(text1Arr)
    let text1Index=text1Arr.indexOf('necesen');
    console.log(text1Index);
}

// myFunction();

function name(params) {
    let soz="yaAllah"
    let sozs=soz.toLowerCase();
    console.log(sozs);
}
// name();
function words(params) {
    let word1="lay"
    let word2="lay"
    if (word1.split()===word2.split()) {
        alert("dogrudur")
        
    }else{
        alert("yalnisdir")
    }
//  words();   
}
// words();

    // sentence="a salam necesen"
    //  sentenceArr=sentence.split(" ")
    // let a=""
    //  b=" "
    // for ( i = 0; i< sentenceArr.length; i++) {
    //     a+=sentenceArr[i].replace(sentenceArr[i][0], sentenceArr[i][0].toUpperCase())+b
    // }
    // console.log(a);

let a=("5.5.5.5.5")
