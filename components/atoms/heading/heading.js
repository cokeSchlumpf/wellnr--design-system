import { LitElement, css, html } from '/libs/lit-core.min.js';
import { classnames } from '/directives/classnames.js';


export class WHeading extends LitElement {

    static styles = css`
        .size-100 {
            font-size: var(--w--heading--size-100--font-size);
            margin: var(--w--heading--size-100--margin-top) 0 0 0;
        }

        .size-200 {
            font-size: var(--w--heading--size-200--font-size);
            margin: var(--w--heading--size-200--margin-top) 0 0 0;
        }

        .size-300 {
            font-size: var(--w--heading--size-300--font-size);
            margin: var(--w--heading--size-300--margin-top) 0 0 0;
        }

        .size-400 {
            font-size: var(--w--heading--size-400--font-size);
            margin: var(--w--heading--size-400--margin-top) 0 0 0;
        }

        .size-500 {
            font-size: var(--w--heading--size-500--font-size);
            margin: var(--w--heading--size-500--margin-top) 0 0 0;
        }

        .size-600 {
            font-size: var(--w--heading--size-600--font-size);
            margin: var(--w--heading--size-600--margin-top) 0 0 0;
        }

        .size-700 {
            font-size: var(--w--heading--size-700--font-size);
            margin: var(--w--heading--size-700--margin-top) 0 0 0;
        }

        .size-800 {
            font-size: var(--w--heading--size-800--font-size);
            margin: var(--w--heading--size-800--margin-top) 0 0 0;
        }

        .size-900 {
            font-size: var(--w--heading--size-900--font-size);
            margin: var(--w--heading--size-900--margin-top) 0 0 0;
        }
    `;

    static properties = {
        is: { 
            type: String,
            help: "The type of the tag. Possible values are `h1`, `h2`, `h3`, `h4`, `h5` or `h6`. Default is `h1`."
        },
        size: {
            type: Number,
            help: "The size of the heading. Possible values are `100`, `200`, `300`, `400`, `500`, `600`, `800`, or `900`. If not set, the size will be derived based on `is`."
        }
    };

    constructor() {
        super();
        this.is = "h1";
    }

    _getCalculatedSize() {
        if (this.size) {
            return this.size;
        } else if (this.is == "h1") {
            return 800;
        } else if (this.is == "h2") {
            return 600;
        } else if (this.is == "h3") {
            return 500;
        } else if (this.is == "h4") {
            return 400;
        } else if (this.is == "h5") {
            return 300;
        } else if (this.is == "h6") {
            return 200;
        } else {
            return 400;
        }
    }

    render() {
        const heading = document.createElement(this.is);
        heading.className = classnames({ ["size-" + this._getCalculatedSize()]: true });
        heading.innerHTML = "<slot></slot>";
        
        return heading;
    }

}

customElements.define('w-heading', WHeading);