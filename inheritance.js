/*
Scenario
You’ve been hired to help a logistics company build a system to manage its fleet of
vehicles. The system should be able to:


1. Create individual vehicles with properties like type, make, model, year, and
mileage.
2. Add a method to update the mileage of a vehicle when it is used.
3. Add a method to display the details of the vehicle in a user-friendly format.
4. Instantiate multiple vehicles from the class and test your methods.


Tasks
1. Define the Vehicle Class:
○ The constructor should include properties: type, make, model, year,
and mileage.
○ Use default values for mileage (e.g., 0).

2. Add Methods:
○ drive(distance): Increases the vehicle’s mileage by the given
distance (in kilometers or miles).
○ getDetails(): Returns a formatted string describing the vehicle’s
details.

3. Create and Use Vehicle Objects:
○ Instantiate at least three vehicle objects with different properties (e.g.,
a car, a truck, and a motorcycle).
○ Use the drive method to simulate trips and update mileage.
○ Use the getDetails method to print each vehicle’s updated
information.
*/


//Task 1 -- Define the Vehicle class:
class Vehicle{
    constructor(type,make,model,year,milage = 0){
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
    }
}

//Task 2 
function distance(vehicle,miles){
    console.log(`You have just driven ${miles} miles.`)
        vehicle.milage = vehicle.milage + miles;
    return vehicle.milage;
}

function getDetails(vehicle){
    console.log("Here are the details of this vehicle:");
    return vehicle;
}

function drive(vehicle,miles){
    console.log(`Initial Milage: ${vehicle.milage}`);
        console.log(distance(vehicle,miles));

    return `New milage after the trip: ${vehicle.milage} miles.`
}


let car = new Vehicle('Car','Nissan','Murano',2015,108150);
let motorcycle = new Vehicle('Motorcycle','Honda','Rebel 500', 1998);
let truck = new Vehicle('Truck','Ford','F-150',2026, 160325)

console.log(distance(car, 180));
console.log(getDetails(motorcycle));
console.log(drive(truck, 680));