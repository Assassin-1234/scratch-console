const OriginalArray = ['⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜'];
const indices: number[] = [];
const InvisibleArray = OriginalArray.slice();
const readline = require('readline');

(async () => {
	async function askQuestion(query: string) {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		return new Promise((resolve) => rl.question(query, async (ans: unknown) => {
			rl.close();
			if(!ans) ans = await askQuestion(query);

			resolve(ans);
		}));
	}
	async function logChunks(array: any) {
		for (let i = 0; i < array.length; i += 4) {
			const chunk = array.slice(i, i + 4);
			console.log(chunk);
		}
	}
	function randomNumber(min: number = 0, max: number = 15) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	// 💎 🏆 🎀
	async function GenerateBoxes() {
		while(indices.length !== 6) {
			const num = await randomNumber();
			if(indices.includes(num)) {
				continue;
			}
			else {
				indices.push(num);
			}
		}
		for(let i = 0; i < 6; i++) {
			if(i == 0) {
				OriginalArray[indices[i]] = '💎';
			}
			if([1, 2].includes(i)) {
				OriginalArray[indices[i]] = '🏆';
			}
			if([3, 4, 5].includes(i)) {
				OriginalArray[indices[i]] = '🎀';
			}
		}
		for(let i = 0; i < 5; i++) {
			logChunks(InvisibleArray);
			let answer:any = await askQuestion('choose index out of 16: ')
			answer = parseInt(answer) - 1; // because index start from 0
			InvisibleArray[answer] = OriginalArray[answer];
		}
		const result = InvisibleArray.filter(async (x) => {
			return x !== '⬜';
		});

		result.forEach(em => {
			if(em == '🎀') {
				// add points
			}
			if(em == '🎀') {
				// add points
			}
			if(em == '🎀') {
				// add points
			}
		})
	}
	GenerateBoxes();
})();