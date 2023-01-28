import {LitElement, css, html} from '/libs/lit-core.min.js';
import { classnames } from '/directives/classnames.js';

export class WBrand extends LitElement {
    static styles = css`
        a {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            text-decoration: none;            
            transition: all 300ms linear;

            margin: 0;
            padding: 0;
        }

        a.contrast {
            color: var(--w-brand--contrast--color);
        }

        a.contrast:hover {
            color: var(--w-brand--contrast--hover--color);
        }

        a.shaded {
            color: var(--w-brand--shaded--color);
        }

        a.shaded:hover {
            color: var(--w-brand--shaded--hover--color);
        }

        img {
            height: var(--w-brand--logo--height);
            margin-right: var(--w-brand--logo--margin-right);
        }

        span {
            display: block;
        }

        span.brand {
            font-weight: var(--w-brand--font-weight);
        }
    `

    static properties = {
        app: { 
            type: String,
            help: "The name of the application."
        },
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast` and `shaded`."
        },
        brand: { 
            type: String,
            help: "The name of the brand."
        },
        href: {
            type: String,
            help: "The target location when pressing the brand. Usually home page. Default is `/`."
        },
        logo: { 
            type: String,
            help: "Optional. The URL of a logo to be displayed."
        }
    };

    constructor() {
        super();
        this.brand = "";
        this.app = "";
        this.logo = "";
        this.appearance = "contrast";
        this.href = "/";
    }

    render() {
        return html`
            <a 
                href="${this.href}"
                class=${classnames({ [this.appearance]: true })}>
                    <img src="${this.logo}" />
                    <span class="brand">${this.brand}&nbsp;</span><span class="app">${this.app}</span>
            </a>
        `
    }
}

customElements.define('w-brand', WBrand);