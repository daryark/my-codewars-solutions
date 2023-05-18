//C: super non optimal, but done task

// function setReducer(input) {
// 	let prev;
// 	let sameCount = 1;

// 	function reducerFn(input) {
// 		input = input.reduce((acc, num, idx) => {
// 			if (idx === 0) {
// 				prev = num;
// 				return acc;
// 			}
// 			if (idx === input.length - 1) {
// 				if (prev === num) {
// 					sameCount += 1;
// 					return [...acc, sameCount];
// 				} else {
// 					return [...acc, sameCount, 1];
// 				}
// 			}
// 			if (num === prev) {
// 				sameCount += 1;
// 				return acc;
// 			}
// 			prev = num;
// 			let res = [...acc, sameCount];
// 			sameCount = 1;
// 			return res;
// 		}, []);

// 		sameCount = 1;
// 		prev = undefined;

// 		return input;
// 	}

// 	console.log(input);

// 	while (input.length !== 1) {
// 		input = reducerFn(input);
// 		console.log(input);
// 	}

// 	return Number(input);
// }

// setReducer([
// 	0, 0, 4, 6, 6, 8, 8, 5, 7, 7, 8, 8, 8, 9, 8, 8, 0, 0, 4, 6, 6, 8, 8, 5, 7, 7, 8, 8, 8, 9, 8, 8, 7,
// 	7, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 4, 6, 6, 8, 0, 0, 4, 6, 6, 8, 8, 5, 7, 7, 8, 8, 8, 9, 8, 8, 7, 7,
// 	0, 0, 0, 8, 5, 7, 7, 8, 8, 8, 9, 8, 0, 0, 4, 6, 6, 8, 8, 5, 7, 7, 8, 8, 8, 9, 8, 8, 7, 7, 0, 0, 0,
// 	8, 7, 7, 0, 0, 0, 0, 0, 4, 6, 6, 8, 8, 5, 7, 7, 8, 8, 8, 9, 8, 8, 7, 7, 0, 0, 0, 0, 0, 4, 6, 6, 8,
// 	8, 5, 7, 7, 8, 8, 8, 9, 8, 8, 7, 7, 0, 0, 0,
// ]);
// const obj1 = { x: 10 };

// console.log(Object.create(obj1));
// const foo = {
// 	x: 2,
// 	baz: {
// 		x: 1,
// 		bar: function () {
// 			return this.x;
// 		},
// 	},
// };

// var go = foo.baz.bar;

// console.log(go());
// alert(foo.baz.bar());
