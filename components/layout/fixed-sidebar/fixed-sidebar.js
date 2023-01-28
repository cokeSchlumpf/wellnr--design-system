import {LitElement, css, html} from '/libs/lit-core.min.js';

export class WFixedSidebar extends LitElement {
    
    static styles = css`
        :host { 
            min-height: 100vh;

            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            padding: 30px 0;
        }

        ::slotted(header) {
            position: sticky;
            top: 0;
            background-color: var(--primary-color);
            overflow: auto;

            flex-grow: 0;
        }

        ::slotted(main) {
            margin-left: auto;
            margin-right: auto;

            flex-grow: 1;
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
            <w-grid class=">
                <w-grid-4x>
                    <slot name="nav"></slot>
                </w-grid-4x>

                <w-grid-8x>
                    <slot name="article"></slot>
                </w-grid-8x>

                <w-grid-4x>
                    <slot name="controls"></slot>
                </w-grid-4x>
            </w-grid>
        `
    }
}

customElements.define('w-fixed-sidebar', WFixedSidebar);