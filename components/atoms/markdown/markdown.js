import { LitElement, css } from '/libs/lit-core.min.js';
import { markdown } from '/directives/markdown.js';
import { dedent } from '/directives/dedent.js';


export class WMarkdown extends LitElement {

    static styles = css`
        :host {
            display: block;
        }

        :host :first-child { 
            margin-top: 0;
        }

        :host :first-child {
            margin-bottom: 0;
        }

        :host([spacing="s"]) {
            margin-top: var(--w-markdown--spacing-s--margin-top);
            margin-bottom: var(--w-markdown--spacing-s--margin-bottom);
        }

        /*
         * Headings
         */
        h1, h2, h3, h4, h5, h6 {
            margin: 1.2em 0 1em 0;
        }
        
        h1 {
            font-size: var(--w-font-size-text-800);
            font-weight: var(--w-font-weight-text-semibold);
        }
        
        h2 {
            font-size: var(--w-font-size-text-600);
            font-weight: var(--w-font-weight-text-semibold);
        }
        
        h3 {
            font-size: var(--w-font-size-text-500);
            font-weight: var(--w-font-weight-text-semibold);
        }
        
        h4 {
            font-size: var(--w-font-size-text-400);
            font-weight: var(--w-font-weight-text-semibold);
        }
        
        h5 {
            font-size: var(--w-font-size-text-400);
            font-weight: var(--w-font-weight-text-semibold);
            color: var(--w-muted-color);
        }
        
        h6 {
            font-size: var(--w-font-size-text-400);
            font-weight: var(--w-font-weight-text-regular);
            color: var(--w-muted-color);
            text-decoration: underline;
            
        }
        
        /*
         * Text content
         */
        p {
            line-height: 1.5em;
        }
        
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
        
        section :first-child {
            margin-top: 0;
        }
    `;

    static properties = {
        spacing: {
            type: String,
            help: "The vertical spacing of the markdown block. Possible values are `none` and `s`."
        }
    };

    constructor() {
        super();
        this.spacing = "none";
    }

    render() {
        var wrapper = document.createElement('div');
        wrapper.innerHTML= markdown(dedent(this.innerHTML).replace(/<\!--.*?-->/g, ""));
        return Array.from(wrapper.childNodes);
    }

}

customElements.define('w-markdown', WMarkdown);