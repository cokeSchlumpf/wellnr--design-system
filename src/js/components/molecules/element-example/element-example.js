import {LitElement, css, html} from 'lit';

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
            <w-pane elevation="s">
                <w-pane spacing="s">
                    <slot></slot>
                </w-pane>

                ${ this.preview ? html`<w-pre content="${this.innerHTML}"></w-pre>` : html`` }
            </w-pane>
            <div style="height: var(--w-spacing-100)"></div>
            <w-button size="s" appearance="link" @click="${this._bttShowCode_onClick}">${ this.preview ? 'Hide code' : 'Show code' }</w-button>
        `
    }

}

customElements.define('w-element-example', WElementExample);