class Student {
    constructor(studentName, standard, section){
        this.studentName = studentName;
        this.standard = standard;
        this.section = section;
    }
    printMyName() {
        console.log(`${this.studentName} is studying in class ${this.standard}(section ${this.section})`);
        console.log(this.studentName + " is studying in class " + this.standard + "(section " + this.section + ")" );
        console.log("%s is studying in class %s(section %s)",this.studentName, this.standard, this.section)
    }
}

const student1 = new Student("Ahmad Raza", "BBIT", "E");
const student2 = new Student("Ali Mahmood", "BBA", "F");

// student1.printMyName()
// console.log("\n <<<<=====>>>>>")
// student2.printMyName()


class Car {
    constructor(brandName){
        this.brandName = brandName;
    }
    myCarBrand(){
        return this.brandName
    }
}

class FourWheelsDriveCar extends Car {

    printMyCarType(){
        console.log(this.brandName, " is a four wheels car")
    }
}

class RearWheelDriveCar extends Car {
        constructor(name){
            super(name)
        }
    printMyCarType(){
        console.log(this.brandName, " is a rear wheels car")
        console.log(super.myCarBrand())
    }
}

const toyotaFourWheelerTruck = new FourWheelsDriveCar("Toyota Revo");

const toyotaMarkX = new RearWheelDriveCar("KKKK");


toyotaFourWheelerTruck.printMyCarType();

toyotaMarkX.printMyCarType();

const fourWheelerBrandName = toyotaFourWheelerTruck.myCarBrand();
console.log("the brand name of 4 wheeler is: ", fourWheelerBrandName)