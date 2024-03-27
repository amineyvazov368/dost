let a=Number(prompt("a ededi"))
let b=Number(prompt("b ededi"))
let c=Number(prompt("c ededi"))
if(
    a,b,c>0
){
    if (a==b && a==c && b==c){
        alert("beraber terefli")
    }
    else if (a==b || a==c || b==c){
        alert("beraber yanli")
    }
    else {
       alert("mextelif terefli")
    }
}
else{
    alert("eded menfidir")
}