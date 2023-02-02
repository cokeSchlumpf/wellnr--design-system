import { LitElement, html, css } from '/libs/lit-core.min.js';

export class WCSSRulesTable extends LitElement {

    static styles = css`
        table {
            width: 100%;
            border-spacing: 0;

            margin-bottom: var(--w-spacing-500);
        }
        
        thead tr {
            background-color: var(--w-background-color-500);
        }
        
        thead th,
        tbody td {
            padding: var(--w-spacing-400);
            border: var(--w-border-width--thin) solid var(--w-background-color-800);
            text-align: left;
        }
        
        thead th {
            color: var(--w-muted-color);
            text-transform: uppercase;
        }
        
        thead th:not(:last-child) {
            border-right: none;
        }
        
        thead th:not(:first-child) {
            border-left: none;
        }
        
        tbody tr:not(:last-child) {
            border-bottom: none;
        }
    `;

    static properties = {
        elementName: {
            type: String,
            help: "The name of the element to display the CSS variables."
        }
    };

    constructor() {
        super();
        this.elementName = "w-heading";
    }

    _renderRow(cssVars, variable, defaultValue) {
        defaultValue = "`" + defaultValue + "`";

        if (!variable.endsWith("--help")) {
            return html`
                <tr>
                    <td>${variable}</td>
                    <td><w-markdown spacing="none">${defaultValue}</w-markdown></td>
                    <td><w-markdown spacing="none">${cssVars[variable + "--help"] ? cssVars[variable + "--help"].substring(1, cssVars[variable + "--help"].length - 1) : ""}</w-markdown></td>
                </tr>
            `
        }
    }

    _getAllCSSVariableNames(styleSheets = document.styleSheets) {
        var cssVars = {};
        // loop each stylesheet
        for (var i = 0; i < styleSheets.length; i++) {
            // loop stylesheet's cssRules
            try { // try/catch used because 'hasOwnProperty' doesn't work
                for (var j = 0; j < styleSheets[i].cssRules.length; j++) {
                    try {
                        // loop stylesheet's cssRules' style (property names)
                        if (styleSheets[i].cssRules[j].styleSheet) {
                            const vars = this._getAllCSSVariableNames([styleSheets[i].cssRules[j].styleSheet]);
                            cssVars = { ...cssVars, ...vars }
                        } else {
                            const re = /(--w-[a-zA-Z0-9-]*): ([^;]+)/g
                            const matches = Array.from(styleSheets[i].cssRules[j].cssText.matchAll(re));

                            matches.forEach(match => {
                                if (match[1].startsWith("--" + this.elementName)) {
                                    cssVars[match[1]] = match[2];
                                }
                            })
                        }
                    } catch (error) { }
                }
            } catch (error) { }
        }

        return cssVars;
    }

    render() {
        var cssVars = this._getAllCSSVariableNames();

        return html`<table>
            <thead>
                <tr>
                    <th>Variable</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                ${ Object.keys(cssVars).map((variable) => this._renderRow(cssVars, variable, cssVars[variable])) }
            </tbody>
        </table>`
    }

}

customElements.define('w-css-rules-table', WCSSRulesTable);