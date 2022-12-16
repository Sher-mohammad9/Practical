"use strict"

class Animal{
    constructor (name,eating,work){
          this.name = name;
          this.eating = eating;
          this.work = work;
          // console.log(this)
    }
} 

const lion = new Animal("Lion","Meat","Hunting");
console.log(lion);

const tiger = new Animal("Tiger","Meat","Hunting")
console.log(tiger)
