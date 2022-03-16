class Worker{
    #experience =1.2 
    constructor(fullName,dayRate,workingDays,arr){
        this.fullName = fullName
        this.dayRate = dayRate
        this.workingDays = workingDays
        this.arr = arr
        arr.push(this)
        
    }
    getSalaryWithoutExp(){
        return this.dayRate*this.workingDays
    } 
    getSalary(){
        return this.#experience*this.dayRate*this.workingDays
    }
    showRichestWorker(){
        this.arr.sort((a,b) =>a.getSalary()>b.getSalary()?1:-1)
        console.log("Sorted by salary")
        this.arr.forEach((el)=> console.log(el.fullName+':' + el.getSalary()))
    }
    showRichestWorkerWithoutExp(){
        this.arr.sort((a,b) =>a.getSalaryWithoutExp()>b.getSalaryWithoutExp()?1:-1)
        console.log("Sorted by salary")
        this.arr.forEach((el)=> console.log(el.fullName+':' + el.getSalaryWithoutExp()))
    }
    showSalary(){
        return `${this.fullName} salary : ${this.getSalary()} `
    }
    showSalaryWithExperience(){
        return `${this.fullName} salary:${this.getSalary()}`
    }
    get showExp(){
        return this.#experience
    }
    set setExp (experience){
        this.#experience = experience
    }
}
let array=[]
const worker1 = new Worker("John Johnson", 20, 23,array);
const worker2 = new Worker("Tom Tomson", 48, 22,array);
const worker3 = new Worker("Andy Ander", 29, 23,array);
console.log(worker1.fullName);                 
console.log(worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
worker1.setExp=1.5;
worker2.setExp=1.5;
worker3.setExp=1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
worker1.showRichestWorkerWithoutExp();
worker1.showRichestWorker();




