import {LitElement, css, html} from '/libs/lit-core.min.js';

export class WGrid extends LitElement {

    static styles = css`
        :host {
            display: grid;
            grid-template-columns: var(--w-grid-template-columns);
        }

        ::slotted(w-grid-item) { grid-column-start: span 1; }
        ::slotted(w-grid-item[col="1"]) { grid-column-start: span 1; }
        ::slotted(w-grid-item[col="2"]) { grid-column-start: span 2; }
        ::slotted(w-grid-item[col="3"]) { grid-column-start: span 3; }
        ::slotted(w-grid-item[col="4"]) { grid-column-start: span 4; }
        ::slotted(w-grid-item[col="5"]) { grid-column-start: span 5; }
        ::slotted(w-grid-item[col="6"]) { grid-column-start: span 6; }
        ::slotted(w-grid-item[col="7"]) { grid-column-start: span 7; }
        ::slotted(w-grid-item[col="8"]) { grid-column-start: span 8; }
        ::slotted(w-grid-item[col="9"]) { grid-column-start: span 9; }
        ::slotted(w-grid-item[col="10"]) { grid-column-start: span 10; }
        ::slotted(w-grid-item[col="11"]) { grid-column-start: span 11; }
        ::slotted(w-grid-item[col="12"]) { grid-column-start: span 12; }
        ::slotted(w-grid-item[col="13"]) { grid-column-start: span 13; }
        ::slotted(w-grid-item[col="14"]) { grid-column-start: span 14; }
        ::slotted(w-grid-item[col="15"]) { grid-column-start: span 15; }
        ::slotted(w-grid-item[col="16"]) { grid-column-start: span 16; }

        @media screen and (min-width: 576px) {
            ::slotted(w-grid-item[sm="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[sm="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[sm="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[sm="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[sm="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[sm="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[sm="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[sm="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[sm="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[sm="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[sm="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[sm="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[sm="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[sm="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[sm="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[sm="16"]) { grid-column-start: span 16; }
        }

        @media screen and (min-width: 768px) {
            ::slotted(w-grid-item[md="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[md="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[md="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[md="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[md="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[md="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[md="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[md="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[md="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[md="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[md="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[md="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[md="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[md="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[md="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[md="16"]) { grid-column-start: span 16; }
        }

        @media screen and (min-width: 992px) {
            ::slotted(w-grid-item[lg="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[lg="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[lg="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[lg="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[lg="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[lg="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[lg="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[lg="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[lg="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[lg="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[lg="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[lg="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[lg="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[lg="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[lg="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[lg="16"]) { grid-column-start: span 16; }
        }

        @media screen and (min-width: 1200px) {
            ::slotted(w-grid-item[xl="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[xl="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[xl="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[xl="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[xl="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[xl="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[xl="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[xl="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[xl="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[xl="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[xl="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[xl="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[xl="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[xl="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[xl="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[xl="16"]) { grid-column-start: span 16; }
        }

        @media screen and (min-width: 1400px) {
            ::slotted(w-grid-item[xxl="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[xxl="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[xxl="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[xxl="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[xxl="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[xxl="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[xxl="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[xxl="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[xxl="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[xxl="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[xxl="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[xxl="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[xxl="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[xxl="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[xxl="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[xxl="16"]) { grid-column-start: span 16; }
        }

        @media screen and (min-width: 2600px) {
            ::slotted(w-grid-item[xxxl="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[xxxl="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[xxxl="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[xxxl="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[xxxl="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[xxxl="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[xxxl="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[xxxl="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[xxxl="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[xxxl="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[xxxl="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[xxxl="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[xxxl="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[xxxl="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[xxxl="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[xxxl="16"]) { grid-column-start: span 16; }
        }
    `;
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <slot></slot>
      `;
    }

}

export class WGridItem extends LitElement {
    static styles = css`
        
    `;

    static properties = {
        col: { 
            type: Number,
            help: "Number of column span for `max-width=None`. Default is `1`."
        },

        sm: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-sm)`."
        },

        md: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-md)`."
        },

        lg: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-lg)`."
        },

        xl: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-xl)`."
        },

        xxl: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-xxl)`."
        },

        xxxl: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-xxxl)`."
        }
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
  
customElements.define('w-grid', WGrid);
customElements.define('w-grid-item', WGridItem);