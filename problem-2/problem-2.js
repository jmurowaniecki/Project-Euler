#!/usr/bin/node
/*
RWFjaCBuZXcgdGVybSBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlIGlzIGdlbmVyYXRlZCBieSBh
ZGRpbmcgdGhlIHByZXZpb3VzIHR3byB0ZXJtcy4gQnkgc3RhcnRpbmcgd2l0aCAxIGFuZCAyLCB0
aGUgZmlyc3QgMTAgdGVybXMgd2lsbCBiZToKCjEsIDIsIDMsIDUsIDgsIDEzLCAyMSwgMzQsIDU1
LCA4OSwgLi4uCgpCeSBjb25zaWRlcmluZyB0aGUgdGVybXMgaW4gdGhlIEZpYm9uYWNjaSBzZXF1
ZW5jZSB3aG9zZSB2YWx1ZXMgZG8gbm90IGV4Y2VlZCBmb3VyIG1pbGxpb24sIGZpbmQgdGhlIHN1
bSBvZiB0aGUgZXZlbi12YWx1ZWQgdGVybXMuCg==
*/

var fibonacci = function (lim) {
	// --- Declaration of our main function

	var x = 1, ant = tmp = 0, even_sum = 0;
	// --- Declaration and inicialization of our vars

	while (x < lim)
	{
		tmp = x;
		x += ant;
		ant = tmp;
		// --- Standart Fibonacci algorithm

		if (x % 2 == 0) even_sum += x;
		// --- Basic validation to increase our evens found
	}
	return even_sum;
}

console.log(fibonacci(4000000));
// --- Print results