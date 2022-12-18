"use strict"

class screenLock{
	constructor(facelock,password,fingerprint,pattern){
              this._facelock = facelock;
              this._password = password;
              this._fingerprint = fingerprint;
              this._pattern = pattern;
	}

	get password(){
			 return this._facelock;
	}

	set newLock(lock1){
		this._facelock = 12 + 13 + lock1 + 5;
	}
}
const lock = new screenLock("facelock",1234,"fingerprint","pattern")
lock.newLock = prompt("Set new screenlock")
console.log(lock.password)

