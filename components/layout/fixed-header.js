import {LitElement, css, html} from '/libs/lit-core.min.js';

export class WFixedHeader extends LitElement {
    static styles = css`
        ::slotted(header) {
            position: sticky;
            top: 0;
            background-color: #f5f5f5;
            overflow: auto;
        }

        ::slotted(main) {
            width: 300px;
            margin: auto;
        }
      
        ::slotted(footer) {
            background-color: #f5f5f5;
            overflow: auto;
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