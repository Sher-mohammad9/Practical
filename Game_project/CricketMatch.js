"use strict"


let betsman1 = 0;
let Score = 0;
let wikis = 0;
let disiGain = true;
let teamScore = document.getElementById("teamScore");
let bets1 = document.getElementById("betsRun1");
let wikits = document.getElementById("wikits")
let td1 = document.createElement("td")
let td2 = document.createElement("td");
let table = document.getElementById("scoreshet")
let tr = document.createElement("tr");
	bets1.innerHTML = betsman1;
	teamScore.innerHTML = Score;
	wikits.textContent = wikis;

function cricetMatch(){
let random = Math.trunc(Math.random()*7);

if((random === 4 || random === 6 || random === 1 || random === 2 || random === 3) && disiGain){
	betsman1 += random;
	bets1.innerHTML = betsman1;
	Score += random;
	teamScore.innerHTML = Score
}

if(random === 0 && disiGain){
	betsman1 = betsman1 - betsman1;
	bets1.innerHTML = betsman1;
	wikis += 1;
	wikits.textContent = wikis;

if(wikis === 10){
	disiGain = false;
	wikits.textContent = "All Out";
	let tdtex1 = document.createTextNode("Target");
	td1.appendChild(tdtex1)
    let tdtex2 = document.createTextNode(`${Score + 1}`)
    td2.appendChild(tdtex2);
    td2.style.textAlign = "center";
    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);

}
}
	console.log(random)
	localStorage.setItem('betsRun', betsman1)
	localStorage.setItem('teamScore', Score);
	localStorage.setItem('teamwikits', wikis)
}

