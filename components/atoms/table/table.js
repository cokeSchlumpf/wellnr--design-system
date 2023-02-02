import { LitElement, css } from '/libs/lit-core.min.js';
import { markdown } from '/directives/markdown.js';
import { dedent } from '/directives/dedent.js';


export class WTable extends LitElement {

    static styles = css`

    `;

    static properties = {
        
    };

    constructor() {
        super();
    }

    render() {
        return <table><slot></slot></table>
    }

}

export class WTHead extends LitElement {

    static styles = css`

    `;

    static properties = {
        
    };

    constructor() {
        super();
    }

    render() {
        return <thead><slot></slot></thead>
    }

}

export class WTBody extends LitElement {

    static styles = css`

    `;

    static properties = {
        
    };

    constructor() {
        super();
    }

    render() {
        return <tbody><slot></slot></tbody>
    }

}

export class WTr extends LitElement {

    static styles = css`

    `;

    static properties = {
        
    };

    constructor() {
        super();
    }

    render() {
        return <tr><slot></slot></tr>
    }

}

customElements.define('w-table', WTable);
customElements.define('w-thead', WTHead);
customElements.define('w-tbody', WTBody);
customElements.define('w-tbody', WTBody);