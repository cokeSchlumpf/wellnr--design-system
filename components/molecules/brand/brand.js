import {LitElement, css, html} from '/libs/lit-core.min.js';

export class WBrand extends LitElement {
    static styles = css`
        a {
            display: inline-flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            text-decoration: none;
            color: var(--primary-text-color);
            padding: var(--container--content-spacing);
            
            transition: all 300ms linear;
        }

        a:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        img {
            height: 35px;
            margin-right: var(--container--content-spacing);
        }

        div.brand {
            font-weight: bold;
        }
    `

    static properties = {
        brand: { type: String },
        app: { type: String },
        logo: { type: String }
    };

    constructor() {
        super();
        this.brand = ""
        this.app = ""
        this.logo = ""
    }

    render() {
        return html`
            <a href="/"><img src="${this.logo}" /><div class="brand">${this.brand}&nbsp;</div><div class="app">${this.app}</div></a>
        `
    }
}

customElements.define('w-brand', WBrand);