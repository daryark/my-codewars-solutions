// var summation = function (num) {
// 	let total = 0;
// 	for (let i = 1; i <= num; i += 1) {
// 		total += i;
// 	}
// 	return total;
// };

//refactor (variant with recursion)
//if num(the biggest number, ending num) is not 1, then we sum it with previous one (num-1) and finally we go lower until 1 (one has no prev number and it's start), so we go out of this function(because recursion stop call the function itself again, stop doing this)👉 num + summation(num - 1)

// var summation = function (num) {
// 	return num === 1 ? 1 : num + summation(num - 1);
// };
//
// var summation = function (num) {
// 	return num > 1 ? num + summation(num - 1) : num;
// };
