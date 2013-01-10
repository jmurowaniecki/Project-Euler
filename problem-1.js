#!/usr/bin/node
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var n = 0, sum = 0;
// --- Declaration and inicialization of variables

while (++n < 1000) {
	sum += n % 3 == 0 ? n : (n % 5 == 0 ? n : 0);
}
// --- While we're below 1000 take the numbers multiples of 3 and 5 and sum..

console.log(sum);
// --- Display the result (: