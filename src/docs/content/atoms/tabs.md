---
title: "Tabs"
element: w-tabs
class: WTabs
description: Provides tabbed navigation.
draft: false
---

{{<rawhtml>}}
<w-markdown spacing="s">
    Tabs can be displayed in various styles, controlled by `appearance`. Possible values are `contrast`, `light-contrast` and `shaded`. A single tab can be marked as active/ selected using the `active` attribute of a tab.
</w-markdown>

<w-element-example>
    <div style="margin-bottom: var(--w-spacing-500)">
        <b>Contrast (default)</b><br />
        <w-tabs>
            <w-tab active>Section A</w-tab>
            <w-tab>Section B</w-tab>
            <w-tab>Section C</w-tab>
        </w-tabs>
    </div>
    <div style="margin-bottom: var(--w-spacing-500)">
        <b>Light Contrast</b><br />
        <w-tabs appearance="light-contrast">
            <w-tab>Section A</w-tab>
            <w-tab active>Section B</w-tab>
            <w-tab>Section C</w-tab>
        </w-tabs>
    </div>
    <div>
        <b>Shaded</b><br />
        <w-tabs appearance="shaded">
            <w-tab>Section A</w-tab>
            <w-tab>Section B</w-tab>
            <w-tab active>Section C</w-tab>
        </w-tabs>
    </div>
</w-element-example>

<div style="height: var(--w-spacing-500)"></div>

<w-markdown spacing="s">
    ## Tab-Pane
    To have tabs with inline switching functionality, use `w-tabpane`. It has the same properties as `w-tab`, but its children `w-tabpane-item` except content for tabs. The tab activated by default can be selected with `active` attribute.
</w-markdown>

<w-element-example>
    <w-tabpane appearance="shaded" active="a">
        <w-tabpane-item slot="a" label="Section A">Section A content.</w-tabpane-item>
        <w-tabpane-item slot="b" label="Section B">Section B content.</w-tabpane-item>
        <w-tabpane-item slot="c" label="Section C">Section C content.</w-tabpane-item>
    </w-tabpane>
</w-element-example>

{{</rawhtml>}}