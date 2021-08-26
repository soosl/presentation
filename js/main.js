const section = document.querySelector('.parallax-effect');

let currentPos = window.pageYOffset;

const update = () => {
	const newPos = window.pageYOffset;
	const diff = newPos - currentPos;
	let speed = diff * 0.1;

    if (speed > 5) {
        speed = 5;
    } else if (speed < -5) {
        speed = -5;
    }
	
	section.style.transform = `skewY(${ speed }deg)`;
	
	currentPos = newPos;
	
	requestAnimationFrame(update);
}

update();