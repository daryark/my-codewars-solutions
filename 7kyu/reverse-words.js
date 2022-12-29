//task Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//f.e "This is an example!" ==> "sihT si na !elpmaxe"
//f.e "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
// 	return str
// 		.split(" ")
// 		.map((word) => {
// 			let reverseWord = [];
// 			for (let i = word.length - 1; i >= 0; i -= 1) {
// 				reverseWord.push(word[i]);
// 			}
// 			return reverseWord.join("");
// 			console.log(reverseWord.join(""));
// 		})
// 		.join(" ");
// }

//refactor
// function reverseWords(str) {
// 	return str
// 		.split(" ")
// 		.map((word) => word.split("").reverse().join(""))
// 		.join(" ");
// }

// console.log(reverseWords("This is an example!"));
