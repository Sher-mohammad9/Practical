"use strict"

// 1. Current date ko 5 different countries ke according show krna hai

let dateArr = ["Kuwait","India","Japanese","Oman","Korean"]
let dateCode= ["ar-kw","hi","ja","ar-om","ko"]
let currentDate = new Date();
console.log(`Show Date of Countries`)
for(let i=0; i<dateArr.length; i++){
	let diffDate = new Intl.DateTimeFormat(dateCode[i],{
		calendar : dateArr[i],
		numberingSystem : dateArr[i],
	}).format(currentDate);
	console.log(`${dateArr[i]} = ${diffDate}`)
}

console.log("    ")

// 2. Koi b ek amount lelo aur usko 5 different currencies like Euro, INR etc me display krna hai

let number = 343224.234
let currencyCode = ["KWD","INR","JPY","OMR","KRW"]
let countries= ["ar-kw","hi","ja","ar-om","ko"]
console.log(`Show Currency of Countries`)
for(let i=0; i<currencyCode.length; i++){
	let diffCurrency = new Intl.NumberFormat(countries[i],{
        style : "currency",
        currency : currencyCode[i]
	}).format(number);
	console.log(`${dateArr[i]} = ${diffCurrency}`)
}

console.log(" ")
// 3. Koi b speed lelo fir use Km/Hr me 5 different countries me display krna hai 

let num = 100;
let countriesSpeedMeter = ["ar-kw","hi","ja","ar-om","ko"]
console.log(`Show speed meter of Countries`)
for(let i=0; i<countriesSpeedMeter.length; i++){
	let showSpeed = new Intl.NumberFormat(countriesSpeedMeter[i],{
        style : "unit",
        unit : "kilometer-per-hour"
	}).format(num);
	console.log(`${dateArr[i]} = ${showSpeed}`)
}

console.log(" ")

// 4. Koi b number lelo use alag alag countries me alag alag units me display krna hai jaise litre and India

let liter = 100;
let countriesShowLiters = ["ar-kw","hi","ja"]
let unit = ["kilometer-per-hour","liter","kilogram"]
console.log(`Show unit of Countries`)
for(let i=0; i<countriesShowLiters.length; i++){
	let diffunit = new Intl.NumberFormat(countriesShowLiters[i],{
        style : "unit",
        unit : unit[i],
        unitDisplay : "long",
	}).format(liter);
	console.log(`${dateArr[i]}, ${unit[i]} = ${diffunit}`)
}

console.log(" ")


// 5. Ek date Object bnana hai aur usme year 2025, month 8th, date 20 set krke print krvani hai.

let yearDate = new Date(2025,8,20);
let yearOfcountrise = ["ar-kw","hi","ja","ar-om","ko"];
let countriArr = ["Kuwait","India","Japanese","Oman","Korean"]
console.log(`Show years of countries`)
for(let i=0; i<yearOfcountrise.length; i++){
	let showYears = new Intl.DateTimeFormat(yearOfcountrise[i],{
		dateStyle : "full",
	}).format(yearDate);
	console.log(`${countriArr[i]} = ${showYears}`)
}

console.log("  ")

// 6. Ek long number lena hai aur usse date bnani hai fir us 
// date ke year, month, day, hours, minutes, seconds, milliseconds print krvane hai

let milliseconds = 1021147230000;
let fullyearTime = new Date(milliseconds);
console.log(fullyearTime)


let yearOfcountrise1 = ["ar-kw","hi","ja","ar-om","ko"];
let countriArr1 = ["Kuwait","India","Japanese","Oman","Korean"]
console.log(`Show full years  and time of countries`)
for(let i=0; i<yearOfcountrise1.length; i++){
	let showYearstime = new Intl.DateTimeFormat(yearOfcountrise1[i],{
		dateStyle : "full",
		timeStyle : "long",
	}).format(fullyearTime);
	console.log(`${countriArr1[i]} = ${showYearstime}`)
}

// 1. Write a JavaScript function to get the current date.

let date = new Date()
let date1 = [date.getMonth(),date.getDate(),date.getFullYear()]
function showDate(date){
	console.log(date)
}
showDate(date1.join("/"))
showDate(date1.join("-"))


// 2. Write a JavaScript function to get the number of days in a month. Go to the editor

let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
function daysOfmonth(day){
	console.log(monthDays[day.getMonth()])
}
daysOfmonth(new Date("2012-1"))
daysOfmonth(new Date("2012-2"))
daysOfmonth(new Date("2012-9"))
daysOfmonth(new Date("2012-12"))

// 3. Write a JavaScript function to get the month name from a particular date. 

let monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function showName(name){
	console.log(monthsName[name.getMonth()])
	console.log(name.getMonth())	
}
showName(new Date("1/1/2009"))
showName(new Date("11/13/2014"))

// 4. Write a JavaScript function to test whether a date is a weekend. 

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function weekEnd(day){
	 let dayInd = day.getDay();
     if(days[dayInd] == "Sunday" || days[dayInd] == "Saturday"){
     	console.log("Weekend")
     }else{
     	console.log("Weekday")
     }
}
weekEnd(new Date("Nov 15, 2014"));
weekEnd(new Date("Nov 16, 2014"));
weekEnd(new Date("Nov 17, 2014"));


// 5. Write a JavaScript function to get difference between two dates in days.

function diffdays(date1, date2){
	let dt1 = new Date(date1)
	let dt2 = new Date(date2)
	let show = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
	console.log(show)
}
diffdays('04/02/2014', '11/04/2014')
diffdays('12/02/2014', '11/04/2014');




