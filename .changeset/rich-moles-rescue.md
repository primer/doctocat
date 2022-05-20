---
"@primer/gatsby-theme-doctocat": major
---

Items in [`nav.yml`](https://primer.style/doctocat/usage/customization#side-navigation) that contain `children` no longer render as links, meaning the `url` property will be ignored. 



```diff
# nav.yml
– title: Components
- url: /components
  children:
   — title: Avatar
     url: /Avatar
```
