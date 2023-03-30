init = function () {
	var cvsMyCanvas = document.getElementById('debug-canvas');
	var myAnimation = function (iNow) {
		cvsMyCanvas.iRequestAnimationKey = window.requestAnimationFrame(myAnimation);
		render();
	};

	var render = function () {};

	myAnimation(window.performance.now);
};
