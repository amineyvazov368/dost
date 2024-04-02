function Human(name,surname,age,isMale) {
   this.name=name;
   this.surname=surname;
   this.age=age;
   this.isMale=isMale;
    this.getFullName=function(){
    let surnameuppercase= this.surname.toUpperCase();
    let namefristchar=this.charCodeat(0).totoUpperCase();
    let fullname=namefristchar.join()
    return fullname
    }
}let amin=new Human("Amin""Eyvazov",20)
console.log(amin.getFullName())
function Employer(department,experienceYear,salary=0){
    this.department=department;
    this
}