"use strict"

class email{
	constructor(uname,password,balance){
           this._uname = uname;
           this._password = password;
           this._balance = balance;
}
    get uName(){
	let name = prompt("Enter your username")
	if(this._uname == name){
		let pass = Number(prompt("Enter your password"))
		if(pass == this._password){
	      return this._balance;
	  }else{
	  	  alert("Sorry, enter currect password")
	  }    
	}else{
		  alert("Sorry, enter currect username")
	}
}
}
const me = new email("sher_Mohammad",12345678,10000)
console.log(me.uName)
