#!/usr/bin/node
/*
VGhlIHN1bSBvZiB0aGUgc3F1YXJlcyBvZiB0aGUgZmlyc3QgdGVuIG5hdHVyYWwgbnVtYmVycyBp
cywKCjHCsiArIDLCsiArIC4uLiArIDEwwrIgPSAzODUKVGhlIHNxdWFyZSBvZiB0aGUgc3VtIG9m
IHRoZSBmaXJzdCB0ZW4gbmF0dXJhbCBudW1iZXJzIGlzLAoKKDEgKyAyICsgLi4uICsgMTApwrIg
PSA1NcKyID0gMzAyNQpIZW5jZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBzdW0gb2YgdGhl
IHNxdWFyZXMgb2YgdGhlIGZpcnN0IHRlbiBuYXR1cmFsCm51bWJlcnMgYW5kIHRoZSBzcXVhcmUg
b2YgdGhlIHN1bSBpcyAzMDI1IC0gMzg1ID0gMjY0MC4KCkZpbmQgdGhlIGRpZmZlcmVuY2UgYmV0
d2VlbiB0aGUgc3VtIG9mIHRoZSBzcXVhcmVzIG9mIHRoZSBmaXJzdCBvbmUgaHVuZHJlZApuYXR1
cmFsIG51bWJlcnMgYW5kIHRoZSBzcXVhcmUgb2YgdGhlIHN1bS4K
*/

(function () {
	var squares = 0, numbers = 0, n;
	//
	for (n = 1; n <= 100; n++) {
		squares += Math.pow(n, 2);
		numbers += n;
	}
	console.log(squares, numbers = Math.pow(numbers, 2), numbers - squares);
})();