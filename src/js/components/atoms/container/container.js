import {LitElement, css, html} from 'lit';

export class WContainer extends LitElement {

    static tagName = "w-container";

    static styles = css`
        :root {
            display: block;
            width: 100%;
            
            margin-left: var(--w-container--spacing);
            margin-right: var(--w-container--spacing);

            font-family: var(--font-family);
            box-sizing: border-box;
        }

        @media (min-width: 576px) {
            :root {
                max-width: 510px;
                padding-right: 0;
                padding-left: 0;
            }
        }

        @media (min-width: 768px) {
            :root {
                max-width: 700px;
            }
        }

        @media (min-width: 992px) {
            :root {
                max-width: 920px;
            }
        }

        @media (min-width: 1200px) {
            :root {
                max-width: 1130px;
            }
        }
    `;

    static properties = {
        fluid: { 
            type: String,
            help: "If set, the container will take the whole display width (except on large screens)."
        }, 
    };
  
    constructor() {
      super();
    }
  
    render() {
        return html`
            <slot></slot>
        `;
    }

}
  
customElements.define('w-container', WContainer);