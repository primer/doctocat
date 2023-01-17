---
"@primer/gatsby-theme-doctocat": minor
---

Add support for two levels of nesting in `nav.yml`:

```diff
  - title: Introduction
    children:
      - title: Getting started
-       url: /getting-started
+       children:
+         - title: React
+           url: /getting-started/react
```

Note: Items with `children` cannot also have URLs.
