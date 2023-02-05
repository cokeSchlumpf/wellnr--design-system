---
title: "Button"
element: w-button
class: WButton
description: A button triggers an action, initiated by the user.
draft: false
---

{{<rawhtml>}}
<w-markdown spacing="s">
    The `appearance` property of a button accepts three possible values: `default`, `outline` and `link`. The appearance has impact on outline and background color.
</w-markdown>

<w-element-example>
    <w-button appearance="default">Click me.</w-button>
    <w-button appearance="outline">Click me.</w-button>
    <w-button appearance="link">Click me.</w-button>
</w-element-example>

<w-markdown spacing="s">
    Intents may influence the coloring of buttons. Available options are: `none` (default), `primary`, `danger` and `success`.
</w-markdown>

<w-element-example>
    <div style="margin-bottom: var(--w-spacing-300)">
        <w-button appearance="default" intent="primary">Primary action.</w-button>
        <w-button appearance="outline" intent="primary">Primary action.</w-button>
        <w-button appearance="link" intent="primary">Primary action.</w-button>
    </div>
    <div style="margin-bottom: var(--w-spacing-300)">
        <w-button appearance="default" intent="danger">Dangerous action.</w-button>
        <w-button appearance="outline" intent="danger">Dangerous action.</w-button>
        <w-button appearance="link" intent="danger">Dangerous action.</w-button>
    </div>
    <div>
        <w-button appearance="default" intent="success">Positive action.</w-button>
        <w-button appearance="outline" intent="success">Positive action.</w-button>
        <w-button appearance="link" intent="success">Positive action.</w-button>
    </div>
</w-element-example>

<w-markdown spacing="s">
    Buttons can be used in different sizes: `s`, `m` and `l`.
</w-markdown>

<w-element-example>
    <div style="margin-bottom: var(--w-spacing-300)">
        <w-button size="s">Small</w-button>
    </div>
    <div style="margin-bottom: var(--w-spacing-300)">
        <w-button size="m">Medium (default)</w-button>
    </div>
    <div>
        <w-button size="l">Large</w-button>
    </div>
</w-element-example>

<w-markdown spacing="s">
    Button may take full available width with `block` attribute.
</w-markdown>

<w-element-example>
    <w-button block>Blocked Button</w-button>
</w-element-example>

<w-markdown spacing="s">
    Button can be disabled.
</w-markdown>

<w-element-example>
    <w-button disabled>Blocked Button</w-button>
</w-element-example>
{{</rawhtml>}}