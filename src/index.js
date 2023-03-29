const myObj = {
	a: 1,
	b: {c: 2},
};
/**
 * ss
 * @param {*} obj
 */
function printMe(obj) {
	console.log(obj.b.c);
}
printMe(myObj);
