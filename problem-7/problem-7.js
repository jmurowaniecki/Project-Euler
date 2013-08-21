#!/usr/bin/node
/*
QnkgbGlzdGluZyB0aGUgZmlyc3Qgc2l4IHByaW1lIG51bWJlcnM6IDIsIDMsIDUsIDcsIDExLCBh
bmQgMTMsIHdlIGNhbiBzZWUgdGhhdAp0aGUgNnRoIHByaW1lIGlzIDEzLgoKV2hhdCBpcyB0aGUg
MTAgMDAxc3QgcHJpbWUgbnVtYmVyPwo=
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