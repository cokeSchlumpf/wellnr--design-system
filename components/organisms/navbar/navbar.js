import {LitElement, css, html} from '/libs/lit-core.min.js';
import { classnames } from '/directives/classnames.js';

export class WNavbar extends LitElement {
    static styles = css`
        :host { 
            display: block;
            margin: 0;
            padding: 0;
        }

        .container.size-s {
            padding: var(--w-navbar--size-s--vertical-padding) var(--w-navbar--size-s--horizontal-padding);
        }

        .container.size-m {
            padding: var(--w-navbar--size-m--vertical-padding) var(--w-navbar--size-m--horizontal-padding);
        }

        .container.contrast {
            background-color: var(--w-navbar--contrast--background-color);
        }
        
        .container.shaded {
            border-bottom: var(--w-navbar--shaded--border-bottom--width) solid var(--w-navbar--shaded--border-bottom--color);
        }

        w-horizontal-nav.main-nav {
            height: 100%;
        }
    `

    static properties = {
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast` and `shaded`."
        },

        size: {
            type: String,
            help: "Specifies the boldness of the navbar. Possible values are `s` and `m`."
        }
    };

    constructor() {
        super();

        this.appearance = "contrast";
        this.size = "s";
    }

    render() {
        return html`
            <div 
                class=${classnames({ 
                    [this.appearance]: true, 
                    "container": true,
                    ["size-" + this.size]: true 
                })}
            >
                <w-grid>
                    <w-grid-4x>
                        <w-brand 
                            appearance="${this.appearance}"
                            logo="/assets/images/logo/logo.svg"
                            app="Design System." 
                            brand="wellnr."></w-brand>
                    </w-grid-4x>

                    <w-grid-8x>
                        <w-horizontal-nav class="main-nav" appearance="${this.appearance}">
                            <slot name="item" slot="item"></slot>
                        </w-horizontal-nav>
                    </w-grid-8x>

                    <w-grid-4x>
                        <slot name="controls"></slot>
                    </w-grid-4x>
                </w-grid>
            </div>
        `
    }
}

customElements.define('w-navbar', WNavbar);