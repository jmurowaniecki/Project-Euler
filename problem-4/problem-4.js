#!/usr/bin/node
/*
QSBwYWxpbmRyb21pYyBudW1iZXIgcmVhZHMgdGhlIHNhbWUgYm90aCB3YXlzLiBUaGUgbGFyZ2Vz
dCBwYWxpbmRyb21lIG1hZGUgZnJvbQp0aGUgcHJvZHVjdCBvZiB0d28gMi1kaWdpdCBudW1iZXJz
IGlzIDkwMDkgPSA5MSA5OS4KCkZpbmQgdGhlIGxhcmdlc3QgcGFsaW5kcm9tZSBtYWRlIGZyb20g
dGhlIHByb2R1Y3Qgb2YgdHdvIDMtZGlnaXQgbnVtYmVycy4K
*/

var isPalindrome = function (num) {
	var aux = num.toString();
	var crop = ((n = aux.length) % 2 == 0 ? n : --n) / 2 ;
	var aux = [aux.substr(0, n), aux.substr(n * -1)];
	var r = reverseIt(aux[1]);
	//
	return r == aux[0] ? true : false;
}

var reverseIt = function (t) {
	var r = '';
	for (n=0; n<=t.length; n++) r = t.substr(n, 1) + r;
	//
	return r;
}

var palindromes = function (ini, lim) {
	var list = [], x = y = ini, z = 0;
	do
	{
		do
		{
			if (isPalindrome(z = x * y)) list.push(z);
		} while(y++ <= lim);
		y = ini;
	} while (x++ <= lim);
	//
	return list.sort(function (a, b) { return a - b; });
}
console.dir(palindromes(100, 999).pop());