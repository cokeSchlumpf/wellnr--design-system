import {LitElement, css, html} from 'lit';
import { classnames } from '../../../directives/classnames.js';

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
        }

        nav {
            flex-grow: 0;
            margin: var()
            display: flex;
        }

        nav ::slotted(*) {
            flex-grow: 1;
            height: 100%;
        }

        article {
            flex-grow: 1;
            max-width: var(--w-fixed-header--article-max-width);
        }

        article.spacing-s {
            margin: var(--w-fixed-header--spacing-s--horizontal-spacing) var(--w-fixed-header--spacing-s--vertical-spacing);
        }

        article.spacing-m {
            margin: var(--w-fixed-header--spacing-m--horizontal-spacing) var(--w-fixed-header--spacing-m--vertical-spacing);
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

    static properties = {
        spacing: {
            type: String,
            help: "Specifies spacings (margins, paddings, ...). Possible values are `s`, `m` and `none`."
        }
    };

    constructor() {
        super();
        this.spacing = "s";
    }


    render() {
        return html`
            <header>
                <slot name="header"></slot>
            </header>
            
            <main>
                <nav>
                    <slot name="nav"></slot>
                </nav>

                <article 
                    class=${classnames({["spacing-" + this.spacing]: true })}>

                    <slot name="article"></slot>
                </article>

                <aside
                    class=${classnames({["spacing-" + this.spacing]: true })}>

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