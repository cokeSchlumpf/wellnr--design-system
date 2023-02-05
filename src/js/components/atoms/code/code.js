import { LitElement, css, html } from 'lit';


export class WCode extends LitElement {

    static tagName = "w-code";

    static styles = css`
        code {
            display: inline-block;
            font-family: var(--w-font-family-mono);
            font-weight: var(--w-font-weight-mono-regular);
            font-size: var(--w-font-size-mono-400);
        
            background-color: var(--w-background-color-600);
            padding: 0 var(--w-spacing-100);

            border: var(--w-border-width--thin) solid var(--w-background-color-800);
            border-radius: var(--w-border-radius-100);
        }
    `;

    static properties = {

    };

    constructor() {
        super();
    }

    render() {
        return html`<code><slot></slot></code>`;
    }

}

customElements.define('w-code', WCode);