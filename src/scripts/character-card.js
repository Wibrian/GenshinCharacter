class CharaCard extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}

	set character(character) {
		this._character = character;
		this.render();
	}

	render() {
		let gender = "";
		if (this._character.gender == "male") {
			gender = `<b class="gender-male">&#9794;</b>`;
		} else if (this._character.gender == "female") {
			gender = `<b class="gender-female">&#9792;</b>`;
		}

		this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
            }

            :host {
                border-radius: 5px;
                margin: 0.6rem;
                transition : 0.4s;
            }

            :host(:hover) {
                border-radius: 5px;
                margin: 0.6rem;
                background-color: lightgrey;     
            }

            p {
                padding-bottom: 4px;
                font-size: larger;
                text-align: center;
            }
            
            .card-banner {
                position: relative;       
                margin: 0.4rem;
                width: 270px;
                height: 95vh;
                border-radius: 5px;
                padding: 4px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.35);
                background-color: white;
            }
            
            .title {
                text-align: center;
                padding: 0.4rem;
                margin: 4px;
                border-radius: 5px;
                background-color: rgb(128, 128, 128, 0.4);
            }
            
            .character-image {
                height: 270px;
                width: 100%;
                border-radius: 5px;
                object-fit: cover;
                object-position: top;
                background-color: rgb(128, 128, 128, 0.2);
            }

            .character-icon {
                position: absolute;
                top: 10px;
                left: 10px;
                width: 45px;
                
            }

            .star-yellow {
                color: rgb(235, 229, 52);
            }

            .gender-male {
                color: rgb(0, 157, 255);
            }

            .gender-female {
                color: rgb(255, 61, 177);
            }
            
            @media screen and (max-width: 1100px) {
                .card-banner {
                    height: 105vh;
                }
            }
        </style>

        <div class="card-banner">
            <img class="character-image" src="https://api.genshin.dev/characters/${this._character.slug}/icon-big" alt="Character" />
            <img class="character-icon" src="https://api.genshin.dev/elements/${this._character.vision}/icon" alt="vision"/>
            <section>
                <h2 class="title">${this._character.name}</h2>
                <p><b>Birthday</b> : ${this._character.birthday}</p>
                <p><b>Vision</b> : ${this._character.vision} </p>
                <p><b>Weapon</b> : ${this._character.weapon}</p>
                <p><b>Gender</b> : ${this._character.gender} <b>${gender}</b> </p>
                <p><b>Rarity</b> : <b class="star-yellow">&#9733;</b> ${this._character.rarity}</p>
                <p><b>Obtain</b> : ${this._character.obtain}</p>
                <h3 class="title">Description</h3>
                <p>${this._character.description}</p>
            </section>
        </div>
        `;
	}
}

customElements.define("character-list", CharaCard);
