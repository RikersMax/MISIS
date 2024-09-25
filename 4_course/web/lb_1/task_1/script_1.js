function ansQ1(){


	let checked_1 = document.querySelector('input[name="q1"]:checked');
	let checked_2 = document.querySelector('input[name="q2"]:checked');
	let checked_3 = document.querySelector('input[name="q3"]:checked');


	let sum_input = parseInt(checked_1.value) + parseInt(checked_2.value) + parseInt(checked_3.value);


	if (sum_input == 9){
		alert("Верно");
	}else {
		alert("Не верно");
	}
}