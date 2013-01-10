#!/usr/bin/node

/*
A palindromic number reads the same both ways. The largest palindrome made from
the product of two 2-digit numbers is 9009 = 91 99.

Find the largest palindrome made from the product of two 3-digit numbers.
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