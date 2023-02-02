import {LitElement, css, html} from '/libs/lit-core.min.js';

export class WElementExample extends LitElement {

    static styles = css`
        
    `

    static properties = {
        preview: {
            type: Boolean,
            help: "If true, the code of the example will be displayed."
        }
    };

    constructor() {
        super();
        this.preview = false;
    }

    _bttShowCode_onClick() {
        this.preview = !this.preview;
    }

    render() {
        return html`
            <w-pane elevation="500">
                <w-pane spacing="s">
                    <slot></slot>
                </w-pane>

                ${ this.preview ? html`<w-pre content="${this.innerHTML}"></w-pre>` : html`` }
            </w-pane>

            <w-button label="${ this.preview ? 'Hide code' : 'Show code' }" size="sm" @click="${this._bttShowCode_onClick}"></w-button>
        `
    }

}

customElements.define('w-element-example', WElementExample);