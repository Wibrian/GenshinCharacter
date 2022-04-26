class genshinNav extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                }
            
                :host {
                    display: block;
                    padding: 1rem 6rem 1rem 6rem;
                    background-color: rgb(65, 65, 65);
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
                    color: white;
                }

                @media screen and (max-width: 800px) {
                    :host {
                        padding: 1rem 0 1rem 0;
                        text-align: center;
                    }
                }
            </style>
            
            <h1>Genshin Impact Characters</h1>
        `;
	}
}

customElements.define("genshin-navbar", genshinNav);
