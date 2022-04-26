import "./character-card.js";

class CharaList extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}

	set character(character) {
		this._character = character;
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
			<style>
				:host {
					display: flex;
					flex-flow: row wrap;
					justify-content: center;
					padding: 1rem 6rem 1rem 6rem;
				}
			</style>
		`;
		this._character.forEach((character) => {
			const CharaCardElement = document.createElement("character-list");
			CharaCardElement.character = character;
			this.shadowDOM.appendChild(CharaCardElement);
		});
	}
}

customElements.define("character-card", CharaList);
