// function pickPeaks(arr) {
// 	const peaks = { pos: [], peaks: [] };
// 	let plateauIndex = -1;

// 	for (let i = 0; i < arr.length; i += 1) {
// 		const next = arr[i + 1];
// 		const prev = arr[i - 1];

// 		//Plateau start
// 		if (arr[i] === next) {
// 			if (plateauIndex === -1) {
// 				plateauIndex = i;
// 			}
// 			continue;
// 		}

// 		//Plateau end
// 		if (plateauIndex !== -1) {
// 			if (arr[i] > next && arr[i] > arr[plateauIndex - 1]) {
// 				peaks.pos.push(plateauIndex);
// 				peaks.peaks.push(arr[i]);
// 			}
// 			plateauIndex = -1;
// 			continue;
// 		}

// 		if (arr[i] > prev && arr[i] > next) {
// 			peaks.pos.push(i);
// 			peaks.peaks.push(arr[i]);
// 		}
// 	}
// 	return peaks;
// }

// console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])), //{ pos: [3, 7], peaks: [6, 3] };
// pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), //{ pos: [3, 7], peaks: [6, 3] };
// console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])); // {pos: [3, 7, 10], peaks: [6, 3, 2]};
//console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1])); //{ pos: [2, 4], peaks: [3, 2] };
// console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2])); // { pos: [2], peaks: [3] };
// pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]), //{ pos: [2], peaks: [3] };
// pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]), //{ pos: [2], peaks: [3] };
// console.log(pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]));
//	{ pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] };
// pickPeaks([]), //{ pos: [], peaks: [] };
// pickPeaks([1, 1, 1, 1]); //{ pos: [], peaks: [] };
