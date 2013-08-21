#!/usr/bin/node
/*
SWYgd2UgbGlzdCBhbGwgdGhlIG5hdHVyYWwgbnVtYmVycyBiZWxvdyAxMCB0aGF0IGFyZSBtdWx0
aXBsZXMgb2YgMyBvciA1LCB3ZSBnZXQgMywgNSwgNiBhbmQgOS4gVGhlIHN1bSBvZiB0aGVzZSBt
dWx0aXBsZXMgaXMgMjMuCgpGaW5kIHRoZSBzdW0gb2YgYWxsIHRoZSBtdWx0aXBsZXMgb2YgMyBv
ciA1IGJlbG93IDEwMDAuCg==
*/

var n = 0, sum = 0;
// --- Declaration and inicialization of variables

while (++n < 1000) {
	sum += n % 3 == 0 ? n : (n % 5 == 0 ? n : 0);
}
// --- While we're below 1000 take the numbers multiples of 3 and 5 and sum..

console.log(sum);
// --- Display the result (: