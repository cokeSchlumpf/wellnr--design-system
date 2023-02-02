import { LitElement, css, html } from '/libs/lit-core.min.js';
import { classnames } from '/directives/classnames.js';

export class WPane extends LitElement {

    static styles = css`
        :host {
            display: block;   
        }
        
        :host([spacing="s"]) {
            padding: var(--w-pane--spacing-s--padding);
        }

        :host([spacing="m"]) {
            padding: var(--w-pane--spacing-s--padding);
        }

        :host([elevation="500"]) {
            border: var(--w-pane--elevation-500--border-width) solid var(--w-pane--elevation-500--border-color);
        }
    `;

    static properties = {
        elevation: { 
            type: Number,
            help: "Indicates how much the pane should look 'elevated'. Possible values are `400`, `500` and `600`. Default is `500` which means no elevation."
        },
        spacing: {
            type: String,
            help: "The spacing of the inner content to the border of the pane (padding). Possible values are `none`, `s` and `m`."
        }
    }

    constructor() {
        super();
        this.elevation = 500;
        this.spacing = "none";
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

}

customElements.define('w-pane', WPane);