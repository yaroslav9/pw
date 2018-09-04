var left = 0;
var aboutt = document.getElementById('aboutt');
document.getElementById('sl').onclick = sliderLeft;
document.getElementById('sr').onclick = sliderRight;
function sliderRight () {
	left = left - 800;
	if (left < -1600) {
		left=0;
	}
	aboutt.style.left = left + 'px';
}
function sliderLeft () {
	left = left + 800;
	if (left > 0){
		left = -1600;
	}
	aboutt.style.left = left + 'px';
}

let el = document.getElementsByClassName('menu-item');
for (var i=0;i<el.length; i++) {
	el[i].addEventListener('click', showSub, false);
	el[i].addEventListener('mouseleave', hideSub, false);
}
	function showSub() {
		if(this.children.length>1){
		this.children[1].style.height = "auto";
		this.children[1].style.opacity = "1";
		this.children[1].style.overflow = "visible";
		}
}
function hideSub() {
	if(this.children.length>1){
		this.children[1].style.height = "0";
		this.children[1].style.opacity = "0";
		this.children[1].style.overflow = "hidden";
		}
}