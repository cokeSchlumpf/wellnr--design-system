// Atoms
import "./js/components/atoms/button/button.js";
import "./js/components/atoms/code/code.js";
import "./js/components/atoms/heading/heading.js";
import "./js/components/atoms/markdown/markdown.js";
import "./js/components/atoms/pane/pane.js";
import "./js/components/atoms/paragraph/paragraph.js";
import "./js/components/atoms/pre/pre.js";
import "./js/components/atoms/tabs/tabs.js";
import "./js/components/atoms/text-input/text-input.js";

// Layout
import "./js/components/layout/container/container.js";
import "./js/components/layout/fixed-header/fixed-header.js";
import "./js/components/layout/grid/grid.js";

// Molecules
import "./js/components/molecules/css-rules-table/css-rules-table.js";
import "./js/components/molecules/brand/brand.js";
import "./js/components/molecules/element-example/element-example.js";
import "./js/components/molecules/element-properties-table/element-properties-table.js";
import "./js/components/molecules/horizontal-nav/horizontal-nav.js";
import "./js/components/molecules/vertical-nav/vertical-nav.js";

// Organisms
import "./js/components/organisms/footer/footer.js";
import "./js/components/organisms/navbar/navbar.js";

import "./styles.css";


import { LitElement, html } from 'lit';


export class WDocsWrapper extends LitElement {

    render() {
        return html`
            <w-fixed-header spacing="m">
                <w-navbar appearance="shaded" size="m" slot="header">
                    <a slot="item" href="/introduction" class="w-active">Introduction</a>
                    <a slot="item" href="/foundations">Foundations</a>
                    <a slot="item" href="/components">Components</a>
                </w-navbar>

                <w-navbar slot="nav" appearance="shaded" orientation="vertical" size="m">
                    <a slot="item" href="/introduction" class="w-active">Introduction</a>
                    <a slot="item" href="/foundations">Foundations</a>
                    <a slot="item" href="/components">Components</a>
                
                    <w-vertical-nav--title slot="item">Atoms</w-vertical-nav--title>
                    <a slot="item" href="/docs/components/atoms/heading.html">Heading</a>
                    <a slot="item" href="/docs/components/atoms/markdown.html">Markdown</a>
                    <a slot="item" href="/docs/components/atoms/tabs.html">Tabs</a>
                </w-navbar>

                <slot name="article" slot="article"></slot>

                <w-footer slot="footer" spacing="m" appearance="light-contrast">
                    <div slot="col-1">&copy; Michael Wellner 2023.</div>
                </w-footer>
            </w-fixed-header>
        `
    }

}

/*
 * To avoid flashing unstyled content when loading the page. Use `<body style="opacity: 0">` to hide unstyled content during loading.
 */
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = "1";
 }, false);