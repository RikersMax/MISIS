	let mass = new Array();
	let mass_x = new Array();
	let mass_o = new Array();
	let raund = 1;
	
function cellclick(id){

	let v = 0;

	let cell_text = document.getElementById(id).innerHTML;
	if(cell_text != "") {
		alert("занято");
	}
	else {
		document.getElementById(id).innerHTML = "x";
	
		id_cell = parseInt(id);
		mass.push(id_cell);
		mass_x.push(id_cell);
		mass_x.sort(mass_x[this.key || 'asc']);

		let v = victory(mass_x, "Игрок");
	
		if(mass_x.length != 0 && mass.length < 8) {
			computer();
		}
	
		if(mass.length == 9 && v != 1) {
			noneVictory();
		}	
	}
}

function victory(metka, user){
	var srt1 = 0; 
	var srt2 = 0;
	var srt3 = 0; 
 
	var st1 = 0; 
	var st2 = 0; 
	var st3 = 0; 
 
	var d1 = 0;
	var d2 = 0; 
 
	for (var i = 0; i < metka.length; i++){
		switch(metka[i]) {
			case 1: { srt1++; st1++; d1++; break; }
			case 2: { srt1++; st2++; break; }
			case 3: { srt1++; st3++; d2++; break; }
			case 4: { srt2++; st1++; break; }
			case 5: { srt2++; st2++; d1++; d2++;  break; }
            case 6: { srt2++; st3++; break; }
            case 7: { srt3++; st1++; d2++; break; }
			case 8: { srt3++; st2++; break; }
			case 9: { srt3++; st3++; d1++;break; }
        }
 
        if(srt1 == 3 || srt2 == 3 || srt3 == 3)	{
			document.querySelector(".victory").innerHTML = "Победил " + user;
            document.querySelector(".victory").style.display = "block";
            victoryBegin(user);
        }
        
		if(st1 == 3 || st2 == 3 || st3 == 3){
			document.querySelector(".victory").innerHTML = "Победил " + user;
			document.querySelector(".victory").style.display = "block";
			victoryBegin(user);
		}
		if(d1 == 3 || d2 == 3){
			document.querySelector(".victory").innerHTML = "Победил " + user;
			document.querySelector(".victory").style.display = "block";
			victoryBegin(user);
        }
    }
 
	if(srt1 == 3 || srt2 == 3 || srt3 == 3 || st1 == 3 || st2 == 3 || st3 == 3 || d1 == 3 || d2 == 3){
		return 1;
	}
}

function victoryBegin(user){
	
	setTimeout(()=>{
		document.querySelector(".victory").style.display = "none";
		let cells = document.querySelectorAll(".cell");
		for (let i = 0; i < cells.length; i++) {
			cells[i].innerHTML = "";
		}
 
		raund++;
		document.querySelector(".statistics").innerHTML = "Рауед " + raund;
 
		if(user == "Компьютер"){
			var num = document.querySelector(".num_c").innerHTML;
			num++;
			document.querySelector(".num_c").innerHTML = num;
		}
		else{
			var num = document.querySelector(".num_u").innerHTML;
			num++;
			document.querySelector(".num_u").innerHTML = num;
		}
 
		mass.length = 0;
		mass_x.length = 0;
		mass_o.length = 0;
	}, 5000);
}

function computer(){
let number;
	if(m.length == 8){
	   noneVictory();	}
	number = Math.floor(Math.random() * (8))+1;
	document.getElementById(number).innerHTML = "o";
	m.push(number);
	m_o.push(number);
	victory(m_o, "Компьютер");}

	}

	document.getElementById(number).innerHTML = "o";
	mass.push(number);
	mass_o.push(number);
	victory(mass_o, "Компьютер");
}

function noneVictory(){
	setTimeout(() =>{
		document.querySelector(".victory").innerHTML = "Ничья";
		document.querySelector(".victory").style.display = "block";
	}, 5000);
 
	setTimeout(() =>{
		document.querySelector(".victory").style.display = "none";
		let cells = document.querySelectorAll(".cell");
		for (let i = 0; i < cells.length; i++) {
			cells[i].innerHTML = "";
		}
				
		raund++;
		document.querySelector(".statistics").innerHTML = "Рауед " + raund;
 
		mass.length = 0;
		mass_x.length = 0;
		mass_o.length = 0;
	}, 5000);
}