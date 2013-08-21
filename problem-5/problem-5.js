#!/usr/bin/node
/*
MjUyMCBpcyB0aGUgc21hbGxlc3QgbnVtYmVyIHRoYXQgY2FuIGJlIGRpdmlkZWQgYnkgZWFjaCBv
ZiB0aGUgbnVtYmVycyBmcm9tIDEKdG8gMTAgd2l0aG91dCBhbnkgcmVtYWluZGVyLgoKV2hhdCBp
cyB0aGUgc21hbGxlc3QgcG9zaXRpdmUgbnVtYmVyIHRoYXQgaXMgZXZlbmx5IGRpdmlzaWJsZSBi
eSBhbGwgb2YgdGhlCm51bWJlcnMgZnJvbSAxIHRvIDIwPwo=
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