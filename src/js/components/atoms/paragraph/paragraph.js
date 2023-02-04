import { LitElement, css, html } from 'lit';


export class WParagraph extends LitElement {

    static styles = css`
        .size-100 {
            
        }
    `;

    static properties = {
        is: { 
            type: String,
            help: "The type of the tag. Possible values are `h1`, `h2`, `h3`, `h4`, `h5` or `h6`. Default is `h1`."
        }
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