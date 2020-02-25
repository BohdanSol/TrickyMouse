const cursor = document.getElementById('cursor');
const cursorFollowingImg = document.getElementById('images');
const images = document.getElementById('images').children;
var lastX = 0;
var lastY = 0;
var index = 0;
document.addEventListener('mousemove', (e) => {
	let x = e.clientX;
	let y = e.clientY;
	if (Math.abs(lastX - x) > 100 || Math.abs(lastY - y) > 100) {
		blink(x, y);
		lastX = x;
		lastY = y;
	}
	cursor.style.left = x + 'px';
	cursor.style.top = y + 'px';
	cursorFollowingImg.style.left = x - 175 + 'px';
	cursorFollowingImg.style.top = y - 100 + 'px';
});
function blink(x, y) {
	images[index].style.left = x - 175 + 'px';
	images[index].style.top = y - 100 + 'px';
	images[index].classList.toggle('anim');
	console.log(index);
	index++;
	if (index == 7) {
		index = 0;
	}
}
