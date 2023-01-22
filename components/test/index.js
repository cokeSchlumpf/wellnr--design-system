import {LitElement, html} from '/libs/lit-core.min.js';

export class MyElement extends LitElement {
    static properties = {
      version: {},
      name: {}
    };
  
    constructor() {
      super();
      this.version = 'STARTING';
    }

    changeName(event) {
      const input = event.target;
      this.name = input.value;
    }
  
    render() {
      return html`
        <button>Test</button>
      `;
    }
  }
  
  customElements.define('my-element', MyElement);