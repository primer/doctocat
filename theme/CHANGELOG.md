# @primer/gatsby-theme-doctocat

## 1.5.0

### Minor Changes

- [`d7af544`](https://github.com/primer/doctocat/commit/d7af544369e8a592c05a65fef8813652d9a2842b) [#220](https://github.com/primer/doctocat/pull/220) Thanks [@colebemis](https://github.com/colebemis)! - Add support for "storybook" frontmatter variable

## 1.4.0

### Minor Changes

- [`60a7f4a`](https://github.com/primer/doctocat/commit/60a7f4a3a91eda6fec83600b8886f9d0e19029ea) [#203](https://github.com/primer/doctocat/pull/203) Thanks [@colebemis](https://github.com/colebemis)! - Add syntax highlighting support for `ruby` and `erb` code examples

* [`d4116cb`](https://github.com/primer/doctocat/commit/d4116cbf0906c594285ef470ae60b8845e6f5380) [#214](https://github.com/primer/doctocat/pull/214) Thanks [@colebemis](https://github.com/colebemis)! - Add ImageContainer component

## 1.3.0

### Minor Changes

- [`eaa57f7`](https://github.com/primer/doctocat/commit/eaa57f79f6fbc11032e3ee535f7950a240f5ae94) [#211](https://github.com/primer/doctocat/pull/211) Thanks [@colebemis](https://github.com/colebemis)! - Remove Prototyping link from Design dropdown in the global navigation

* [`a699326`](https://github.com/primer/doctocat/commit/a699326fb9d788fcc798a1c9881000fa2cc339bb) [#210](https://github.com/primer/doctocat/pull/210) Thanks [@colebemis](https://github.com/colebemis)! - Add https://primer.style/desktop link to the global navigation

### Patch Changes

- [`328099e`](https://github.com/primer/doctocat/commit/328099ee5913adf38145248ba8dad0666f9b4865) [#209](https://github.com/primer/doctocat/pull/209) Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump ini from 1.3.5 to 1.3.7

## 1.2.0

### Minor Changes

- [`44ed070`](https://github.com/primer/doctocat/commit/44ed070e4340f1b01f258414b903c9550156b05e) [#204](https://github.com/primer/doctocat/pull/204) Thanks [@colebemis](https://github.com/colebemis)! - Add https://primer.style/view-components link to the global navigation

* [`79654e5`](https://github.com/primer/doctocat/commit/79654e54762000884040b0f068162a10148b34cf) [#201](https://github.com/primer/doctocat/pull/201) Thanks [@colebemis](https://github.com/colebemis)! - Add https://primer.style/mobile link to the global navigation

### Patch Changes

- [`e412c29`](https://github.com/primer/doctocat/commit/e412c29c69dfd9b584fbe21c60327444ac9fd727) [#199](https://github.com/primer/doctocat/pull/199) Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump object-path from 0.11.4 to 0.11.5

* [`f35c5b3`](https://github.com/primer/doctocat/commit/f35c5b3b57c0c0fe0fce42167628fabb0a11b74e) [#205](https://github.com/primer/doctocat/pull/205) Thanks [@colebemis](https://github.com/colebemis)! - Remove border-radius on bottom page border

## 1.1.0

### Minor Changes

- [`81978aa`](https://github.com/primer/doctocat/commit/81978aa70cf6bcdd6b9099b24b1232cd7a350153) [#195](https://github.com/primer/doctocat/pull/195) Thanks [@colebemis](https://github.com/colebemis)! - Add https://primer.style/cli link to the global navigation

## 1.0.0

### Major Changes

- [`152402c`](https://github.com/primer/doctocat/commit/152402cd09f32a491f59283cc02570b0142f4bd9) [#184](https://github.com/primer/doctocat/pull/184) Thanks [@colebemis](https://github.com/colebemis)! - Update the `Do` and `Dont` component APIs to allow consumers to control how images are rendered:

  ```diff
  - <Do src="https://example.com/do.png">
  -   Use brief and direct communication
  - </Do>
  + <Do>
  +   <img src="https://example.com/do.png" alt="" />
  +   <Caption>Use brief and direct communication</Caption>
  + </Do>
  ```

### Minor Changes

- [`f6f5619`](https://github.com/primer/doctocat/commit/f6f56192406dd7d3144cbe1ec75955c8c383a689) [#186](https://github.com/primer/doctocat/pull/186) Thanks [@colebemis](https://github.com/colebemis)! - Make `Caption` component globally available in all markdown files as a [shortcode](https://mdxjs.com/blog/shortcodes)

* [`ea38980`](https://github.com/primer/doctocat/commit/ea38980e188f8a6eae562961b8a68c85449296dc) [#184](https://github.com/primer/doctocat/pull/184) Thanks [@colebemis](https://github.com/colebemis)! - Make `Do`, `Dont`, and `DoDontContainer` components globally available in all markdown files as [shortcodes](https://mdxjs.com/blog/shortcodes)

- [`ce82f93`](https://github.com/primer/doctocat/commit/ce82f93e026d820c282e188241b6b0807edd7a27) [#185](https://github.com/primer/doctocat/pull/185) Thanks [@colebemis](https://github.com/colebemis)! - Polish code example styles

### Patch Changes

- [`8ca48d1`](https://github.com/primer/doctocat/commit/8ca48d1b6262b54ae63654d19a74861501cdb451) [#194](https://github.com/primer/doctocat/pull/194) Thanks [@colebemis](https://github.com/colebemis)! - Fetch contributor data on deploy builds again

* [`cab38c3`](https://github.com/primer/doctocat/commit/cab38c38eb00a9645991147b28a47a535dcd1d41) [#190](https://github.com/primer/doctocat/pull/190) Thanks [@colebemis](https://github.com/colebemis)! - Make the navigation dropdown background color dark

- [`5fb29c9`](https://github.com/primer/doctocat/commit/5fb29c9000dd2a26919f661d969142fa1938d329) [#187](https://github.com/primer/doctocat/pull/187) Thanks [@mvasilkov](https://github.com/mvasilkov)! - Fix typo in an internal import

* [`cab38c3`](https://github.com/primer/doctocat/commit/cab38c38eb00a9645991147b28a47a535dcd1d41) [#190](https://github.com/primer/doctocat/pull/190) Thanks [@colebemis](https://github.com/colebemis)! - Update the navigation dropdown icon from a `chrevon` to a `caret` to follow our [progressive disclosure guidelines](https://primer.style/design/ui-patterns/progressive-disclosure#progressive-disclosure-ui-patterns)
