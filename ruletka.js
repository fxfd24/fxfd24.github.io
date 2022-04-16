// document.querySelector - возвращает значения всех селекторов.
var cards = document.querySelectorAll('.cards > div');
var cards_block = document.querySelector('.cards');

function start(){
	var random = Math.floor(Math.random() * 9);// от 0 до 9
	//.floor - окгругляет число в меньшую сторону.
	//.random - генерирует любое нецелое число.
	cards_block.style.left = -random * 50 + 'px';
	setTimeout(function(){
		random++;
		cards[random].style.background = '#232F52';
		cards[random].style.color = 'white';
	},5000)
}
