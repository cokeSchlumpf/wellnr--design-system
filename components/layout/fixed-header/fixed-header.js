import {LitElement, css, html} from '/libs/lit-core.min.js';

export class WFixedHeader extends LitElement {
    static styles = css`
        :host { 
            min-height: 100vh;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        ::slotted(header) {
            position: sticky;
            top: 0;
            background-color: var(--primary-color);
            overflow: auto;

            flex-grow: 0;
        }

        main {
            flex-grow: 1;

            display: flex;
            dlex-direction: row;
            justify-content: flex-start;

            background-color: #ff0000;
        }

        ::slotted(nav) {
            flex-grow: 0;
            background-color: #ffff00;
        }

        ::slotted(article) {
            flex-grow: 1;
            background-color: #ff00ff;
        }

        ::slotted(aside) {
            flex-grow: 0;
            background-color: #00ff00;
        }
      
        ::slotted(footer) {
            background-color: var(--muted-color);
            overflow: auto;

            margin-top: auto;
            flex-grow: 0;
        }
    `

    render() {
        return html`
            <slot name="header"></slot>
            
            <main>
                <slot name="nav"></slot>
                <slot name="article"></slot>
                <slot name="aside"></slot>
            </main>

            <slot name="footer"></slot>
        `
    }
}

customElements.define('w-fixed-header', WFixedHeader);