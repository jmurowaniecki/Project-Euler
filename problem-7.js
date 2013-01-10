#!/usr/bin/node

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that
the 6th prime is 13.

What is the 10 001st prime number?
*/

(function () {
	var list = [2, 3, 5, 7, 11, 13], is_prime = true, n = 13;
	//
	while (list.length + 1 <= 10001 && n++) {
		is_prime = true;
		for (i in list) {
			if (n % list[i] == 0) {
				is_prime = false;
				break;
			}
		}
		if (is_prime) {
			list.push(n);
		}
	}
	console.log(list.pop());
})();