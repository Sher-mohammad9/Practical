function calculate() {
	if (!document.getElementById("input-box").value) {
		 alert('Enter your expressoin')
	}else{
  document.getElementById("input-box").value = eval(
    document.getElementById("input-box").value
  );
}
}

function ClearExp(){
	document.getElementById("input-box").value = '';
}