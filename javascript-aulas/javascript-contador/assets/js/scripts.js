let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if (count >= 0){
        CURRENT_NUMBER.style.color="black";
    }
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if (count < 0){
        CURRENT_NUMBER.style.color="red";
    }
}

const botao = document.getElementById('botao');




