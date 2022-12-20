"use strict"
// ES6 Class

class Animals{
    constructor (name,eating,work){
          this.name = name;
          this.eating = eating;
          this.work = work;
    }
}

const Panther = new Animals("Panther","Meat","Hunting")
console.log(Panther)

const blackPanther = new Animals("Black Panther","Meat","Hunting")
console.log(blackPanther)

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






