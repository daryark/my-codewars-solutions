// task Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// f.e.[true,  true,  true,  false, false, true,  false, true]

// const sheeps = [true, true, true, false, false, true, false, true];

// function countSheeps(arrayOfSheep) {
// 	let sheepsPresent = 0;
// 	for (const sheep of arrayOfSheep) {
// 		if (sheep) {
// 			sheepsPresent += 1;
// 		}
// 	}
// 	return sheepsPresent;
// }

//refactor
// function countSheeps(arrayOfSheep) {
// 	return arrayOfSheep.reduce((total, i) => (i > 0 ? total + 1 : total), 0);
// }

// countSheeps(sheeps);
