---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
element: w-{{ .Name }}
class: W{{ replace .Name "-" "" }}
description: Lorem ipsum dolor.
layout: components
draft: true
---

{{ <rawhtml> }}

{{ </rawhtml> }}