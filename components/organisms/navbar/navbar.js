import {LitElement, css, html} from '/libs/lit-core.min.js';
import { classnames } from '/directives/classnames.js';

export class WNavbar extends LitElement {
    static styles = css`
        :host { 
            display: block;
            margin: 0;
            padding: 0;
        }

        .container {
            padding: var(--w-navbar--horizontal-padding) var(--w-navbar--vertical-padding);
        }

        .container.contrast {
            background-color: var(--w-navbar--contrast--background-color);
        }
        
        .container.shaded {
            border-bottom: var(--w-navbar--shaded--border-bottom--width) solid var(--w-navbar--shaded--border-bottom--color);
        }
    `

    static properties = {
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast` and `shaded`."
        }
    };

    constructor() {
        super();

        this.appearance = "contrast";
    }

    render() {
        return html`
            <div 
                class=${classnames({ [this.appearance]: true, "container": true })}
            >
                Hello World!
            </div>
        `
    }
}

customElements.define('w-navbar', WNavbar);