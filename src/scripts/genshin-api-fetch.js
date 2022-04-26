// const axios = require("axios");
import axios from "axios";
const baseURL = "https://genshinlist.com/api/characters";
// const baseURL = "https://api.genshin.dev/characters";

const mainElement = document.querySelector("main");
const genshinCard = document.querySelector("character-card");

axios
	.get(baseURL)
	.then((response) => {
		console.log(response.data);
		const characterData = response.data;
		genshinCard.character = characterData;
	})
	.catch((errorMessage) => {
		errorMessage = "The API didn't fetch or Not Found";
		console.log(errorMessage);
	});

mainElement.append(genshinCard);

document.body.appendChild(mainElement);
