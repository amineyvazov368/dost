function Human(name,surname,age,isMale) {
   this.name=name;
   this.surname=surname;
   this.age=age;
   this.isMale=isMale;
    this.getFullName=function(){
    let surnameuppercase= this.surname.toUpperCase();
    let namefristchar=this.surname[0].toUpperCase();
    let fullname=namefristchar+"."+surnameuppercase;
    return fullname
    }
}let amin=new Human("Amin" ,"Eyvazov",20)
console.log(amin.getFullName())
function Employer(department,experienceYear,salary=0){
    this.department=department;
    this.experienceYear=experienceYear;
    this.salary=salary;
    this.generateID=function(){
        this.id=`${this.department.slice(0,2)}${(Math.round()*10000).toFixed()}`
        return this.id
    }
}
let Amin=new Human("Amin","Eyvazov",25)
Object.setPrototypeOf(Amin,new Employer("It",6,1000))
let Ramin=new Human("Ramin","Eyvazov",30)
Object.setPrototypeOf(Ramin,new Employer("It",8,1000))
let Elgun=new Human("Elgun","Rehimov",30)
Object.setPrototypeOf(Elgun,new Employer("web programming",7,1000))
let Eldar=new Human("Eldar","Sahmuradov",22)
Object.setPrototypeOf(Eldar,new Employer("Programming",8,1000))

console.log(Amin.getFullName());
console.log(Ramin);
console.log(Elgun);
console.log(Eldar);

let employees=[Amin,Ramin,Elgun,Eldar]

function searchEmployers(employees) {
    let filteredEmployees= employees.filter((employee)=>{
        if(
            employees.age>=20 && employees.age <=35 &&
        employees.experienceYear>=5 && (employees.department === "It" || employee.department ==="web programming")

        ){
            return{
                fullname:employee.getFullName(),
                salary: employee.salary,
                department:employee.department,
                id: employee.generateID(),
            }
        }
    })
   return filteredEmployees;
}
console.log(searchEmployers(employees));