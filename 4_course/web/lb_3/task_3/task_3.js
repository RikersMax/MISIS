let test = 'ok';


function setGradient() {
	let color1 = document.getElementById('hex');
	let color2 = document.getElementById('hex_2');
	let body = document.getElementById('gradient');
	body.style.background = "linear-gradient(to right, "+ color1.textContent + ", " + color2.textContent + ")"; 
}



function rgb_c(id, color, hex, group) {

	let gr = [];
	if (group == 1){
	gr = ["1","2","3"];
	} else{
	gr = ["1_", "2_", "3_"];
	}
	
	let r = parseInt(document.getElementById(gr[0]).value).toString(16);
	let g = parseInt(document.getElementById(gr[1]).value).toString(16);
	let b = parseInt(document.getElementById(gr[2]).value).toString(16);

	if(r.length == 1){
		r ='0' + r;
	}
	
	if(g.length == 1){
		g ='0' + g;
	}
	
	if(b.length == 1){
		b ='0' + b;
	}
	

	let range_color = document.getElementById(id);
	let label_element = document.getElementById(color);
	label_element.innerHTML = range_color.value;
	let hex_color = document.getElementById(hex);

	//document.body.append(hex_color)

	hex_color.innerHTML = "#" + r + g + b;
	hex_color.style.color = "#" + r + g + b;

	//alert(r)

	setGradient();
}
                                                    
