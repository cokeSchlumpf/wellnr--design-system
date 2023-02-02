import { LitElement, css, html } from '/libs/lit-core.min.js';


export class WTabs extends LitElement {

    static styles = css`
        :host {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;

            border-bottom: var(--w-tabs--border-bottom-width) solid var(--w-tabs--contrast--border-bottom-color);
            background-color: var(--w-tabs--contrast--background-color);
        }

        :host ::slotted(w-tab) {
            --w-tab--background-color: var(--w-tabs--contrast--tab--background-color);
            --w-tab--hover--background-color: var(--w-tabs--contrast--tab--hover--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--contrast--tab--border-bottom-color);
            --w-tab--border-right-color: var(--w-tabs--contrast--tab--border-right-color);
            --w-tab--color: var(--w-tabs--contrast--tab--color);
            --w-tab--hover--color: var(--w-tabs--contrast--tab--hover--color);
        }

        :host ::slotted(w-tab[active]) {
            --w-tab--background-color: var(--w-tabs--contrast--tab--active--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--contrast--tab--active--border-bottom-color);
            --w-tab--hover--background-color: var(--w-tabs--contrast--tab--active--background-color);
            --w-tab--color: var(--w-tabs--contrast--tab--active--color);
            --w-tab--hover--color: var(--w-tabs--contrast--tab--active--color);
        }

        :host([appearance="light-contrast"]) {
            border-bottom: var(--w-tabs--border-bottom-width) solid var(--w-tabs--light-contrast--border-bottom-color);
            background-color: var(--w-tabs--light-contrast--background-color);
        }

        :host([appearance="light-contrast"]) ::slotted(w-tab) {
            --w-tab--background-color: var(--w-tabs--light-contrast--tab--background-color);
            --w-tab--hover--background-color: var(--w-tabs--light-contrast--tab--hover--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--light-contrast--tab--border-bottom-color);
            --w-tab--border-right-color: var(--w-tabs--light-contrast--tab--border-right-color);
            --w-tab--color: var(--w-tabs--light-contrast--tab--color);
            --w-tab--hover--color: var(--w-tabs--light-contrast--tab--hover--color);
        }

        :host([appearance="light-contrast"]) ::slotted(w-tab[active]) {
            --w-tab--background-color: var(--w-tabs--light-contrast--tab--active--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--light-contrast--tab--active--border-bottom-color);
            --w-tab--hover--background-color: var(--w-tabs--light-contrast--tab--active--background-color);
            --w-tab--color: var(--w-tabs--light-contrast--tab--active--color);
            --w-tab--hover--color: var(--w-tabs--light-contrast--tab--active--color);
        }

        :host([appearance="shaded"]) {
            border-bottom: var(--w-tabs--border-bottom-width) solid var(--w-tabs--shaded--border-bottom-color);
            background-color: var(--w-tabs--shaded--background-color);
        }
        
        :host([appearance="shaded"]) ::slotted(w-tab) {
            --w-tab--background-color: var(--w-tabs--shaded--tab--background-color);
            --w-tab--hover--background-color: var(--w-tabs--shaded--tab--hover--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--shaded--tab--border-bottom-color);
            --w-tab--border-right-color: var(--w-tabs--shaded--tab--border-right-color);
            --w-tab--color: var(--w-tabs--shaded--tab--color);
            --w-tab--hover--color: var(--w-tabs--shaded--tab--hover--color);
        }
        
        :host([appearance="shaded"]) ::slotted(w-tab[active]) {
            --w-tab--background-color: var(--w-tabs--shaded--tab--active--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--shaded--tab--active--border-bottom-color);
            --w-tab--hover--background-color: var(--w-tabs--shaded--tab--active--background-color);
            --w-tab--color: var(--w-tabs--shaded--tab--active--color);
            --w-tab--hover--color: var(--w-tabs--shaded--tab--active--color);
        }
    `;

    static properties = {
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast`, `light-contrast` and `shaded`."
        },
        active: {
            type: Boolean,
            help: "Whether the tab should be displayed as active."
        }
    };

    _handleClick(e) {
        e.preventDefault();

        if (e.target.nodeName.toLowerCase() == "w-tab") {
            const tab = e.target.getAttribute("name") || e.target.innerHTML;
            this.dispatchEvent(new CustomEvent("w-tabs-changed", { detail: { value: tab }, bubbles: true, composed: true }))
        }
    }

    constructor() {
        super();
        this.appearance = "contrast";

        this.addEventListener('click', this._handleClick);
    }

    render() {
        return html`<slot></slot>`
    }

}

export class WTab extends LitElement {

    static styles = css`
        :host {
            display: block;
        }

        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 var(--w-tab--padding-right) 0 var(--w-tab--padding-left);

            text-decoration: none;
            transition: var(--w-tabs--transition);
            transition-property: color, background-color;

            border-right: var(--w-tabs--border-right-width) solid var(--w-tab--border-right-color);
            border-bottom: var(--w-tabs--border-bottom-width) solid var(--w-tab--border-bottom-color);
            margin-bottom: calc(-1 * var(--w-tabs--border-bottom-width));
            height: var(--w-tabs--height);

            background-color: var(--w-tab--background-color);
            color: var(--w-tab--color);
        }

        a:hover {
            background-color: var(--w-tab--hover--background-color);
            color: var(--w-tab--hover--color);
        }
    `;

    static properties = {
        active: {
            type: Boolean,
            help: "Specifies whether the tab should be displayed as active."
        },
        name: {
            type: String,
            help: "The name of the tab. This name will be used when dispatching events from Tabs component."
        }
    };

    constructor() {
        super();
        this.name = "";
    }

    render() {
        return html`<a href="#"><slot></slot></a>`
    }

}

export class WTabPane extends LitElement {

    static properties = {
        active: {
            type: String,
            help: "The id of the active element."
        },
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast`, `light-contrast` and `shaded`."
        }
    };

    constructor() {
        super();
        this.name = "";
        this.appearance = "contrast";
        this.active = "";

        const self = this;

        this.addEventListener("w-tabs-changed", e => {
            if (e.detail.value) {
                self.active = e.detail.value;
            }
        });
    }

    _renderTab(tab) {
        const name = tab.getAttribute('slot');
        const label = tab.getAttribute('label');

        if (!name) {
            name = "";
        }

        return html`
            <w-tab 
                name="${name}"
                ?active=${this.active.toLowerCase() == name.toLowerCase()}>

                ${label}
            </w-tab>
        `;
    }

    _renderContent(tabs) {
        const selected = tabs.filter(tab => tab.getAttribute('slot') && tab.getAttribute('slot').toLowerCase() == this.active.toLowerCase())

        if (selected.length > 0) {
            return html`<slot name="${selected[0].getAttribute('slot')}"></slot>`;
        }
    }

    render() {
        const tabs = Array.from(this.querySelectorAll("w-tabpane-item"));

        return html`
            <w-tabs appearance="${this.appearance}">
                ${tabs.map(tab => this._renderTab(tab))}
            </w-tabs>

            ${this._renderContent(tabs)}
        `;
    }

}

export class WTabPaneItem extends LitElement {

    static properties = {
        slot: {
            type: String,
            help: "The name of the tab. This name will be used when dispatching events from Tabs component."
        },
        label: {
            type: String,
            help: "The label of the tab, as shown on the tab bar."
        }
    };

    render() {
        return html`<slot></slot>`
    }

}

customElements.define('w-tabs', WTabs);
customElements.define('w-tab', WTab);
customElements.define('w-tabpane', WTabPane);
customElements.define('w-tabpane-item', WTabPaneItem);