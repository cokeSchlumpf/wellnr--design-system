---
title: "Pane"
element: w-pane
class: WPane
description: A simple layout primitive to compose components and wrap component.
draft: false
---

{{<rawhtml>}}
<w-markdown spacing="s">
    By default, the Pane does not have any inner spacing (padding). This can be set by using `spacing`.
</w-markdown>

<w-element-example>
    <div style="margin-bottom: var(--w-spacing-300)">
        <w-pane elevation="s">
            No spacing.
        </w-pane>
    </div>
    <div style="margin-bottom: var(--w-spacing-300)">
        <w-pane elevation="s" spacing="s">
            <w-code>spacing="s"</w-code>
        </w-pane>
    </div>
    <div>
        <w-pane elevation="s" spacing="m">
            <w-code>spacing="m"</w-code>
        </w-pane>
    </div>
</w-element-example>

<w-markdown spacing="s">
    The pane can have different elevations (`none`, `s` and `m`) to stand out from surounding content.
</w-markdown>

<w-element-example>
    <w-pane elevation="s">
        <p style="text-align: center; margin: var(--w-spacing-300)">Elevated content</p>
    </w-pane>
</w-element-example>
{{</rawhtml>}}