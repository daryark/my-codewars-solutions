//task Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.
// f.e. functions will take any number of arguments
//f.e Arrays of numbers can be to any depth
//f.e You can't use Math.max, Math.min, and require
//f.e If one of the arguments can not be evaluated to a number, return NaN

function max(...args) {
	return [...args].flatMap((i) => i).reduce((max, i) => (i > max ? (max = Number(i)) : max));
}

function min(...args) {
	return [...args].flatMap((i) => i).reduce((min, i) => (i < min ? (min = Number(i)) : min));
}

//----------------------------------------------------
console.log(max(1, 2, 3, 4)); //4
console.log(max(1, 2, 3, ["4"])); // 4 , not '4'
console.log(max(1, 2, [3, 4])); //4
// console.log(max(1, 2, [3, [4]])); //4
// console.log(max(1, 2, [3, ["4r"]])); // returns NaN
// console.log(max([[], [-4]])); // -4
// console.log(max()); // 0
// console.log(max([])); // 0
//----------------------------------------------------
console.log(min(1, 2, 3, 4)); //1
console.log(min([1, 2], 3, 4), 1); // 1
console.log(1, 2, [3, [4, 0]]); //0 .//??how to make deep flat for this one
