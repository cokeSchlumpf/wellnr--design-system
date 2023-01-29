import { LitElement, css, html } from '/libs/lit-core.min.js';
import { classnames } from '/directives/classnames.js';

export class WFooter extends LitElement {

    static styles = css`
        w-grid {
            margin: 0;
        }

        w-grid.contrast {
            background-color: var(--w-footer--contrast--background-color);
            color: var(--w-footer--contrast--color);
        }

        w-grid.light-contrast {
            background-color: var(--w-footer--light-contrast--background-color);
            color: var(--w-footer--light-contrast--color);
        }

        w-grid.shaded {
            border-top: var(--w-footer--shaded--border-top--width) solid var(--w-footer--shaded--border-top--color);
            color: var(--w-footer--shaded--color);
        }

        w-grid.spacing-s {
            padding: var(--w-footer--spacing-s--horizontal-spacing) var(--w-footer--spacing-s--vertical-spacing);
        }

        w-grid.spacing-m {
            padding: var(--w-footer--spacing-m--horizontal-spacing) var(--w-footer--spacing-m--vertical-spacing);
        }
    `;

    static properties = {
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast`, `light-contrast` and `shaded`."
        },

        spacing: {
            type: String,
            help: "Specifies spacings (margins, paddings, ...). Possible values are `s` and `m`."
        }
    };

    constructor() {
        super();
        this.appearance = "contrast";
        this.spacing = "s";
    }

    render() {
        return html`
            <w-grid
            class=${classnames({
                ["spacing-" + this.spacing]: true,
                [this.appearance]: true
            })}>

                <w-grid-item lg="3">
                    <slot name="col-1"></slot>
                </w-grid-item>

                <w-grid-item lg="5">
                    <slot name="col-2"></slot>
                </w-grid-item>

                <w-grid-item lg="5">
                    <slot name="col-3"></slot>
                </w-grid-item>

                <w-grid-item lg="3">
                    <slot name="col-4"></slot>
                </w-grid-item>
            </w-grid>
        `;
    }

}

customElements.define('w-footer', WFooter);