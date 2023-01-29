import { LitElement, css } from '/libs/lit-core.min.js';
import { markdown } from '/directives/markdown.js';
import { dedent } from '/directives/dedent.js';


export class WMarkdown extends LitElement {

    static styles = css`

    `;

    constructor() {
        super();
    }

    render() {
        var wrapper = document.createElement('div');
        wrapper.innerHTML= markdown(dedent(this.innerHTML));
        return Array.from(wrapper.childNodes);
    }

}

customElements.define('w-markdown', WMarkdown);