import {LitElement, css, html} from '/libs/lit-core.min.js';

export class WGrid extends LitElement {

    static styles = css`
        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: stretch;
            align-content: flex-start;
        }

        ::slotted(w-grid-1x) { 
            width: calc(100% / 16);
        }

        ::slotted(w-grid-2x) { 
            width: calc(100% / 8);
        }

        ::slotted(w-grid-4x) { 
            width: calc(100% / 4);
        }

        ::slotted(w-grid-8x) { 
            width: calc(100% / 2);
        }

        ::slotted(w-grid-16x) { 
            width: 100%;
        }
    `;
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <div>
            <slot></slot>
        </div>
      `;
    }

}

export class WGridBox extends LitElement {
    static styles = css`
        div {
            display: border-box;
            height: 100%;
            padding: var(--box--content-spacing);
        }
    `;

    constructor() {
        super();
      }
    
    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
}

export class WGridBox1x extends WGridBox {

}

export class WGridBox2x extends WGridBox {

}

export class WGridBox4x extends WGridBox {

}

export class WGridBox8x extends WGridBox {

}

export class WGridBox16x extends WGridBox {

}

  
customElements.define('w-grid', WGrid);
customElements.define('w-grid-1x', WGridBox1x);
customElements.define('w-grid-2x', WGridBox2x);
customElements.define('w-grid-4x', WGridBox4x);
customElements.define('w-grid-8x', WGridBox8x);
customElements.define('w-grid-16x', WGridBox16x);