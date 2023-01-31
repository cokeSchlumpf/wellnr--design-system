import { LitElement, html } from '/libs/lit-core.min.js';


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

customElements.define('w-docs-wrapper', WDocsWrapper);