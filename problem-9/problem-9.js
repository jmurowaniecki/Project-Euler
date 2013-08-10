#!/usr/bin/node

/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a² + b² = c²

For example, 3² + 4² = 9 + 16 = 25 = 5².

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function pow (a, b) {
	return Math.pow(a, (b == undefined) ? 2 : b);
}
/*
// 1st try totally wrong ):
(function () {
	var a, b, c, d;
	//
	for (a = 1; a < 1000; a++) {
		for (b = 1; b < 1000; b++) {
			for (c = 1; c < 1000; c++) {
				d = (pa = pow(a)) + (pb = pow(b)) + (pc = pow(c));
				//console.log(a, pa, b, pb, c, pc, d);
				//
				if (d == 1000) {
					return console.log('wrong', a, b, c, d, 'abc = ' + (a * b * c), " pows: ", pa, pb, pc);
				}
			}
		}
	}
})();


// after weeks away we try again.. and fail ):
(function () {
	var max = 1000;
	//
	for (var a = 1; a <= max / 3; a++)
	{
		for (var b = 1; b <= max / 2; b++)
		{
			var c = Math.sqrt(max - pow(a) - pow(b));
			if (pow(a) + pow(b) + pow(c) == 1000)
			console.log('wrong:', a, b, c);
		}
	}
})();
*/
(function () {
	var d = 1000, a, b, c, d;
	//
	for (a = 1; a <= d / 3; a++) {
		for (b = 1; b <= d / 2; b++) {
			c = d - a - b; // but now I know where I was wrong
			if (pow(a) + pow(b) == pow(c)) // ..I miss some important lessons
			return console.log(a, b, c, d = a * b * c); //  in college (:
		}
	}
})();