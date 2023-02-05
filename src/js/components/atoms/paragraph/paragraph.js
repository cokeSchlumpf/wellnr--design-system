import { LitElement, css, html } from 'lit';


export class WParagraph extends LitElement {

    static tagName = "w-paragraph";

    static styles = css`
        .size-100 {
            
        }
    `;

    static properties = {
        
    };

    constructor() {
        super();
        this.is = "h1";
    }

    render() {
        return html`<p><slot></slot></p>`;
    }

}

customElements.define('w-p', WParagraph);