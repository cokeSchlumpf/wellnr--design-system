import { LitElement, css, html } from 'lit';
import { dedent } from '../../../directives/dedent.js';

export class WPre extends LitElement {

    static styles = css`
        :host {
            display: block;
            background-color: var(--w-pre--background-color);
        }

        pre {
            padding: var(--w-pre--padding);
            font-family: var(--w-pre--font-family);
            font-size: var(--w-pre--font-size);
            color: var(--w-pre--color);

            margin: 0;
        }
    `

    static properties = {
        content: {
            type: String,
            help: "Attribute to pass the content of the attribute"
        }
    };

    constructor() {
        super();
        this.content = undefined;
    }

    render() {
        let content = this.content ? this.content : this.innerHTML;
        content = dedent(content);

        return html`
            <pre><code>${content}</code></pre>
        `
    }

}

customElements.define('w-pre', WPre);