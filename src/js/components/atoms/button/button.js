import { LitElement, css, html } from 'lit';
import { classnames } from '../../../directives/classnames.js';

export class WButton extends LitElement {

    static tagName = "w-button";

    static styles = css`
        :host {

        }

        :host([intent="primary"]) {
            --w-button--color: var(--w-button--intent-primary--color);
            --w-butoon--border-color: var(--w-butoon--intent-primary--border-color);
            --w-button--text--color: var(--w-button--intent-primary--text--color);

            --w-button--hover--color: var(--w-button--intent-primary--hover--color);
            --w-button--hover--border-color: var(--w-button--intent-primary--hover--border-color);
            --w-button--hover--text--color: var(--w-button--intent-primary--hover--text--color);

            --w-button--appearance-outline--text-color: var(--w-button--intent-primary--appearance-outline--text-color);
            --w-button--appearance-outline--hover--text-color: var(--w-button--intent-primary--appearance-outline--hover--text-color);
        }

        :host([intent="success"]) {
            --w-button--color: var(--w-button--intent-success--color);
            --w-butoon--border-color: var(--w-butoon--intent-success--border-color);
            --w-button--text--color: var(--w-button--intent-success--text--color);
        
            --w-button--hover--color: var(--w-button--intent-success--hover--color);
            --w-button--hover--border-color: var(--w-button--intent-success--hover--border-color);
            --w-button--hover--text--color: var(--w-button--intent-success--hover--text--color);
        
            --w-button--appearance-outline--text-color: var(--w-button--intent-success--appearance-outline--text-color);
            --w-button--appearance-outline--hover--text-color: var(--w-button--intent-success--appearance-outline--hover--text-color);
        }

        :host([intent="danger"]) {
            --w-button--color: var(--w-button--intent-danger--color);
            --w-butoon--border-color: var(--w-butoon--intent-danger--border-color);
            --w-button--text--color: var(--w-button--intent-danger--text--color);
        
            --w-button--hover--color: var(--w-button--intent-danger--hover--color);
            --w-button--hover--border-color: var(--w-button--intent-danger--hover--border-color);
            --w-button--hover--text--color: var(--w-button--intent-danger--hover--text--color);
        
            --w-button--appearance-outline--text-color: var(--w-button--intent-danger--appearance-outline--text-color);
            --w-button--appearance-outline--hover--text-color: var(--w-button--intent-danger--appearance-outline--hover--text-color);
        }

        :host([size="s"]) {
            --w-button--line-height: var(--w-button--size-s--line-height);
            --w-button--font-size: var(--w-button--size-s--font-size);
        }

        :host([size="l"]) {
            --w-button--line-height: var(--w-button--size-l--line-height);
            --w-button--font-size: var(--w-button--size-l--font-size);
        }

        :host([block]) {
            display: block;
        }

        :host([block]) button {
            display: block;
            width: 100%;
            text-align: left;
        }

        :host([appearance="default"]) button,
        button {
            display: inline-block;
            cursor: pointer;
            transition: var(--w-button--transition);

            background-color: var(--w-button--color);
            border: var(--w-button--border-width) solid var(--w-butoon--border-color);
            color: var(--w-button--text--color);
            
            font-family: var(--w-button--font-family);
            font-size: var(--w-button--font-size);
            font-weight: var(--w-button--font-weight);
            padding: 0 var(--w-button--padding-right) 0px var(--w-button--padding-left);
            border-radius: var(--w-button--border-radius);

            line-height: var(--w-button--line-height);
        }

        :host([appearance="default"]) button:hover:not([disabled]),
        button:hover:not([disabled]) {
            background-color: var(--w-button--hover--color);
            color: var(--w-button--hover--text--color);
        }

        button[disabled] {
            opacity: 0.6;
            cursor: default;
        }

        :host([appearance="outline"]) button {
            background-color: transparent;
            color: var(--w-button--appearance-outline--text-color);
        }

        :host([appearance="link"]) button {
            background-color: transparent;
            border: none;
            padding: 0 var(--w-button--appearance-link--padding-left) 0 var(--w-button--appearance-link--padding-right);

            color: var(--w-button--appearance-outline--text-color);
        }

        :host([appearance="link"]) button:hover:not([disabled]) {
            color: var(--w-button--appearance-outline--hover--text-color);
        }
    `;

    static properties = {
        appearance: { 
            type: String,
            help: "The style in which the button should be displayed. Possible values are: `default`, `outline` and `link`.'"
        }, 
        intent: {
            type: String,
            help: "Intents may influence the coloring of buttons. Available options are: `none` (default), `primary`, `danger` and `success`."
        },
        size: { 
            type: String,
            help: "The size of the button. Possible values are `s`, `m` and `l`."
        },
        disabled: { 
            type: Boolean,
            help: "Indicate that a button is disabled."
        }
    };

    constructor() {
        super();
        this.appearance = "default";
        this.size = "m";
        this.disabled = false;
    }

    render() {
        return html`
            <button 
                ?disabled=${this.disabled}>
                    <slot></slot>
            </button>
        `;
    }

}

customElements.define('w-button', WButton);