// const fs = require("node:fs")
// import fs from "node:fs";
const fs = require("node:fs");
const challenges = require("./challenges.json");
// import challenges from "./challenges.json";

const list = {};

function generateList() {
	for (const challenge in challenges) {
		const currentChallenge = challenges[challenge];
		const dataStructure = currentChallenge.category;
		const difficulty = currentChallenge.difficulty;
		const title = currentChallenge.title;
		if (dataStructure in list) {
			if (difficulty in list[dataStructure]) {
				list[dataStructure][difficulty] = [...list[dataStructure][difficulty], [title, difficulty, dataStructure]];
			} else {
				list[dataStructure][difficulty] = [[title, difficulty, dataStructure]];
			}
		} else {
			list[dataStructure] = {};
			list[dataStructure][difficulty] = [[title, difficulty, dataStructure]];
		}
		if ("All" in list[dataStructure]) {
			list[dataStructure].All = [...list[dataStructure].All, [title, difficulty, dataStructure]];
		} else {
			list[dataStructure].All = [[title, difficulty, dataStructure]];
		}
		// ----------------
		if ("All" in list) {
			if (difficulty in list.All) {
				list.All[difficulty] = [...list.All[difficulty], [title, difficulty, dataStructure]];
			} else {
				list.All[difficulty] = [[title, difficulty, dataStructure]];
			}
		} else {
			list.All = {};
			list.All[difficulty] = [[title, difficulty, dataStructure]];
		}
		if ("All" in list.All) {
			list.All.All = [...list.All.All, [title, difficulty, dataStructure]];
		} else {
			list.All.All = [[title, difficulty, dataStructure]];
		}
	}

	fs.writeFile("challengeList.json", JSON.stringify(list, null, 2), (err) => {
		if (err) throw err;
		// eslint-disable-next-line no-console
		console.log("El archivo ha sido guardado.");
	});
}

generateList();
