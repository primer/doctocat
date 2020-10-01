---
"@primer/gatsby-theme-doctocat": major
---

Updated the `Do` and `Dont` component APIs to allow consumers to control how images are rendered:

```diff
- <Do src="https://example.com/do.png">
-   Use brief and direct communication
- </Do>
+ <Do>
+   <img src="https://example.com/do.png" alt="" />
+   <Caption>Use brief and direct communication</Caption>
+ </Do>
```
