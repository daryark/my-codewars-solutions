function getCount(str) {
	const vowels = ["a", "e", "i", "o", "u"];
	return str.split("").reduce((acc, i) => (vowels.includes(i) ? acc + 1 : acc), 0);
}

console.log(getCount("abracadabra"));
