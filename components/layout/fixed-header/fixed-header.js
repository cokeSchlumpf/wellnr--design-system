import {LitElement, css, html} from '/libs/lit-core.min.js';

export class WFixedHeader extends LitElement {
    static styles = css`
        :host { 
            min-height: 100vh;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        header {
            position: sticky;
            top: 0;
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

        nav {
            flex-grow: 0;

            display: flex;
        }

        nav ::slotted(*) {
            flex-grow: 1;
        }

        article {
            flex-grow: 1;
            background-color: #ff00ff;
        }

        aside {
            flex-grow: 0;
            background-color: #00ff00;
        }
      
        footer {
            background-color: var(--muted-color);
            overflow: auto;

            margin-top: auto;
            flex-grow: 0;
        }
    `

    render() {
        return html`
            <header>
                <slot name="header"></slot>
            </header>
            
            <main>
                <nav>
                    <slot name="nav"></slot>
                </nav>

                <article>
                    <slot name="article"></slot>
                </article>

                <aside>
                    <slot name="aside"></slot>
                </aside>
            </main>

            <footer>
                <slot name="footer"></slot>
            </footer>
        `
    }
}

customElements.define('w-fixed-header', WFixedHeader);