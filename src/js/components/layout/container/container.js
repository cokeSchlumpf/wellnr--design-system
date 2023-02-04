import {LitElement, css, html} from 'lit';

export class WContainer extends LitElement {

    static styles = css`
        div.container,
        div.container-fluid {
            width: 100%;
            margin-right: auto;
            margin-left: auto;
            padding-right: var(--container--content-spacing);
            padding-left: var(--container--content-spacing);

            font-family: var(--font-family);
            box-sizing: border-box;
        }

        @media (min-width: 576px) {
            div.container {
                max-width: 510px;
                padding-right: 0;
                padding-left: 0;
            }
        }

        @media (min-width: 768px) {
            div.container {
                max-width: 700px;
            }
        }

        @media (min-width: 992px) {
            div.container {
                max-width: 920px;
            }
        }

        @media (min-width: 1200px) {
            div.container {
                max-width: 1130px;
            }
        }
    `;

    static properties = {
      fluid: false
    };
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <div class="${this.fluid ? 'container-fluid' : 'container'}">
            <slot></slot>
        </div>
      `;
    }

}
  
customElements.define('w-container', WContainer);