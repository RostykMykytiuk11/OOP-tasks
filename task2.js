class Person{
    constructor(name,surname){
        this.name = name
        this.surname = surname
    }
    getFullname(){
        return `${this.name} ${this.surname}`
    }

}
class Student extends Person{
    constructor(name,surname,year){
        super(name,surname)
        this.year = year
    }
    showFullName(middleName){
        return `${this.name} ${middleName} ${this.surname} `
    }
    showCourse(){
        let date = new Date()
        return date.getFullYear() - this.year
    }
}
const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse()); 
