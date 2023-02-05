import { LitElement, html, css } from 'lit';

import { WButton } from '../../atoms/button/button.js';
import { WCode } from '../../atoms/code/code.js';
import { WHeading } from '../../atoms/heading/heading.js';
import { WMarkdown } from '../../atoms/markdown/markdown.js';
import { WPane } from '../../atoms/pane/pane.js';
import { WParagraph } from '../../atoms/paragraph/paragraph.js';
import { WPre } from '../../atoms/pre/pre.js';
import { WTabs } from '../../atoms/tabs/tabs.js';
import { WTextInput } from '../../atoms/text-input/text-input.js';

function getComponentClass(className) {
    switch (className) {
        case "WButton":
            return WButton;
        case "WCode":
            return WCode;
        case "WHeading":
            return WHeading;
        case "WMarkdown":
            return WMarkdown;
        case "WPane":
            return WPane;
        case "WParagraph":
            return WParagraph;
        case "WPre":
            return WPre;
        case "WTabs":
            return WTabs;
        case "WTextInput":
            return WTextInput;
    }
}

export class WProperties extends LitElement {

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
        className: {
            type: String,
            help: "The name of the classname to display the properties and the properties of all related elements."
        }
    };

    constructor() {
        super();
        this.className = "WHeading";
    }

    _renderClazz(clazz) {
        return html`
            <h2>&lt${ clazz.tagName }&gt Tag</h2>
            ${this._renderProperties(clazz)}

            <h3>Related CSS Variables</h3>
            <w-css-rules-table elementName="${ clazz.tagName }"></w-css-rules-table>
        `;
    }

    _renderRow(property, settings) {
        if (settings.hasOwnProperty("attribute") && !settings["attribute"]) {
            return html``;
        }

        return html`
            <tr>
                <td>${property}</td>
                <td>${settings["type"].name}</td>
                <td><w-markdown spacing="none">${settings["help"]}</w-markdown></td>
            </tr>
        `
    }

    _renderProperties(clazz) {        
        return html`<table>
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                ${ Object.keys(clazz.properties).map((property) => this._renderRow(property, clazz.properties[property])) }
            </tbody>
        </table>`;
    }

    render() {
        const clazz = getComponentClass(this.className);
        
        return html`
            ${this._renderClazz(clazz)}
            ${clazz.relatedComponents ? clazz.relatedComponents().map(c => this._renderClazz(c)) : html`` }
        `;
    }

}

customElements.define('w-element-properties', WProperties);