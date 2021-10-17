class HeroElement extends HTMLElement {

	constructor() {
		super();
		this.shadowDOM = this.attachShadow({mode: "open"});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			:host {
				display: flex;
				align-items: center;
				min-height: 380px;
				width: 100%;
				text-align: center;
				background-image: url("./images/heros/hero-image_1.jpg");
				background-position: center;
				background-color: yellow;
			}

			.hero__inner {
				margin: 0 auto;
				max-width: 800px;
			}

			.hero__inner > h1 {
				color: #fff;
				font-weight: 500;
				font-size: 36px;
			}

			.hero__inner > p {
				color: #fff;
				margin-top: 16px;
				font-size: 18px;
				font-weight: 300;
			}
		</style>
		<div class="hero__inner">
			<h1>Pecel Lele H. Weskar</h1>
			<p>The first Michelin Star Pecel Lele outlet in South East Asia</p>
		</div>
		`;
	}
}

customElements.define("hero-element", HeroElement);
