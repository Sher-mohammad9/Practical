"use strict"


class openAccount{
	constructor(){
	this.permission = confirm("can you open bank account")
   if(this.permission){
   while(true){	
       this.accountName = prompt("Enter your name")
   if(!this.accountName){
   	  alert("Please enter your name")
   	  continue;
   }
    console.log(`accountName = ${this.accountName}`)
   break;
   }
 
   while(true){
       this.mobileNumber = prompt("Enter your mobile number")
   if(!this.mobileNumber || !this.mobileNumber.startsWith("91") || this.mobileNumber.slice(2).length != 10){
       alert("Sorry only indian number valid")
       continue;
   }
   console.log(`mobileNumber = ${this.mobileNumber}`)
   break;
   }
   
   while(true){
       this.createPassword = prompt("Create account password")
   if(!this.createPassword){
   	   alert("Please enter password")
   	   continue;
   }
   console.log(`createPassword = ${this.createPassword}`)   
   break; 
   }

   while(true){
       this.atmPin = prompt("Set atm pin");
   if(!this.atmPin || this.atmPin.length != 4){
      alert("Please enter atm pin and maxmim 4 digit")
      continue;
   }
   console.log(`atmPin = ${this.atmPin}`)   
   break;
}

   while(true){
       this.balance = Number(prompt("Please enter deposit money"));
   if(!this.balance || this.balance <= 0){
      alert("deposit money is reqiured and > 0")
      continue;
   }
   console.log(`balance = ${this.balance}`)   
   break;
}
}
 this.statement = [];
 this.input;
	}


AccountManagement(){
this.statement.push(this.balance)
let ans = true;
while(ans){

 this.input = prompt(`Congratulation your account is open.
How to use this account?
1. Deposit money
2. Withdraw money
3. Transfer money
4. Change atm pin
5. Print statement
6. Change password
7. Check balance
8. Close account`)

switch(this.input.toLowerCase()){
	case "deposit money":
	while(true){
       let checkpin = prompt("Enter your atm pin")
       if(checkpin && checkpin === this.atmPin){
       let deposit = Number(prompt("Enter deposit money"))
       if(!deposit || deposit <= 0){
       	 alert("Please enter money > 0")
       }else{
           this.balance += deposit;
           this.statement.push(deposit)
           break;
       }
    }else{
    	alert("Wrong pin")
    }
	}
	break;
	case "withdraw money":
	while(true){
		let checkpin = prompt("Enter your atm pin");
		if(checkpin && checkpin === this.atmPin){
		let withdraw = Number(prompt("Enter withdraw money"))
		if(!withdraw || withdraw > this.balance){
			alert(`Sorry your bank balance is ${this.balance}`)
		}else{
			this.balance -= withdraw;
			this.statement.push(-withdraw)
			break;
		}
		}else{
    	    alert("Wrong pin")			
		}
	}
	break;
	case "transfer money":
	while(true){
		let checkpin = prompt("Enter your atm pin");
	    let outherAccount = prompt("Enter any account number")			
		if(checkpin && checkpin === this.atmPin && outherAccount){	
		let Transfer = Number(prompt("Enter Transfer money"))
		if(!Transfer || Transfer > this.balance){
			alert(`Sorry your bank balance is ${this.balance}`)
		}else{
			this.balance -= Transfer;
			this.statement.push(-Transfer)
			break;
		}
		}else{
    	    alert("Wrong pin")		
		}
	}
	break;
	case "change atm pin":
	while(true){
		let checkpin = prompt("Enter your current atm pin");
		if(checkpin && checkpin === this.atmPin){
			this.atmPin = prompt("Enter new atm pin")
			console.log(`new atmPin = ${this.atmPin}`)
			break;
		}else{
			alert("Wrong pin")
		}
	}
	break;
	case "print statement":
	while(true){
		let checkpin = prompt("Enter your current atm pin");
		if(checkpin && checkpin === this.atmPin){
			 console.log(this.statement);
			 break;
		}else{
			alert("Wrong pin")
		}
	}
	break;
	case "change password":
	while(true){
       let checkPassword = prompt("Enter your current password");
       if(checkPassword && checkPassword === this.createPassword){
       	  this.createPassword = prompt("Create new password")
       	     console.log(`new createPassword = ${this.createPassword}`)
       	  break;
       }else{
       	  alert("Wrong pin")
       }
	}
	break;
	case "check balance":
	while(true){
		let checkpin = prompt("Enter your atm pin");
		if(checkpin && checkpin === this.atmPin){
			console.log(this.balance)
			break;
		}else{
			alert("Wrong pin")
		}
	}
	break;
	case "close account":
	  while(true){
	  	let checkPin = prompt("Enter your atm pin")
	  	if(checkPin && checkPin === this.atmPin){
	  		ans = false;
	  		break;
	  	}else{
	  		alert("Wrong pin")
	  	}
	  }
	  break;
	  default:
	   alert("Selecet currect option")
	  break; 
}
}
}
}

// const AccountHolder = new openAccount();
// AccountHolder.AccountManagement()

const AccountHolder111 = new openAccount();
