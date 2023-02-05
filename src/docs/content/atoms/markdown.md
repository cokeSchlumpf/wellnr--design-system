---
title: "Markdown"
element: w-markdown
class: WMarkdown
description: Create HTML content using Markdown syntax.
draft: false
---

{{<rawhtml>}}
<w-markdown spacing="s">
    The tag renders the content within the element as Markdown. It will at least produce a single paragraph (`&lt;p&gt;`).
</w-markdown>

<w-element-example>
    <w-markdown>
        # Some title
        Lorem ipsum dolor **sit amet**, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        * At vero eos et accusam et justo duo dolores et ea rebum.
        * tet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, [sed](./) diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    </w-markdown>
</w-element-example>
{{</rawhtml>}}