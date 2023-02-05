---
title: "Container"
element: w-container
class: WContainer
description: A layout primitive to wrap page content.
draft: false
---

{{<rawhtml>}}
<w-markdown spacing="s">
    The container adopts its size depending the viewport size. Use `fluid` to use the full display size, except on very wide screens.
</w-markdown>
<w-element-example>
    <w-pane spacing="s">
        <w-container>
            <div style="background-color: var(--w-background-color-500)">
                Some content.
            </div>
        </w-container>
    </w-pane>
    <w-pane spacing="s">
        <w-container fluid>
            <div style="background-color: var(--w-background-color-500)">
                Some content.
            </div>
        </w-container>
    </w-pane>
</w-element-example>
{{</rawhtml>}}