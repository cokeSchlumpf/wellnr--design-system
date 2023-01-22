import { LitElement, css, html } from '/libs/lit-core.min.js';
import { classnames } from '/directives/classnames.js';

export class WButton extends LitElement {

    static styles = css`
        button {
            display: inline-block;
            cursor: pointer;
            transition: all 300ms linear;
        }

        button.primary {
            border: 1px solid var(--primary-color);
            background-color: var(--primary-color);
            color: var(--primary-text-color);
        }

        button.primary:hover {
            background-color: var(--primary-hover-color);
        }

        button.secondary {
            border: 1px solid var(--secondary-color);
            background-color: var(--secondary-color);
            color: var(--primary-text-color);
        }

        button.secondary:hover {
            background-color: var(--secondary-hover-color);
        }

        button.tertiary {
            background-color: transparent;
            border: 1px solid var(--primary-color);
            color: var(--primary-color);
        }

        button.tertiary:hover {
            background-color: var(--primary-color);
            color: var(--primary-text-color);
        }

        button.danger {
            border: 1px solid var(--danger-color);
            background-color: var(--danger-color);
            color: var(--primary-text-color);
        }

        button.danger:hover {
            background-color: var(--danger-hover-color);
        }

        button.ghost {
            border: 1px solid transparent;
            background-color: transparent;
            color: var(--a-color);
        }

        button.ghost:hover {
            color: var(--a-hover-color);
        }

        button.sm {
            padding: 0.5rem 3rem 0.5rem 0.5rem;
        }

        button.md {
            padding: 0.7rem 3rem 0.7rem 0.7rem;
        }

        button.lg {
            padding: 1rem 3rem 1rem 1rem;
        }

        button.xl {
            padding: 1rem 3rem 2rem 1rem;
        }

        button.block {
            display: block;
            width: 100%;
            text-align: left;
        }

        button:disabled,
        button.disabled {
            background: var(--muted-color);
            border: 1px solid var(--muted-color);
            cursor: auto;
        }
    `;

    static properties = {
        label: { type: String },
        kind: { type: String }, // options: 'primary', 'secondary', 'tertiary', 'danger', 'ghost'
        size: { type: String }, // options: 'md', 'sm', 'md', 'lg', 'xl'
        disabled: { type: Boolean },
        block: { type: Boolean }
    };

    constructor() {
        super();
        this.label = "Click me!";
        this.kind = "primary";
        this.size = "md";
        this.disabled = false;
        this.block = false;
    }

    render() {
        return html`
            <button 
                class=${classnames({ [this.kind]: !this.disabled, [this.size]: true, "block": this.block, "disabled": this.disabled })} 
                ?disabled=${this.disabled}>
                    ${this.label}
            </button>
        `;
    }

}

customElements.define('w-button', WButton);