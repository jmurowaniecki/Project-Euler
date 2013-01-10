#!/usr/bin/node

/*
2520 is the smallest number that can be divided by each of the numbers from 1
to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/

var evenly_divisible = function () {
	var n = 1, m, x;
	do {
		m = false;
		for (x = 1; x <= 20; x++) {
			if (n % x == 0) {
				m = n;
				continue;
			}
			else {
				m = false;
				break;
			}
		}
		if (m) {
			return m;
		}
	} while (n++);
}
console.dir(evenly_divisible());