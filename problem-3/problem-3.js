#!/usr/bin/node
/*
VGhlIHByaW1lIGZhY3RvcnMgb2YgMTMxOTUgYXJlIDUsIDcsIDEzIGFuZCAyOS4KCldoYXQgaXMg
dGhlIGxhcmdlc3QgcHJpbWUgZmFjdG9yIG9mIHRoZSBudW1iZXIgNjAwODUxNDc1MTQzID8K
*/

var primes = function (to) {
	var list = [2, 3, 5, 7, 11, 13], is_prime = true, divisors = [];
	for (n = 2; n <= to; n++)
	{
		is_prime = true;
		for (i in list)
		{
			if (n % list[i] == 0)
			{
				is_prime = false;
				break;
			}
		}
		if (is_prime)
		{
			list.push(n);
			if (to % n == 0)
			{
				divisors.push(n);
				console.log(n, "é primo divisor de", to);
			}
		}
	}
	return list;
}
console.dir(primes(600851475143));