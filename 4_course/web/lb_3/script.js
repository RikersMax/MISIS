function font_size_up(elemt_area){
	let area = document.getElementById(elemt_area);
	let size = window.getComputedStyle(document.getElementById(elemt_area), null).getPropertyValue('font-size')
	let to_int = Number(size.substring(0, size.length - 2));
	area.style.fontSize = to_int + 1 + 'px';
}

function font_size_down(elemt_area){
	let area = document.getElementById(elemt_area);
	let size = window.getComputedStyle(document.getElementById(elemt_area), null).getPropertyValue('font-size')
	let to_int = Number(size.substring(0, size.length - 2));
	area.style.fontSize = to_int - 1 + 'px';
}


function color_area(elemt_area){
	let my_area = document.getElementById(elemt_area);
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	my_area.style.background = "#" + randomColor
}



function c_css(kurs, color, b_text_g) {
	let b_color = ["red","green","blue","pink"];
	let sample_t = [["Sample text 1-1","Sample text 1-2","Sample text 1-3"],
	["Sample text 2-1","Sample text 2-2","Sample text 2-3"],
	["Sample text 3-1","Sample text 3-2","Sample text 3-3"],
	["Sample text 4-1","Sample text 4-2","Sample text 4-3"]
	];
	const old_b = document.getElementsByClassName("knopka");

	//Создание текста


	let b_font = ['"Comic Sans MS", cursive, sans-serif', 'Papyrus,fantasy','"Times New Roman", Times, serif'];
	let c_b = document.getElementById(color);
	c_b.style.background = b_color[color];

	const old_t = document.getElementsByClassName("text");
	while (old_t.length > 0) {
	old_t[0].remove(); }

	for (let q = 0; q < b_text_g.length; q++){
	old_b[q].style.color = "black"; }

	const text = document.createElement('textarea');
	text.className = 'text';
	text.id = 'area_text'
	text.value = sample_t[kurs][color];
	text.style.fontFamily = b_font[color];
	document.body.append(text);


	const old_down = document.getElementsByName("button_down"); 
	while (old_down.length > 0) {
		old_down[0].remove(); 
	}

	const old_up = document.getElementsByName("button_up"); 
	while (old_up.length > 0) {
		old_up[0].remove(); 
	}

	const arrow_down = document.createElement('input');
	arrow_down.type = 'button';
	arrow_down.id = 'arrow_down';
	arrow_down.name = 'button_down';
	arrow_down.value = 'down';
	arrow_down.onclick = function() { font_size_down(text.id)}

	document.body.append(arrow_down);


	const arrow_up = document.createElement('input');
	arrow_up.type = 'button';
	arrow_up.id = 'arrow_up';
	arrow_up.name = 'button_up';
	arrow_up.value = 'up';
	arrow_up.onclick = function() { font_size_up(text.id)}

	document.body.append(arrow_up);



	const old_b_a = document.getElementsByName("knopka_"); 
	while (old_b_a.length > 0) {
		old_b_a[0].remove(); 
	}


	const input_text_area = document.createElement('input');
	input_text_area.type = 'button'; 
	input_text_area.className = 'knopka_texarea';
	input_text_area.name = 'knopka_'; 
	input_text_area.value = 'random color'; 
	input_text_area.id = 'area_text_my';
	input_text_area.onclick = function() {color_area(text.id)}

	document.body.append(input_text_area);

}




function rasp(id) {
	const elem = document.getElementsByClassName("knopka");
	while (elem.length > 0) {
		elem[0].remove();
	}



let b_text = [["БПИ-24","БХТ-24","БМТ-24"], ["БПИ-23","БХТ-23","БМТ-23"], ["БПИ-22","БХТ-22","БМТ-22"],  ["БПИ-21","БХТ-21","БМТ-21"]];
let b_text_g = b_text[id];
for (let i = 0; i <= b_text_g.length; i++){
	const input = document.createElement('input');
	input.type = 'button'; 
	input.className = 'knopka';
	input.name = 'knopka'; 
	input.id = i;
	input.value = b_text_g[i]; 
	input.onclick = function() {
		c_css(id, input.id, b_text_g); }
	document.body.append(input); 
	} 


const elem_2 = document.getElementsByClassName("text");
while (elem_2.length > 0) {
	elem_2[0].remove();
}





}






