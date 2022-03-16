class Student{
    constructor(fullName,direction){
        this.fullName = fullName,
        this.direction = direction
    }
    static personBuilder(){
        return new Student("Ihor Kohut","qc")
    }
    getFullname(){
        return this.fullName
    }
    nameIncludes(data){
       return  this.fullName.includes(data)&& data.trim()!=false ?  true :  false
    }
    getdirection(){
        return this.direction
    }
    setdirection(newDirection){
        this.direction = newDirection
    }
}
const stud1 = new Student('Ivan Petrenko', 'web'); 
const stud2 = new Student('Sergiy Koval','python');
const stud3 =  Student.personBuilder();
console.log(stud1.nameIncludes('Ivan'));   
console.log(stud1.nameIncludes('Denysenko')); 


