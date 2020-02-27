const cursor = document.getElementById('cursor');
const cursorFollowingImg = document.getElementById('images');
const images = document.getElementById('images').children;
const IMG_COUNT = images.length;
var lastX = 0;
var lastY = 0;
var index = 0;
document.addEventListener('mousemove', (e) => {
	let x = e.clientX;
	let y = e.clientY;
	if (Math.abs(lastX - x) > 120 || Math.abs(lastY - y) > 100) {
		blink(x, y);
		lastX = x;
		lastY = y;
	}
	cursor.style.left = x + 'px';
	cursor.style.top = y + 'px';
	images[index].style.left = x - images[index].offsetWidth / 2 + 'px';
	images[index].style.top = y - images[index].offsetHeight / 2 + 'px';
	//cursorFollowingImg.style.left = x - images[index].offsetWidth / 2 + 'px';
	//cursorFollowingImg.style.top = y - images[index].offsetHeight / 2 + 'px';
	console.log(index);
});
function blink(x, y) {
	images[index].classList.toggle('anim');
	setTimeout(() => {
		images[index].classList.remove('anim');
		images[index].offsetWidth = images[index].offsetWidth;
	}, 1501);
	index++;
	if (index == IMG_COUNT) {
		index = 0;
	}
}
