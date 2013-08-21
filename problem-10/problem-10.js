#!/usr/bin/node
/*
VGhlIHN1bSBvZiB0aGUgcHJpbWVzIGJlbG93IDEwIGlzIDIgKyAzICsgNSArIDcgPSAxNy4KCkZp
bmQgdGhlIHN1bSBvZiBhbGwgdGhlIHByaW1lcyBiZWxvdyB0d28gbWlsbGlvbi4K
*/
(function () {
	var list = [2, 3, 5, 7, 11, 13], is_prime = true, i, m, n = 13, sum = 0, ini = new Date(), end = false, N = 1;
	//
	m = list.length
	for (i = 0; i < m; i++) {
		sum += list[i];
	}
	//
	while (N++ <= 2000000) {
		is_prime = true;
		m = list.length
		//
		for (i = 0; i < m; i++) {
			if (N % list[i] == 0) {
				is_prime = false;
				break;
			}
		}
		if (is_prime) {
			if (list.length < 10000)
			list.push(N);
			//console.log(N);
			sum += N;
		}
	}
	end = new Date();
	console.log(sum + ' in ' + (end.getTime() - ini.getTime()) + ' microsseconds.');
	//
})();