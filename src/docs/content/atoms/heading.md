---
title: "Heading"
element: w-heading
class: WHeading
description: The Heading component is used for all headings.
draft: false
---

{{<rawhtml>}}
<w-markdown spacing="s">
    The appearance of Heading can be influenced by `is` and `size` attribute.

    If `size` is not passed, it will be determined based on `is`.
</w-markdown>

<w-element-example>
    <w-heading is="h6">H6: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading is="h5">H5: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading is="h4">H4: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading is="h3">H3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading is="h2">H2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading is="h1">H1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
</w-element-example>

<w-markdown spacing="s">
    If `size` is provided. It overrides the default size.
</w-markdown>

<w-element-example>
    <w-heading size="100">100: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading size="200">200: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading size="300">300: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading size="400">400: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading size="500">500: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading size="600">600: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading size="700">700: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading size="800">800: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
    <w-heading size="900">900: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</w-heading>
</w-element-example>
{{</rawhtml>}}