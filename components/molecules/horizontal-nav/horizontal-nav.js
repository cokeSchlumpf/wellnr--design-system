import {LitElement, css, html} from '/libs/lit-core.min.js';
import {classnames} from '/directives/classnames.js';

export class WHorizontalNav extends LitElement {
    static styles = css`
        :host {
            display: block;
        }

        nav {
            display: flex;

            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            height: 100%;
        }

        nav ::slotted(a) {
            display: inline-block;
            margin-right: var(--w-spacing-xl);

            text-decoration: none;
            transition: all 300ms linear;
        }

        nav.contrast ::slotted(a) {
            color: var(--w-horizontal-nav--contrast--color);
        }

        nav.contrast ::slotted(a:hover) {
            color: var(--w-horizontal-nav--contrast--hover--color);
        }

        nav.contrast ::slotted(a:active),
        nav.contrast ::slotted(a.w-active) {
            color: var(--w-horizontal-nav--contrast--active--color);
        }

        nav.shaded ::slotted(a) {
            color: var(--w-horizontal-nav--shaded--color);
        }

        nav.shaded ::slotted(a:hover) {
            color: var(--w-horizontal-nav--shaded--hover--color);
        }

        nav.shaded ::slotted(a:active),
        nav.shaded ::slotted(a.w-active) {
            color: var(--w-horizontal-nav--shaded--active--color);
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
            <nav
                class=${classnames({ 
                    [this.appearance]: true
                })}>

                <slot name="item"></slot>
            </nav>
        `
    }
}

customElements.define('w-horizontal-nav', WHorizontalNav);