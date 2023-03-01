---
title: "Text Input"
element: w-text-input
class: WTextInput
description: The Text Input component allows user to type in text.
draft: false
---

{{<rawhtml>}}
<w-markdown spacing="s">
`w-text-input` supports common attributes like the HTML `input`-Tag like `value` or `placeholder`.
</w-markdown>
<w-element-example>
    <w-pane spacing="s">
        <w-text-input placeholder="Enter some text"></w-text-input>
    </w-pane>
    <w-pane spacing="s">
        <w-text-input placeholder="Enter some text" value="Some content" block></w-text-input>
    </w-pane>
    <w-pane spacing="s">
        <w-text-input kind="password" placeholder="Password" block value="s3cre!"></w-text-input>
    </w-pane>
</w-element-example>

<w-markdown spacing="s">
With `clearable` an additional button to clear the value is added.
</w-markdown>
<w-element-example>
    <w-pane spacing="s">
        <w-text-input placeholder="Enter some text" block clearable></w-text-input>
    </w-pane>
</w-element-example>

<w-markdown spacing="s">
Use the `invalid` attribute to indicate that the field content is invalid.
</w-markdown>
<w-element-example>
    <w-pane spacing="s">
        <w-text-input placeholder="Enter some text" block value="Content is wrong" invalid></w-text-input>
    </w-pane>
</w-element-example>

{{</rawhtml>}}