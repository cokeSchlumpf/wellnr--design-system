import { LitElement, html, css } from 'lit';

import { WHeading } from '../../atoms/heading/heading.js';

export class WPropertiesTable extends LitElement {

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
            help: "The name of the classname to display the properties."
        }
    };

    constructor() {
        super();
        this.className = "WHeading";
    }

    _getComponentClass() {
        switch (this.className) {
            case "WHeading":
                return WHeading;
        }
    }

    _renderRow(property, settings) {
        return html`
            <tr>
                <td>${property}</td>
                <td>${settings["type"].name}</td>
                <td><w-markdown spacing="none">${settings["help"]}</w-markdown></td>
            </tr>
        `
    }

    render() {
        const clazz = this._getComponentClass(this.className);   
        
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

}

customElements.define('w-element-properties-table', WPropertiesTable);