	let mass = new Array();
	let mass_x = new Array();
	let mass_o = new Array();
	let raund = 1;
	
	
	let array_id = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
	//let xxx = array_id.indexOf('3') 
	//array_id.splice(xxx, 1)
	
	
function cellclick(id){

	let v = 0;

	let cell_text = document.getElementById(id).innerHTML;

	if(cell_text != "" || (!array_id.includes(id.toString()))) {
		alert("ЗАНЯТО");
	} else {
		document.getElementById(id).innerHTML = "x";
		document.getElementById(id).style.color = 'blue'

		var xxx = array_id.indexOf(id.toString()) 
		array_id.splice(xxx, 1)		
	
		id_cell = parseInt(id);
		mass.push(id_cell);
		mass_x.push(id_cell);
		mass_x.sort(mass_x[this.key || 'asc']);

		let v = victory(mass_x, "ИГРОК");
	
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
			document.querySelector(".victory").innerHTML = "ПОБЕДИЛ " + user;
      document.querySelector(".victory").style.display = "block";
      victoryBegin(user);
    }
        
		if(st1 == 3 || st2 == 3 || st3 == 3){
			document.querySelector(".victory").innerHTML = "ПОБЕДИЛ " + user;
			document.querySelector(".victory").style.display = "block";
			victoryBegin(user);
		}
		if(d1 == 3 || d2 == 3){
			document.querySelector(".victory").innerHTML = "ПОБЕДИЛ " + user;
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
		document.querySelector(".round").innerHTML = "РАУНД " + raund;
 
		if(user == "компютер"){
			var num = document.querySelector(".num_c").innerHTML;
			num++;
			document.querySelector(".num_c").innerHTML = num;
		}
		else{
			var num = document.querySelector(".num_u").innerHTML;
			num++;
			document.querySelector(".num_u").innerHTML = num;
		}

 		array_id = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
		mass.length = 0;
		mass_x.length = 0;
		mass_o.length = 0;
	}, 5000);
}

function computer(){
	let number;

	if(mass.length == 8){
	  noneVictory();	
	} else {

		number = Math.floor(Math.random() * (8))+1;
		var id_comp = array_id[Math.floor(Math.random() * array_id .length)]

		var xxx = array_id.indexOf(id_comp.toString()) 
		array_id.splice(xxx, 1)		
		
		document.getElementById(id_comp).innerHTML = "o";
		document.getElementById(id_comp).style.color = 'red'
		mass.push(parseInt(id_comp)); //number
		mass_o.push(parseInt(id_comp)); //number
		victory(mass_o, "компютер");
		
	}
}

function noneVictory(){
	setTimeout(() =>{
		document.querySelector(".victory").innerHTML = "НИЧЬЯ";
		document.querySelector(".victory").style.display = "block";
	}, 5000);
 
	setTimeout(() =>{
		document.querySelector(".victory").style.display = "none";
		let cells = document.querySelectorAll(".cell");
		for (let i = 0; i < cells.length; i++) {
			cells[i].innerHTML = "";
		}
				
		raund++;
		document.querySelector(".statistics").innerHTML = "РАУНД " + raund;

 		array_id = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
		mass.length = 0;
		mass_x.length = 0;
		mass_o.length = 0;
	}, 5000);
}