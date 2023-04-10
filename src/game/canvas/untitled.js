init = function () {
	var cvsMyCanvas = document.getElementById('debug-canvas');
	var oCtx = cvsMyCanvas.getContext('2d');
	iCvsWidth = cvsMyCanvas.clientWidth;
	iCvsHeight = cvsMyCanvas.clientHeight;
	var myAnimation = function (iNow) {
		cvsMyCanvas.iRequestAnimationKey = window.requestAnimationFrame(myAnimation);
		render();
	};

	var render = function () {
		oCtx.clearRect(0, 0, 400, 400);
		renderPellets(50);
	};
	var renderPellets = function (iNum) {
		for (let i = 0; i < iNum; i++) {
			Pellet.randomInstance().draw(oCtx);
		}
	};

	myAnimation(window.performance.now);
};

var iCvsWidth;
var iCvsHeight;

var funRandom = Math.random;
var funRandomInt = function (iMax) {
	return Math.floor(iMax * funRandom()) + 1;
};
// choose one in 50% probability
var funRandowChooseOne = function (iFirst, iSecond) {
	return funRandomInt(2) === 1 ? funRandomInt(iFirst) : funRandomInt(iSecond);
};
var arrColor = ['blue', 'white', 'red', 'green'];

function Pellet(iX, iY, iRadius, sColor) {
	var iX;
	var iY;
	var iRadius;
	var sColor;

	this.draw = function (oCtx) {
		oCtx.moveTo(iX, iY);
		oCtx.arc(iX, iY, iRadius, 0, Math.PI, true);
		oCtx.fillStyle = sColor;
		oCtx.fill();
	};
}
Pellet.newInstance = function (iX, iY, iRadius, sColor) {
	return new Pellet(iX, iY, iRadius, sColor);
};
Pellet.randomInstance = function () {
	return Pellet.newInstance(
		funRandomInt(iCvsWidth),
		funRandomInt(iCvsHeight),
		funRandowChooseOne(2, 4),
		arrColor[funRandomInt(4)],
	);
};
