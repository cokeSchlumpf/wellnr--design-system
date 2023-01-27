import {LitElement, css, html} from '/libs/lit-core.min.js';

export class WFixedHeader extends LitElement {
    static styles = css`
        :host { 
            min-height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        ::slotted(header) {
            position: sticky;
            top: 0;
            background-color: var(--primary-color);
            overflow: auto;
        }

        ::slotted(main) {
            margin-left: auto;
            margin-right: auto;
        }
      
        ::slotted(footer) {
            background-color: var(--muted-color);
            overflow: auto;

            margin-top: auto;
        }
    `

    render() {
        return html`
            <slot name="header"></slot>
            <slot name="main"></slot>
            <slot name="footer"></slot>
        `
    }
}

customElements.define('w-fixed-header', WFixedHeader);