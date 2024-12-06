// Visitor Classes
var CarVisitor = function() {
    this.visit = function(car) {
        if (car.seats > 2) {
            console.log('This is clearly a car for old people');
        } else {
            console.log('My bet is this car has at least 2 cylinders');
        }
    };
};

var TruckVisitor = function() {
    this.visit = function(truck) {
        if (truck.towPackage) {
            console.log('We need to buy a boat');
        }
    };
};

var MonsterTruckVisitor = function() {
    this.visit = function(monsterTruck) {
        if (monsterTruck.looksLikeADragon) {
            console.log('That is a badass monster truck');
        } else {
            console.log('Loser');
        }
    };
};

// Vehicle Classes
var carVariable = function() {
    var seats = 5;
    var doors = 4;
    this.accept = function(visitor) {
        visitor.visit(this);
    };
};

var truckVariable = function() {
    var towPackage = true;
    var doors = 2;
    this.accept = function(visitor) {
        visitor.visit(this);
    };
};

var monsterTruckVariable = function() {
    var looksLikeADragon = true;
    var doors = 1.5;
    this.accept = function(visitor) {
        visitor.visit(this);
    };
};

// Testing the Visitor Pattern
var myCar = new carVariable();
myCar.seats = 2; // We set the number of seats to test our visitor
myCar.accept(new CarVisitor()); // The visitor will visit the car

var myTruck = new truckVariable();
myTruck.towPackage = true; // Setting a tow package
myTruck.accept(new TruckVisitor()); // The visitor will visit the truck

var myMonsterTruck = new monsterTruckVariable();
myMonsterTruck.looksLikeADragon = false; // Setting the dragon look
myMonsterTruck.accept(new MonsterTruckVisitor()); // The visitor will visit the monster truck

// Let's try using a MonsterTruckVisitor on a Car object
var myCar2 = new carVariable();
myCar2.seats = 2;
myCar2.accept(new MonsterTruckVisitor()); // Trying to use MonsterTruckVisitor on a Car object

