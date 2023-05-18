// function reverseVowels(str) {
// 	const vowels = ["a", "e", "u", "o", "y", "i", "A", "E", "U", "O", "Y", "U", "I"];
// 	const strVowels = [];

// 	for (let i of str) {
// 		let newStr;

// 		if (vowels.includes(i)) {
// 			strVowels.push(i);
// 		}
// 	}

// 	for (let i = 0; i < str.length; i += 1) {
// 		if (vowels.includes(str[i])) {
// 			let newStr =
// 				str.substring(0, i) + strVowels[strVowels.length - 1] + str.substring(i + 1, str.length);

// 			str = newStr;
// 			strVowels.pop();
// 		}
// 	}

// 	return str;
// }

// const reverseVowels = (str) => {
// 	let vowels = str.replace(/[^aeiou]/gi, "").split("");
// 	return str.replace(/[aeiou]/gi, (_) => vowels.pop());
// };

// console.log(reverseVowels("Hello!")); //"Hello!" => "Holle!"
// console.log(reverseVowels("Tomatoes")); //"Tomatoes" => "Temotaos"
// console.log(reverseVowels("Reverse Vowels In A String")); //"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// console.log(reverseVowels("Oh my goodness"));

// 1. find all vowels with includes method and push each to the new array
// 2.
