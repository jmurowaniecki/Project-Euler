#!/usr/bin/node
/*
VGhlIHNlcXVlbmNlIG9mIHRyaWFuZ2xlIG51bWJlcnMgaXMgZ2VuZXJhdGVkIGJ5IGFkZGluZyB0
aGUgbmF0dXJhbCBudW1iZXJzLgpTbyB0aGUgN3RoIHRyaWFuZ2xlIG51bWJlciB3b3VsZCBiZSAx
ICsgMiArIDMgKyA0ICsgNSArIDYgKyA3ID0gMjguIFRoZSBmaXJzdAp0ZW4gdGVybXMgd291bGQg
YmU6CgoxLCAzLCA2LCAxMCwgMTUsIDIxLCAyOCwgMzYsIDQ1LCA1NSwgLi4uCgpMZXQgdXMgbGlz
dCB0aGUgZmFjdG9ycyBvZiB0aGUgZmlyc3Qgc2V2ZW4gdHJpYW5nbGUgbnVtYmVyczoKCiAxOiAx
CiAzOiAxLDMKIDY6IDEsMiwzLDYKMTA6IDEsMiw1LDEwCjE1OiAxLDMsNSwxNQoyMTogMSwzLDcs
MjEKMjg6IDEsMiw0LDcsMTQsMjgKV2UgY2FuIHNlZSB0aGF0IDI4IGlzIHRoZSBmaXJzdCB0cmlh
bmdsZSBudW1iZXIgdG8gaGF2ZSBvdmVyIGZpdmUgZGl2aXNvcnMuCgpXaGF0IGlzIHRoZSB2YWx1
ZSBvZiB0aGUgZmlyc3QgdHJpYW5nbGUgbnVtYmVyIHRvIGhhdmUgb3ZlciBmaXZlIGh1bmRyZWQg
ZGl2aXNvcnM/Cg==
*/
(function twelve(limit) {
    var ini = new Date().getTime(), end = false, n = 0, triangularNumber = 0, totalDivisors = 0, divisors = function numberOfDivisors(number) {
        var numbers = 1, n, max = parseInt(number / 2, 10) + 1;
        for (n = 1; n < max; n++) {
            if (number % n === 0) {
                numbers++;
            };
        }
        return numbers;
    }
    while((totalDivisors = divisors(triangularNumber += ++n)) < limit);
    console.log("percorremos", n, "números triangulares para encontrar o primeiro divisivel por", limit, "ou mais números que é", triangularNumber, "tem", totalDivisors);
    end = new Date().getTime();
    console.log(arguments.callee.name, "on", (end - ini) / 1000, "seconds");
})(500);