function run(id){
	let button = document.getElementById(id)
	button.style.left=Math.random()*500+"PX";
	button.style.top=Math.random()*500+"PX";
	button.style.right=Math.random()*500+"PX";
	button.style.bottom=Math.random()*500+"PX";	
}

let container = document.getElementById('content')

for (var i = 0; i < 10; i++){
	input = document.createElement("input");
	input.type = "button";
	input.value = `knopka ${i}`;
	input.id = `knopka-${i}`
	input.className = "knopka"
	input.style.left = i * 110 +'px'
	input.setAttribute("onmousemove", `run("knopka-${i}")`);
	container.appendChild(input);
}
/*
DOCUMENT.GETELEMENTBYID("KNOPKA").STYLE.TOP=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA1").STYLE.LEFT=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA1").STYLE.TOP=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA2").STYLE.LEFT=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA2").STYLE.TOP=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA3").STYLE.LEFT=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA3").STYLE.TOP=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA4").STYLE.LEFT=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA4").STYLE.TOP=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA5").STYLE.LEFT=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA5").STYLE.TOP=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA6").STYLE.LEFT=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA6").STYLE.TOP=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA7").STYLE.LEFT=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA7").STYLE.TOP=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA8").STYLE.LEFT=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA8").STYLE.TOP=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA9").STYLE.LEFT=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA9").STYLE.TOP=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA0").STYLE.LEFT=MATH.RANDOM()*500+"PX";
DOCUMENT.GETELEMENTBYID("KNOPKA0").STYLE.TOP=MATH.RANDOM()*500+"PX";
*/