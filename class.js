// javascript classes
// a class is a blueprint for creating objects with specific properties and methods

// defining a class

class Car {
    // constructor method to initialize properties
    constructor(brand, model, year) {   
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // method to display car info
    displayInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}
// creating an object from the class
let myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.displayInfo()); // Output: 2020 Toyota Corolla

// creating another object from the class
let anotherCar = new Car("Honda", "Civic", 2019);
console.log(anotherCar.displayInfo()); // Output: 2019 Honda Civic

      
// class inheritance
// creating a subclass that inherits from the Car class
// super refers to the parent class we get properties and methods from parent class
class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year); // calling the parent class constructor
        this.batteryCapacity = batteryCapacity; // new property for ElectricCar
    }
    // method to display electric car info
    displayElectricInfo() {
        return `${this.displayInfo()} with a battery capacity of ${this.batteryCapacity} kWh`;
    }
}
let myElectricCar = new ElectricCar("Tesla", "Model 3", 2021, 75);
console.log(myElectricCar.displayElectricInfo()); // Output: 2021 Tesla Model 3 with a battery capacity of 75 kWh

// static methods
// static methods are called on the class itself, not on instances of the class
// you use the static keyword to define a static method
// you cannot call a static method on an object created from the class
class MathUtilities { 
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
console.log(MathUtilities.add(5, 3)); // Output: 8
console.log(MathUtilities.subtract(10, 4)); // Output: 6

class Vehicle{
    constructor(fname){
        this.fname=fname;
    }
    static hello(){
        return "hello car";
    }
}
let myVehicle=new Vehicle("BMW");
// you can call the static method like this
console.log(Vehicle.hello()); // Output: hello car
// but not like this
// console.log(myVehicle.hello()); // This would cause an error