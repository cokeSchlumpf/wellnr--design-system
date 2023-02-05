import { LitElement, css, html } from 'lit';

export class WPane extends LitElement {

    static tagName = "w-pane";

    static styles = css`
        :host {
            display: block;
            border-radius: var(--w-pane--border-radius);
            overflow: hidden;
        }
        
        :host([spacing="s"]) {
            padding: var(--w-pane--spacing-s--padding);
        }

        :host([spacing="m"]) {
            padding: var(--w-pane--spacing-m--padding);
        }

        :host([elevation="s"]) {
            border: var(--w-pane--elevation-s--border-width) solid var(--w-pane--elevation-s--border-color);
        }
    `;

    static properties = {
        elevation: { 
            type: String,
            help: "Indicates how much the pane should look 'elevated'. Possible values are `none`, `s` and `m`."
        },

        spacing: {
            type: String,
            help: "The spacing of the inner content to the border of the pane (padding). Possible values are `none`, `s` and `m`."
        }
    }

    constructor() {
        super();
        this.elevation = "none";
        this.spacing = "none";
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

}

customElements.define('w-pane', WPane);