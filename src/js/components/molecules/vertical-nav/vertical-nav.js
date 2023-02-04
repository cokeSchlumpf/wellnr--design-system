import {LitElement, css, html} from 'lit';
import {classnames} from '../../../directives/classnames.js';

export class WVerticalNav extends LitElement {
    static styles = css`
        :host {
            display: block;
        }

        nav {
            display: flex;

            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }

        nav ::slotted(h3) {
            margin: 0;
            padding: 0;
        }

        nav ::slotted(a) {
            display: block;
            width: 100%;
            margin-bottom: var(--w-spacing-200);

            text-decoration: none;
            transition: all 300ms linear;
        }

        nav.contrast ::slotted(a) {
            color: var(--w-vertical-nav--contrast--color);
        }

        nav.contrast ::slotted(a:hover) {
            color: var(--w-vertical-nav--contrast--hover--color);
        }

        nav.contrast ::slotted(a:active),
        nav.contrast ::slotted(a.w-active) {
            color: var(--w-vertical-nav--contrast--active--color);
        }

        nav.shaded ::slotted(a) {
            color: var(--w-vertical-nav--shaded--color);
        }

        nav.shaded ::slotted(a:hover) {
            color: var(--w-vertical-nav--shaded--hover--color);
        }

        nav.shaded ::slotted(a:active),
        nav.shaded ::slotted(a.w-active) {
            color: var(--w-vertical-nav--shaded--active--color);
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

export class WVerticalNavTitle extends LitElement {

    render() {
        return html`<h3><slot></slot></h3>`;
    }

}

customElements.define('w-vertical-nav', WVerticalNav);
customElements.define('w-vertical-nav--title', WVerticalNavTitle);