"use strict"

class Institude{
	constructor(address, batchName, fees, timing){
		this.address = address;
		this.batchName = batchName;
		this.fees = fees;
		this.students = [];
		this.timing = timing;
		this.feesRecord = new Map();
	}

	getAddress(){
		return this.address;
	}

	getBatchTiming(){
        return this.timing;
	}

	getTotalStudent(){
		return this.students.length;
	}
    
    getAllStudentBySorting(sorting){
    	if(sorting === "asending"){
    		return this.students.sort();
    	}else{
    		return this.students.sort().reverse();
    	}
    }

   getDepositFee(studentName, month){
   	   if(!this.students.includes(studentName) && studentName){
   	   	    this.students.push(studentName)
   	   }
       let stdentry = this.feesRecord.get(studentName)
       if(!stdentry){
       	   this.feesRecord.set(studentName, [month])
       }else{
       	  stdentry.push(month);
       	  this.feesRecord.set(studentName, stdentry)
       }
       console.log(this.students)
       return this.feesRecord
   }


   getAllStudentByFee(month){
   	let stdArr=[];
    if(month === 0){
    	for(let stdName of this.students){
    		if(this.feesRecord.get(stdName)[0] == undefined){
    			stdArr.push(stdName)
    		}
    	}
    }else{
    	for(let [key, value] of this.feesRecord){
    		console.log(value)
    		if(value && value.length === month){
    			stdArr.push(key)
    		}
    	}
    }
    return stdArr;
   }


   getTotalIncome(){
   	let totalIncome = 0;
   	this.feesRecord.forEach(function(value, key){
         totalIncome += value.length;
   	})
   	return totalIncome * this.fees;
   }

   getTotalIncomeByMonth(nameOfmonth){
   	 let count;
   	 this.feesRecord.forEach(function(value){
   	 	if(value.includes(nameOfmonth)){
   	 		count++;
   	 	}
   	 })
   	 return count * this.fees;
   }
}



const Coaching = new Institude("354, joshi, marg, jhotwara, jaipur", "Javascript", 3000, "8:30-10:00 PM")

console.log(Coaching.getDepositFee("rafik", "january"))
console.log(Coaching.getDepositFee("rafik", "february"))
console.log(Coaching.getDepositFee("rafik", "march"))
console.log(Coaching.getDepositFee("khalil", "january"))
console.log(Coaching.getDepositFee("khalil", "julay"))
console.log(Coaching.getDepositFee("hello"))
console.log(Coaching.getDepositFee("hello2"))
	
console.log(Coaching.getAllStudentByFee(0))




