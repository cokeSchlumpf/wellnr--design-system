import { LitElement, css, html } from '/libs/lit-core.min.js';


export class WHeadingDocs extends LitElement {

    render() {
        return html`
            <w-heading is="h3">Heading</w-heading>
            <w-p>
                The <w-code>Heading</w-code> component is used for all headings. The appearance can be influenced by <w-code>is</w-code> and <w-code>size</w-code> attributes.
            </w-p>

            <w-p>
                <w-code>is</w-code> specifies the element which is rendered. If no <w-code>size</w-code> is specified, the size will be derived from <w-code>is</w-code>.
            </w-p>

            <w-heading is="h6">h6: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading is="h5">h5: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading is="h4">h4: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading is="h3">h3: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading is="h2">h2: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading is="h1">h1: The quick brown fox jumps over the lazy dog</w-heading>

            <w-p>
                <w-code>size</w-code> overrides the defaults for font size and margins.
            </w-p>

            <w-heading size="100">100: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading size="200">200: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading size="300">300: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading size="400">400: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading size="500">500: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading size="600">600: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading size="700">700: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading size="800">800: The quick brown fox jumps over the lazy dog</w-heading>
            <w-heading size="900">900: The quick brown fox jumps over the lazy dog</w-heading>

            <w-code multiline>
                &lt;w-heading&gt;Lorem ipsum dolor sit amet&lt;/w-heading&gt;
            </w-code>
        `
    }

}

customElements.define('w-heading-docs', WHeadingDocs);