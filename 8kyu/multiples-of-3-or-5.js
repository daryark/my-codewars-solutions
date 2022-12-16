//num that are can be % 3 || 5 === 0
// if num < 0 return 0

// if the num can be % 3 && 5 === 0, count only one

// function solution(number) {
// 	// return Array.from(Array(number).keys());
// 	return Array.from({ length: number }, (_, i) => i + 1);
// }

//c: My solution
// function solution(number) {
// 	const arr = [];
// 	for (let i = 0; i < number; i += 1) {
// 		arr.push(i);
// 	}
// 	console.log(arr);
// 	return arr.reduce((total, num) => (num % 3 === 0 || num % 5 === 0 ? total + num : total), 0);
// }

// console.log(solution(10));
