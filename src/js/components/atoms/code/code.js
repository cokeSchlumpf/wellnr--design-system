import { LitElement, css, html } from 'lit';


export class WCode extends LitElement {

    static tagName = "w-code";

    static styles = css`
        code {
            display: inline-block;
            font-family: var(--w-code--font-family);
            font-weight: var(--w-code--font-weight);
            font-size: var(--w-code--font-size);
        
            background-color: var(--w-code--background-color);
            padding: var(--w-code--padding);

            border: var(--w-code--border);
            border-radius: var(--w-code--border-radius);
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