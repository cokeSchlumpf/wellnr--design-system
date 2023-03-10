import { LitElement, css, html } from 'lit';
import { classnames } from '../../../directives/classnames.js';

export class WTextInput extends LitElement {

    static tagName = "w-text-input";

    static styles = css`
        div {
            display: inline-flex;
            border: var(--w-text-input--border-bottom--width) solid var(--w-text-input--border-bottom--color);
            transition: var(--w-text-input--transition);
            background-color: var(--text-input)
        }

        input {
            display: border-box;
            border: none;
            color: var(--w-text-input--color);
            line-height: var(--w-text-input--line-height);
            padding: 0 var(--w-text-input--padding);
            background-color: transparent;
            flex-grow: 1;
        }

        div.invalid {
            border-bottom-color: var(--w-text-input--invalid--color);
        }

        div.invalid input {
            color: var(--w-text-input--invalid--color);
        }

        div.block {
            display: flex;
            width: 100%;
        }

        div.focus,
        div.invalid.focus {
            border-bottom-color: var(--w-text-input--focus--color);
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
            transition: var(--w-text-input--transition);
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
        kind: { 
            type: String,
            help: "Specifies the type of the input. Possible values are: `text` (default)  and `password`. The value is passed through as `input.type`."
        },
        value: { 
            type: String,
            help: "The current value of the field."
        },
        placeholder: { 
            type: String,
            help: "A placeholder value for the component."
        },
        invalid: { 
            type: Boolean,
            help: "Indicates that the current value is invalid."
        },
        disabled: { 
            type: Boolean,
            help: "Indicates that the button is disabled."
        },
        block: { 
            type: Boolean,
            help: "Expands the size to the full available width."
        },

        clearable: { 
            type: Boolean,
            help: "Whether a clear-button should be provided."
        },

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