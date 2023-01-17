"use strict"


function openAccount(){
   let permission = confirm("Do you want to open a bank account")
   if(permission){
   let accountName;
   while(true){	
       accountName = prompt("Enter your name")
   if(!accountName){
   	  alert("Name is required")
   	  continue;
   }
   break;
   }
   let mobileNumber;
   while(true){
       mobileNumber = prompt("Enter your mobile number")
   if(!mobileNumber || !mobileNumber.startsWith("91") || mobileNumber.slice(2).length != 10){
       alert("Sorry only indian number valid")
       continue;
   }
   break;
   }
   let createPassword;
   while(true){
       createPassword = prompt("Create account password")
   if(!createPassword && flag){
   	   alert("Password is required")
   	   continue;
   }
   break; 
   }
   let atmPin;
   while(true){
       atmPin = prompt("Set atm pin");
   if(!atmPin || atmPin.length != 4){
      alert("Please set atm pin and maxmim 4 digit")
      continue;
   }
   break;
}
   let balance;
   while(true){
       balance = Number(prompt("Add money to activated your account"));
   if(!balance || balance <= 0){
      alert("Enter  deposit money  greater than 0 ")
      continue;
   }
   break;
}

AccountManagement(balance,atmPin,createPassword,accountName)
}
}

openAccount();


function AccountManagement(balance, atmPin, createPassword, accountName, mobileNumber){
let statement = [];
statement.push(balance)
let ans = true;
while(ans){

 let input = prompt(`Congratulation your account is open.
use this account.
1. Deposit money
2. Withdraw money
3. Transfer money
4. Change atm pin
5. Print statement
6. Change password
7. Check balance
8. Close account`)

switch(input.toLowerCase()){
	case "deposit money":
	while(true){
       let checkpin = prompt("Enter your atm pin")
       if(checkpin && checkpin === atmPin){
       let deposit = Number(prompt("Deposit money into your account"))
       if(!deposit || deposit <= 0){
       	 alert("Enter  deposit money  greater than 0 filterAccount")
       }else{
           balance += deposit;
           statement.push(deposit)
           break;
       }
    }
    	alert("Wrong pin")
	}
	break;
	case "withdraw money":
	while(true){
		let checkpin = prompt("Enter your atm pin");
		if(checkpin && checkpin === atmPin){
		let withdraw = Number(prompt("Withdraw money from your account"))
		if(!withdraw || withdraw > balance){
			alert(`Sorry your bank balance is ${balance}`)
		}else{
			balance -= withdraw;
			statement.push(-withdraw)
			break;
		}
		}
    	    alert("Wrong pin")		
	}
	break;
	case "transfer money":
	while(true){
		let checkpin = prompt("Enter your atm pin");			
		if(checkpin && checkpin === atmPin){
		let outherAccount = prompt("Enter any account number")	
		let Transfer = Number(prompt("Transfer money from your account to another account"))
		if(!Transfer || Transfer > balance){
			alert(`Sorry your bank balance is ${balance}`)
		}else{
			balance -= Transfer;
			statement.push(-Transfer)
			break;
		}
		}
    	    alert("Wrong pin")			
	}
	break;
	case "change atm pin":
	while(true){
		let checkpin = prompt("Enter your current atm pin");
		if(checkpin && checkpin === atmPin){
			atmPin = prompt("Enter new atm pin")
			break;
		}
			alert("Wrong pin")
	}
	break;
	case "print statement":
	while(true){
		let checkpin = prompt("Enter your atm pin");
		if(checkpin && checkpin === atmPin){
			 console.log(statement);
			 break;
		}
			alert("Wrong pin")
	}
	break;
	case "change password":
	while(true){
       let checkPassword = prompt("Enter your current password");
       if(checkPassword && checkPassword === createPassword){
       	  createPassword = prompt("Create new password")
       	  break;
       }
       	  alert("Wrong pin")
	}
	break;
	case "check balance":
	while(true){
		let checkpin = prompt("Enter your atm pin");
		if(checkpin && checkpin === atmPin){
			console.log(balance)
			break;
		}
			alert("Wrong pin")
	}
	break;
	case "close account":
	  while(true){
	  	let checkPin = prompt("Enter your atm pin")
	  	if(checkPin && checkPin === atmPin){
	  		ans = false;
	  		break;
	  	}
	  		alert("Wrong pin")
	  }
	  break;
	  default:
	   alert("Selecet currect option")
	  break; 
}
}
}
