function	my_f(){
	console.log('hello')
	alert('ok')
}

setInterval(function() {
	animate1();
	animate2();
	animate3();
}, 20)

setInterval(animate1, 20);
// независимые анимации
setInterval(animate2, 20);
// в разных местах кода
setInterval(animate3, 20);

let requestId = requestAnimationFrame(callback);
// отмена запланированного запуска callback
cancelAnimationFrame(requestId);