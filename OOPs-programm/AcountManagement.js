"use strict"

const accounts = [];
class openAccount {
	#name;
	#mobile;
	#address;
	#pin;
	#accountNumber;
	#active;
	#balance;
	#statement;
	#permission;
	constructor(name, mobile, address, pin, accountNumber){
             this.#name = name;
             this.#mobile = mobile;
             this.#address = address;
             this.#pin = pin;
             this.#accountNumber = accountNumber;
             this.#active = true;
             this.#balance = 5000;
             this.#statement = [];
             this.#permission = false;
	}

	open(){
			    alert(
			      "Welcome to SBI Bank. Please provide asked details to open your account."
			    );		
             const name = prompt("What is your name");
             const mobile = Number(prompt("What is your mobile number"));
             const address = prompt("What is your address");
             const pin = Number(prompt("What is your ATM pin"));
             const accountNumber = prompt("What is your account number");
             this.#permission = true;	
             const account = new openAccount(name, mobile, address, pin, accountNumber);
             accounts.push(account);
             console.log(accounts)
	}

	close(){
		alert("We need some information to close your account.");
		const accountData = this.isValidUser();
		if(accountData){
			accountData.#active = false;
			alert("Successfully closed your account");
		}
}

	deposit(){
		alert("Deposit money into account.");
		const accountData = this.isValidUser();
		if(accountData){
		const amount = Number(prompt("Enter amount"))	
		if(amount && amount > 0){
			accountData.#balance  += amount;
			accountData.#statement.push(amount)
			alert("Sucessfully deposit money")
		}else{
			alert("Enter  deposit money  greater than 0 ")
		}
		}
}

	withdraw(){
		alert("Withdraw money from account")
		const accountData = this.isValidUser();
		if(accountData){
		const amount = Number(prompt("Enter amount"));
		if(amount && amount < accountData.#balance){
			accountData.#balance -= amount;
			accountData.#statement.push(-amount)
			alert("Sucessfully Withdraw money")
		}else{
			alert(`Sorry your balance is ${accountData.#balance}`)
		}	
		}
}

	transfer(){
		alert("Transfer money");
		const accountData = this.isValidUser();
		if(accountData){
		const amount = Number(prompt("Enter amount"));
		const beneficiaryAccountNumber = prompt("Please the beneficiary account number?")
		if(amount <= accountData.#balance){
		const filterdAccount = accounts.filter((account)=> account.#accountNumber === beneficiaryAccountNumber);
		if(filterdAccount && filterdAccount.length === 1){
			accountData.#balance -= amount;
			filterdAccount[0].#balance += amount
			accountData.#statement.push(-amount)
			alert("Sucessfully Transfer money")            
		}else{
			alert("Please enter correct details")
		}
		}else{
			alert(`Sorry your balance is ${accountData.#balance}`)
		}
		}
}

	changePin(){
		alert("Can you chage pin")
		const accountData = this.isValidUser();
		if (accountData) {
            const newPin = Number(prompt("Enter new  pin"))
			const confirm = Number(prompt("confirm  pin"))
			if(confirm === newPin){
			   accountData.#pin = newPin;
			   alert("Successfully pin change")
			}else{
			   alert("Pin is not same please try again.")
			}
		}
}

    printStatement(){
    	  alert("Information your account")
    	  const accountData = this.isValidUser();
    	  if(accountData){
    	  	console.log(`Hello ${accountData.#name}, please find below details of your mobile number ${accountData.#mobile},
    	  	address ${accountData.#address}, and account number ${accountData.#accountNumber}, in SBI, your current balance is ${accountData.#balance}`)
    	  	for(let val of accountData.#statement){
    	  		if(val > 0){
    	  			console.log(`Deposit ${val} Rs`)
    	  		}else{
    	  			console.log(`Withdraw ${val} Rs`)
    	  		}
    	  	}
    	  }
}



	isValidUser(){
		if(this.permission){
		const accountNumber = prompt("Enter your account number");
		const atmpin = Number(prompt("Enter ATM pin"));
        const f = accounts.filter((checkaccount)=> checkaccount.#accountNumber === accountNumber);
        console.log(f);
        if(f && f.length === 1){
        	if(atmpin === f[0].#pin){
        	return f[0];
        }else{
        	alert("incorrect atm pin")
        }
        }else if(f && f.length > 1){
        	alert("Data is incorrect. Found more than one account with same account number")
        }else{
        	alert("No account found with the given account number")
        }
        alert("You have enterd wrong details. Please try again.")
        return null;
	}else{
		alert("Sorry you do not have a account. please open account")
	}
}

	start(){
		let isExit = true;
		while(isExit){
		const choice = Number(
        prompt(`
    Please enter your choice from below options :
    1. Open a bank account
    2. Close a bank account
    3. Deposit Money
    4. Withdraw money
    5. Trasfer money
    6. Change ATM pin
    7. Print Statement
    8. Exit
  `)
      );
      switch (choice) {
        case 1:
          this.open();
          break;
        case 2:
          this.close();
          break;
        case 3:
          this.deposit();
          break;
        case 4:
          this.withdraw();
          break;
        case 5:
          this.transfer();
          break;
        case 6:
          this.changePin();
          break;
        case 7:
          this.printStatement();
          break;
        case 8:
          isExit = false;
          break;
        default:
          alert("Please select correct choice")  
          break;
      }
	}
	}
}
const AccountHolder = new openAccount();
AccountHolder.start();