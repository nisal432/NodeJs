

const sampleArr = [1, 2, 'a','B']
let check1
function convertNumberSystem(arr = [], radix = 10) {
	arr.forEach((val, i) => {
		if (typeof (val) === 'string') {
			switch (val) {
				case 'A':
				case 'a':
					arr[i] = 10
					break;
				case 'B':
				case 'b':
					arr[i] = 11
					break;
				case 'C':
				case 'c':
					arr[i] = 12
					break;
				case 'D':
				case 'd':
					arr[i] = 13
					break;
				case 'E':
				case 'e':
					arr[i] = 14
					break;

				default:
					arr[i] = 15
					break;
			}
		}
	})

	check1 = arr.reduce((acc, value, idx) => {
		return acc + value * Math.pow(radix, arr.length-idx-1)
	}, 0)
}
convertNumberSystem(sampleArr, 16)
console.log(check1);
//this function helps in converting any num to decimal num