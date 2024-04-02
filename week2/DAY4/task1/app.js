// let a=("5.5.5.5.5");
// console.log(a.replaceAll(".","[.]"))F
function sum(num1, num2, display) {
    let sum = num1 + num2
    display(sum);

}
sum(5, 6, (sum) => {
    sum();
})