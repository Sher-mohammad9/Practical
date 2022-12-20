"use strict"


// Inheritance with ES6 Class
class Animal{
    constructor (name,eating,work){
          this.name = name;
          this.eating = eating;
          this.work = work;
    }
} 

class Lion extends Animal{
	constructor(name,eating,work,legs){
		super(name,eating,work);
		this.legs = legs	

	}

	display(){
		console.log(`${this.name} is king of Forest and eating ${this.eating} work ${this.work} and lion are ${this.legs} legs`)
	}
}

// const Ani = new Animal("Lion","Meat","Hunting,");
const anim = new  Lion("Lion","Meat","Hunting,",4)
anim.display();



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

Cow.prototype = Animal2.prototype;

const ania = new Animal2("cow","white")	
console.log(ania)
const coww = new Cow("cow1","white1",4)
coww.display();
console.log(coww)


