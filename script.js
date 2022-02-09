var a = 0;
var bonus=1;
var up=10;
//function cl() - это функция,
// которая запускает скрипт при
// каждом клике.
// в () - указываем условие
// в {} - указываем скрипт, т.е
// что будет происходить.
// if else - переводится как "если" "иначе".
function cl(){
	a=a+bonus;
	score.textContent = a;
}
function upgreat(){
	if(a>=up){
		bonus=bonus+1;
		a=a-up;
		up=up+up;
		document.getElementById('up').innerHTML = up;
		document.getElementById('score').innerHTML = a;
	}else{
		alert('Недостаточно очков!');
	}
}