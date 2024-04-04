class Human{
    constructor(name,surname,age,gender,nationality,getFullName,getBitrhYear){
        this.name=name
        this.surname=surname
        this.age=age
        this.gender=gender
        this.nationality=nationality
        this.getFullName=name.concat(surname)
        this.getBitrhYear=getBitrhYear
    }
}
class user extends Human{
    constructor(name,surname,age,gender,nationality,getFullName,getBitrhYear,username,email,isAdmin,isLogged,password,bio,changePassword,newPassword,changeEmail){
        super(name,surname,age,gender,nationality,getFullName,getBitrhYear)
        this.username=username
        this.email=email
        this.isAdmin=isAdmin
        this.isLogged=isLogged
        this.password=password
       
        this.bio=bio
        this.changePassword=changePassword
        this.changeEmail=changeEmail

    }
}
let user1=new user("amin","eyvazov",19,"azerbaycan","amineyvazov",2004,"amin123","amin368368","true","true","123456","salam123necesen","9876543","amin123A")
console.log(user1);
let user2=new user("ruslan","tagiyev",22,"turkey","ruslantagiyev",2000,"ruslan123","ruslan368368","true","false","1235976","salam12356tjtinecesen","98wtij76543","ruslan123A")
console.log(user2);
let user3=new user("nicat","nezerov",30,"azerbaycan","nicatnezerov",2002,"nicat123","nicat368368","false","true","455297","salam123neetkjtcesen","98765165543","nicat123A")
console.log(user3);
let user4=new user("ramin","haciyev",20,"rusia","raminhaciyev",2007,"ramin123","ramin368368","false","true","1239875","salam511y23necyeyesen","55446543","ramin123A")
console.log(user4);

let users=[user1,user2,user3,user4]
// task1
users.sort()
   

console.log(users)

let year=1990
function filterByBirthYear(users) {
    
    return users.filter(()=>(users.getBitrhYear>year))
   
}
console.log( filterByBirthYear(users))

const result = users.filter((getBitrhYear) => getBitrhYear =>year);
console.log(result);