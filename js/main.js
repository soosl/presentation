const section = document.querySelector('.parallax-effect');

let currentPos = window.pageYOffset;

const update = () => {
	const newPos = window.pageYOffset;
	const diff = newPos - currentPos;
	let speed = diff * 0.15 > 5 ? 5 : diff * 0.15;


	
	section.style.transform = `skewY(${ speed }deg)`;
	
	currentPos = newPos;
	
	requestAnimationFrame(update);
}

update();