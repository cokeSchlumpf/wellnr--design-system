import {LitElement, css, html} from 'lit';
import { classnames } from '../../../directives/classnames.js';

export class WNavbar extends LitElement {
    static styles = css`
        :host { 
            margin: 0;
            padding: 0;
            display: flex;
        }

        .container.contrast {
            background-color: var(--w-navbar--contrast--background-color);
        }

        .container.horizontal {
            display: border-box;
            width: 100%;
        }

        .container.horizontal.size-s {
            padding: var(--w-navbar--size-s--vertical-padding) var(--w-navbar--size-s--horizontal-padding);
        }

        .container.horizontal.size-m {
            padding: var(--w-navbar--size-m--vertical-padding) var(--w-navbar--size-m--horizontal-padding);
        }        
        
        .container.horizontal.shaded {
            border-bottom: var(--w-navbar--shaded--border-bottom--width) solid var(--w-navbar--shaded--border-bottom--color);
            background-color: var(--w-navbar--shaded--background-color);
        }

        .container.horizontal w-horizontal-nav.main-nav {
            height: 100%;
        }

        .container.vertical {
            
        }

        .container.vertical.size-s {
            width: calc((100vw - 2 * var(--w-navbar--size-s--horizontal-padding)) / 16 * 3 - 2 * var(--w-navbar--size-m--horizontal-padding));
            padding: var(--w-navbar--size-s--vertical-padding) var(--w-navbar--size-s--horizontal-padding);
        }

        .container.vertical.size-m {
            width: calc((100vw - 2 * var(--w-navbar--size-m--horizontal-padding)) / 16 * 3 - 2 * var(--w-navbar--size-m--horizontal-padding));
            padding: var(--w-navbar--size-m--vertical-padding) var(--w-navbar--size-m--horizontal-padding);
        }
    `

    static properties = {
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast` and `shaded`."
        },

        orientation: {
            type: String,
            help: "Orientation of the Nav Bar. Possible values are `horizontal` and `vertical`. Default: `horizontal`."
        },

        size: {
            type: String,
            help: "Specifies the boldness of the navbar. Possible values are `s` and `m`."
        }
    };

    constructor() {
        super();

        this.appearance = "contrast";
        this.orientation = "horizontal";
        this.size = "s";
    }

    render() {
        if (this.orientation == "horizontal") {
            return html`
                <div 
                    class=${classnames({ 
                        [this.appearance]: true, 
                        "horizontal": true,
                        "container": true,
                        ["size-" + this.size]: true 
                    })}>

                    <w-grid>
                        <w-grid-item lg="3">
                            <w-brand 
                                appearance="${this.appearance}"
                                logo="/wellnr--design-system/assets/images/logo/logo.svg"
                                app="Design System." 
                                brand="wellnr."></w-brand>
                        </w-grid-item>

                        <w-grid-item lg="10">
                            <w-horizontal-nav class="main-nav" appearance="${this.appearance}">
                                <slot name="item" slot="item"></slot>
                            </w-horizontal-nav>
                        </w-grid-item>

                        <w-grid-item lg="3">
                            <slot name="controls"></slot>
                        </w-grid-item>
                    </w-grid>
                </div>
            `
        } else if (this.orientation == "vertical") {
            return html`
                <div 
                    class=${classnames({ 
                        [this.appearance]: true, 
                        "vertical": true,
                        "container": true,
                        ["size-" + this.size]: true 
                    })}>

                    <w-vertical-nav appearance="${this.appearance}">
                        <slot name="item" slot="item"></slot>
                    </w-vertical-nav>
                </div>
            `;
        }
    }
}

customElements.define('w-navbar', WNavbar);