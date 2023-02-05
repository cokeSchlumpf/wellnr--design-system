---
title: "Pre"
element: w-pre
class: WPre
description: Display multiline code (preformatted text).
draft: false
---

{{<rawhtml>}}
<w-markdown spacing="s">
    Code examples can be displayed using `w-pre`. All content of the tag will be interpreted and displayed as code. The componen will also properly dedent the code.
</w-markdown>

<w-element-example>
    <w-pre>
        C     Hello World in Fortran

              PROGRAM HELLO
              WRITE (*,100)
              STOP
          100 FORMAT (' Hello World! ' /)
              END
    </w-pre>
</w-element-example>
{{</rawhtml>}}