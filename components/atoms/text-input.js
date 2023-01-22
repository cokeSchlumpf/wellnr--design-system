import { LitElement, css, html } from '/libs/lit-core.min.js';
import { classnames } from '/directives/classnames.js';

export class WTextInput extends LitElement {

    static styles = css`
        div {
            display: inline-flex;
            border-bottom: 2px solid var(--muted-color);
            transition: all 300ms linear;
        }

        input {
            display: border-box;
            border: none;
            color: var(--text-color);
            padding: calc(0.7rem - 1px);
            flex-grow: 1;
        }

        div.invalid {
            border-bottom-color: var(--danger-color);
        }

        div.invalid input {
            color: var(--danger-color);
        }

        div.block {
            display: flex;
            width: 100%;
        }

        div.focus,
        div.invalid.focus {
            border-bottom-color: var(--primary-color);
        }

        div input:focus,
        div.invalid input:focus {
            outline: none;
        }

        input:disabled {
            cursor: auto;
        }

        button.action {
            border: none;
            cursor: pointer;

            opacity: 0.7;
            transition: all 300ms linear;
        }

        button.action:hover {
            opacity: 1;
        }

        button.action.clear {
            background: var(--icon-close) center no-repeat;
            background-size: 10px 10px;
            width: calc(10px + 2*0.7rem - 1px);
        }

        button.action.show {
            background: var(--icon-eye) center no-repeat;
            background-size: 15px 15px;
            width: calc(15px + 2*0.7rem - 1px);
        }
    `;

    static properties = {
        kind: { type: String },
        value: { type: String },
        placeholder: { type: String },

        invalid: { type: Boolean },
        disabled: { type: Boolean },
        block: { type: Boolean },

        clearable: { type: Boolean },

        focus: {
            type: Boolean,
            attribute: false
        },

        passwordVisible: {
            type: Boolean,
            attribute: false
        }
    };

    constructor() {
        super();
        this.kind = "text";
        this.value = "";
        this.paceholder = "";
        this.invalid = false;
        this.disabled = false;
        this.block = false;
        this.passwordVisible = false;
    }

    clear() {
        this.value = "";
        this.renderRoot?.querySelector('input').focus();
    }

    toggleVisibility() {
        this.passwordVisible = !this.passwordVisible;
    }

    getKind() {
        if (this.kind == "password" && this.passwordVisible) {
            return "text";
        } else {
            return this.kind;
        }
    }

    onBlur(e) {
        this.focus = false;
        this.value = e.target.value;
    }

    onFocus(e) {
        this.focus = true;
    }

    onInput(e) {
        this.value = e.target.value;
    }

    render() {
        return html`
            <div class=${classnames({ "invalid": this.invalid, "block": this.block, "disabled": this.disabled, "focus": this.focus })}>
                <input 
                    type="${this.getKind()}" 
                    placeholder="${this.placeholder}" 
                    
                    ?disabled=${this.disabled}

                    .value="${this.value}"
                    
                    @focus=${this.onFocus}
                    @blur=${this.onBlur}
                    @input=${this.onInput}>
                </input>
                ${ this.clearable && html`<button class="action clear" @click=${this.clear}></button>` || html`` }
                ${ this.kind == "password" && html`<button class="action show" @click=${this.toggleVisibility}></button>` || html`` }
            </div>
        `;
    }

}

customElements.define('w-text-input', WTextInput);