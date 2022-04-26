class genshinButton extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <style>
            .btn {
                position: fixed;
                bottom: 20px;
                right: 15px;
                width: 90px;
                padding: 15px;
                border-radius: 4px;
                z-index: 1;
                font-size: 18px;
                border: none;
                background-color: rgb(65, 65, 65, 0.4);
                color: white;
                cursor: pointer;
                transition: 0.4s;
                text-align: center;
                text-decoration: none;
            }

            .btn:hover {
                background-color: rgb(65, 65, 65);
            }

            @media screen and (max-width: 1100px) {
                .btn {
                    width: 150px;
                }
            }

            @media screen and (max-width: 800px) {
                .btn {
                    width: 70px;
                    box-sizing: border-box;
                    background-color: rgb(65, 65, 65, 0.4);
                }
            }
        </style>
        
        <a href="#" class="btn"><i class="fa-solid fa-arrow-up"></i></a>
        `;
	}
}

customElements.define("button-up", genshinButton);
