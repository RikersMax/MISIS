

function rgb_c(id, color) {

	let r = parseInt(document.getElementById("1").value).toString(16);
	let g = parseInt(document.getElementById("2").value).toString(16);
	let b = parseInt(document.getElementById("3").value).toString(16);


	let range_color = document.getElementById(id);
	let label_element = document.getElementById(color);
	label_element.innerHTML = range_color.value;
	let hex_color = document.getElementById("hex");

	document.body.append(hex_color)

	//hex_color.innerHTML = "#" + r + g + b;
	hex_color.style.background = "#" + r + g + b;
}


