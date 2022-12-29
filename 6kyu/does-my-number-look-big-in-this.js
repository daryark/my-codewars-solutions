//task A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
//f.e For example, take 153 (3 digits), which is narcisstic:
//f.e  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

//f.e and 1652 (4 digits), which isn't:
//f.e  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
//
//
//f.e The Challenge:
//f.e Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
//f.e Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// function narcissistic(value) {
// 	return (
// 		String(value)
// 			.split("")
// 			.reduce((acc, digit, i, arr) => (acc += Number(digit) ** arr.length), 0) === value
// 	);
// }

// console.log(narcissistic(153));
// console.log(narcissistic(1652));
