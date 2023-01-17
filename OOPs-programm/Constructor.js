"use strict"

// Constructor 

const map = function(parking,flor,furniture,flat){
	this.parking = parking;
	this.flor = flor;
	this.furniture = furniture;
	this.flat = flat;
	// console.log(this)
}
const house1 = new map("car-bike",2,"Chair-Table","3BHK")
console.log(house1)

const house2 = new map("Space",3,"Sofa","2BHK")
console.log(house2)

const person = function(house,school,market,game){
    this.house = house;
    this.school = school;
    this.market = market;
    this.game = game;
    // console.log(this)
}

const person1 = new person("Son","Student","Customer","Player");
console.log(person1)

const person2 = new person("Father","Teacher","Customer","Player");
console.log(person2)

// Inheritance with Constructor

const Animal2 = function (name,color){
	   this.name = name;
	   this.color = color;
}
Animal2.prototype.display = function(){
    console.log(`${this.color} color ${this.name} and are ${this.legs} legs`)	
}

const Cow = function(name1,color1,legs){
	this.legs = legs;
	Animal2.call(this,name1,color1)
}

Cow.prototype = Object.create(Animal2.prototype);

const ania = new Animal2("cow","white")	
console.log(ania)
const coww = new Cow("cow1","white1",4)
coww.display();
console.log(coww)