# @primer/gatsby-theme-doctocat

## 4.6.1

### Patch Changes

- [`e2cd01a`](https://github.com/primer/doctocat/commit/e2cd01a79e668c21a762e82a5f1b914be0d0c5b6) [#613](https://github.com/primer/doctocat/pull/613) Thanks [@josepmartins](https://github.com/josepmartins)! - - Fix the primer navigation about link
  - Removes mono space font in the nav drawer + fontweight bold to match top left navigation

## 4.6.0

### Minor Changes

- [`02eb6b3`](https://github.com/primer/doctocat/commit/02eb6b34f8049305baa7cceb815cd085acd7d845) [#603](https://github.com/primer/doctocat/pull/603) Thanks [@josepmartins](https://github.com/josepmartins)! - Navigation updates:

  - Remove monospace font
  - Remove dark background and update link colors
  - Use UnderlineNav for top right links to provide the correct styling
  - Remove "View components" and "React components" from top and leave "Brand" and "About"

### Patch Changes

- [`ba972b1`](https://github.com/primer/doctocat/commit/ba972b167844f92a8a7c584f7cacf8f595b1db4d) [#610](https://github.com/primer/doctocat/pull/610) Thanks [@josepmartins](https://github.com/josepmartins)! - - Move the heading out of the sidebar Navigation. This fixes the extra divider on top of the navigation.
  - Remove extra space below the heading when there's no status or external links
  - Remove extra space when there's no Breadcrumbs

## 4.5.1

### Patch Changes

- [`169049b`](https://github.com/primer/doctocat/commit/169049bd3d8d43ad412e20b842144a04a97ac365) [#605](https://github.com/primer/doctocat/pull/605) Thanks [@mperrotti](https://github.com/mperrotti)! - Updates the base layout with latest designs.

## 4.5.0

### Minor Changes

- [`c5156b0`](https://github.com/primer/doctocat/commit/c5156b06c8f72ec267fb186be2705c421462f409) [#602](https://github.com/primer/doctocat/pull/602) Thanks [@mperrotti](https://github.com/mperrotti)! - Add breadcrumb nav to default layout

* [`4960db2`](https://github.com/primer/doctocat/commit/4960db2a305fe39a529585036c5943119a0c326e) [#594](https://github.com/primer/doctocat/pull/594) Thanks [@kendallgassner](https://github.com/kendallgassner)! - Add visually hidden header to the top navigation. Utilize the ActionMenu component in top nav.

## 4.4.3

### Patch Changes

- [`5f2f390`](https://github.com/primer/doctocat/commit/5f2f3903e93b6a64743c38fead16eaaa14788c4e) [#586](https://github.com/primer/doctocat/pull/586) Thanks [@camertron](https://github.com/camertron)! - Wrap root node with an SSRProvider

## 4.4.2

### Patch Changes

- [`84f8a7e`](https://github.com/primer/doctocat/commit/84f8a7e6b64b431a620b59e5dcb54366ccc3f5c6) [#565](https://github.com/primer/doctocat/pull/565) Thanks [@kendallgassner](https://github.com/kendallgassner)! - Accessibility improvements

## 4.4.1

### Patch Changes

- [`2dbdb69`](https://github.com/primer/doctocat/commit/2dbdb69562a13e600a994063fd2736cacde68d45) [#560](https://github.com/primer/doctocat/pull/560) Thanks [@colebemis](https://github.com/colebemis)! - Move heading permalinks to after headings

* [`d3ddb0a`](https://github.com/primer/doctocat/commit/d3ddb0afac5ce764b8fab261e1f90ed0235b7798) [#548](https://github.com/primer/doctocat/pull/548) Thanks [@maximedegreve](https://github.com/maximedegreve)! - Remove `Command line` from the `Design` menu since it's now merged in guidelines.

- [`2883499`](https://github.com/primer/doctocat/commit/2883499f9309af8a6388f053541d45ad3b94d570) [#550](https://github.com/primer/doctocat/pull/550) Thanks [@maximedegreve](https://github.com/maximedegreve)! - Remove `Mobile` from the `Design` menu since it's now merged in our guidelines.

* [`a8fd12e`](https://github.com/primer/doctocat/commit/a8fd12ec0bcfeb35604936ef89707f279ed7ee52) [#561](https://github.com/primer/doctocat/pull/561) Thanks [@colebemis](https://github.com/colebemis)! - Miscellaneous accessibility improvements

## 4.4.0

### Minor Changes

- [`cdd5f08`](https://github.com/primer/doctocat/commit/cdd5f08e47905ec3224dd9843974ecb711f95235) [#541](https://github.com/primer/doctocat/pull/541) Thanks [@maximedegreve](https://github.com/maximedegreve)! - Remove news from the menu

## 4.3.0

### Minor Changes

- [`9c0bbf5`](https://github.com/primer/doctocat/commit/9c0bbf509eec35361739ad12d8acec309e2b57f9) [#534](https://github.com/primer/doctocat/pull/534) Thanks [@colebemis](https://github.com/colebemis)! - Add support for two levels of nesting in `nav.yml`:

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

## 4.2.3

### Patch Changes

- [`f9ce48f`](https://github.com/primer/doctocat/commit/f9ce48f9133dbc01193a0f76c1b8323ff1af2d97) [#512](https://github.com/primer/doctocat/pull/512) Thanks [@josepmartins](https://github.com/josepmartins)! - - Use `rails` and `dotfilled` for rails-link and status-label component. cc @ashygee
  - Adjust spacing between status labels and source links in layout

* [`a43a1d3`](https://github.com/primer/doctocat/commit/a43a1d3913a4edb554194c751a2d33f47dd73545) [#514](https://github.com/primer/doctocat/pull/514) Thanks [@josepmartins](https://github.com/josepmartins)! - Bump component-metadata to v0.5.1

## 4.2.2

### Patch Changes

- [`da5c046`](https://github.com/primer/doctocat/commit/da5c04600843876e6b905fa439d8cd8ee73bdf91) [#501](https://github.com/primer/doctocat/pull/501) Thanks [@josepmartins](https://github.com/josepmartins)! - Adjust accessibilty labels content

## 4.2.1

### Patch Changes

- [`6c4da9e`](https://github.com/primer/doctocat/commit/6c4da9e5787862460972b2af75a27e5909093a05) [#498](https://github.com/primer/doctocat/pull/498) Thanks [@colebemis](https://github.com/colebemis)! - Fix live examples disappearing on hard reload

## 4.2.0

### Minor Changes

- [`2aed832`](https://github.com/primer/doctocat/commit/2aed832beb012ec20767a9226c03aa1bcb12af5d) [#481](https://github.com/primer/doctocat/pull/481) Thanks [@josepmartins](https://github.com/josepmartins)! - - Add accessibility reviewed Label in the Layout
  - Add Rails + React links to cover design guidelines needs

### Patch Changes

- [`9b62706`](https://github.com/primer/doctocat/commit/9b62706dddf3fea68a44f29d3763198ba3d57dd6) [#485](https://github.com/primer/doctocat/pull/485) Thanks [@josepmartins](https://github.com/josepmartins)! - - Ad superscript component
  - Basic style for footnotes section
  - Table styles
  - Add sizes prop to StatusLabel component

* [`61c5587`](https://github.com/primer/doctocat/commit/61c55874443fdb02873d6c47b1c931b4d3362231) [#460](https://github.com/primer/doctocat/pull/460) Thanks [@josepmartins](https://github.com/josepmartins)! - Adjust Sidebar to use fixed `width`

- [`9d39774`](https://github.com/primer/doctocat/commit/9d397746fdeb3a6d3131304183400e1e1f4139c5) [#468](https://github.com/primer/doctocat/pull/468) Thanks [@josepmartins](https://github.com/josepmartins)! - - Add a11yReviewed frontmatter data to onPostBuild static files

## 4.1.0

### Minor Changes

- [`8a4cd71`](https://github.com/primer/doctocat/commit/8a4cd719954443991fbb53e642e62c04839fc7ac) [#476](https://github.com/primer/doctocat/pull/476) Thanks [@jonrohan](https://github.com/jonrohan)! - Adding support for a Lookbook link

## 4.0.1

### Patch Changes

- [`1e22900`](https://github.com/primer/doctocat/commit/1e229008d374b8b56d19ce33f315256c4301efb4) [#434](https://github.com/primer/doctocat/pull/434) Thanks [@rezrah](https://github.com/rezrah)! - - Updated external links in frontmatter to open in new tab
  - Added support for Figma links in frontmatter

* [`9585e40`](https://github.com/primer/doctocat/commit/9585e40d62b0bfcb8aff6d98cdd490b5058f6748) [#475](https://github.com/primer/doctocat/pull/475) Thanks [@JoshBowdenConcepts](https://github.com/JoshBowdenConcepts)! - Adding Primer Brand link to the main navigation

## 4.0.0

### Major Changes

- [`1022d1c`](https://github.com/primer/doctocat/commit/1022d1c92588f1e4fed4bdacec30fd5d11256412) [#362](https://github.com/primer/doctocat/pull/362) Thanks [@siddharthkp](https://github.com/siddharthkp)! - Drop support for node 12

* [`5f4426c`](https://github.com/primer/doctocat/commit/5f4426cc0cec6201600241bc753e5c7c9bf188a6) [#427](https://github.com/primer/doctocat/pull/427) Thanks [@colebemis](https://github.com/colebemis)! - Items in [`nav.yml`](https://primer.style/doctocat/usage/customization#side-navigation) that contain `children` no longer render as links, meaning the `url` property will be ignored.

  ```diff
  # nav.yml
  – title: Components
  - url: /components
    children:
     — title: Avatar
       url: /Avatar
  ```

### Patch Changes

- [`facde5a`](https://github.com/primer/doctocat/commit/facde5a56119b160f98b8b01302e3508392c2146) [#330](https://github.com/primer/doctocat/pull/330) Thanks [@siddharthkp](https://github.com/siddharthkp)! - Vertically-center align images in table

## 3.3.0

### Minor Changes

- [`82bd051`](https://github.com/primer/doctocat/commit/82bd051ab35e5939a9ad5a3e89c26e2a63ce5df2) [#376](https://github.com/primer/doctocat/pull/376) Thanks [@vdepizzol](https://github.com/vdepizzol)! - New visual styles for Do/Dont components

### Patch Changes

- [`0d35f17`](https://github.com/primer/doctocat/commit/0d35f17a34ebfc468e15a23783a55379b8f0e125) [#402](https://github.com/primer/doctocat/pull/402) Thanks [@ichelsea](https://github.com/ichelsea)! - Added underlines to links in markdown documents

## 3.2.1

### Patch Changes

- [`1c0ca36`](https://github.com/primer/doctocat/commit/1c0ca368ed9a61ac79eb6e47ff7208c0d5b038d2) [#361](https://github.com/primer/doctocat/pull/361) Thanks [@colebemis](https://github.com/colebemis)! - Refactor internals to not use deprecated Primer React components

* [`ac6de57`](https://github.com/primer/doctocat/commit/ac6de57fdf7629eb74b9246f6ac62f97bca0d4a4) [#334](https://github.com/primer/doctocat/pull/334) Thanks [@siddharthkp](https://github.com/siddharthkp)! - Upgrade from `@primer/components@30.0.0` to `@primer/react@34.5.0`

## 3.2.0

### Minor Changes

- [`438eadb`](https://github.com/primer/doctocat/commit/438eadbae21b14c246ca7f6c9f405a1c4a00728a) [#332](https://github.com/primer/doctocat/pull/332) Thanks [@siddharthkp](https://github.com/siddharthkp)! - Support function for `live-code-scope`

## 3.1.1

### Patch Changes

- [`45e8748`](https://github.com/primer/doctocat/commit/45e8748a547903b8f7091fafb5b13e5c197b0dae) [#324](https://github.com/primer/doctocat/pull/324) Thanks [@rezrah](https://github.com/rezrah)! - Only add pages that have `componentId` and `status` to `components.json`

## 3.1.0

### Minor Changes

- [`3767651`](https://github.com/primer/doctocat/commit/37676515f1d7485ca7b5e932e115d96e3ef0285b) [#318](https://github.com/primer/doctocat/pull/318) Thanks [@colebemis](https://github.com/colebemis)! - Add a step to build process that will output a static `components.json` file with component status info if the site that its building has markdown files containing `componentId` frontmatter.

## 3.0.1

### Patch Changes

- [`ff74ece`](https://github.com/primer/doctocat/commit/ff74ecea1b373469034c2122d94a54ca3e964158) [#301](https://github.com/primer/doctocat/pull/301) Thanks [@jfuchs](https://github.com/jfuchs)! - Removed styled system prop usage on Primer React components.

## 3.0.0

### Major Changes

- [`c2037d8`](https://github.com/primer/doctocat/commit/c2037d8352fca4ce3055e801b365d4ff1b5eefe9) [#295](https://github.com/primer/doctocat/pull/295) Thanks [@colebemis](https://github.com/colebemis)! - Remove checklist feature

### Minor Changes

- [`a94e0a9`](https://github.com/primer/doctocat/commit/a94e0a962e8013901e4285c7a3cabc3a0b691a92) [#294](https://github.com/primer/doctocat/pull/294) Thanks [@colebemis](https://github.com/colebemis)! - You can now make custom React components globally available (no import required) to all markdown files in your site.

### Patch Changes

- [`31a62df`](https://github.com/primer/doctocat/commit/31a62dfb7eb7a467a4e03a991adad995564ae4d1) [#262](https://github.com/primer/doctocat/pull/262) Thanks [@SferaDev](https://github.com/SferaDev)! - Fix scroll flickering of table of contents

* [`9972de8`](https://github.com/primer/doctocat/commit/9972de88224e1b868dad051abe62a92daf8796ef) [#291](https://github.com/primer/doctocat/pull/291) Thanks [@jonrohan](https://github.com/jonrohan)! - Fix release

## 2.1.0

### Minor Changes

- [`9ddaa08`](https://github.com/primer/doctocat/commit/9ddaa08395a5d08fc0cd6f7dc0de4d1e19252fa7) [#267](https://github.com/primer/doctocat/pull/267) Thanks [@colebemis](https://github.com/colebemis)! - Add support for checklists. See the [checklists](https://primer.style/doctocat/usage/checklists) documentation for more details.

### Patch Changes

- [`43a78eb`](https://github.com/primer/doctocat/commit/43a78eb93e453f9659488c125f7e5889633b3540) [#254](https://github.com/primer/doctocat/pull/254) Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump axios from 0.19.2 to 0.21.2

* [`a730972`](https://github.com/primer/doctocat/commit/a7309725faa1636d7e53a5d63c65007bbe340e53) [#258](https://github.com/primer/doctocat/pull/258) Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump tmpl from 1.0.4 to 1.0.5

- [`5efe933`](https://github.com/primer/doctocat/commit/5efe93324e3b078cac84c41cbec7de4ee9c2c800) [#216](https://github.com/primer/doctocat/pull/216) Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump socket.io from 2.3.0 to 2.4.1

* [`6dcddf2`](https://github.com/primer/doctocat/commit/6dcddf2bd77019251b058c5e3081d815f7eaafed) [#256](https://github.com/primer/doctocat/pull/256) Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump prismjs from 1.22.0 to 1.25.0

## 2.0.0

### Major Changes

- [`c9e3209`](https://github.com/primer/doctocat/commit/c9e32094a6dbccc7f9d48cfa9202a2d1aa7fe7d3) [#260](https://github.com/primer/doctocat/pull/260) Thanks [@colebemis](https://github.com/colebemis)! - Update from `@primer/components` v20.0.0 to v30.0.0 which includes a migration to the new [functional color variables](https://primer.style/primitives/color).

## 1.8.1

### Patch Changes

- [`605a4bf`](https://github.com/primer/doctocat/commit/605a4bf013b12593888bbcf4c9b8d30ba03172f9) [#255](https://github.com/primer/doctocat/pull/255) Thanks [@SferaDev](https://github.com/SferaDev)! - Update mobile table of contents border color

## 1.8.0

### Minor Changes

- [`7502f6c`](https://github.com/primer/doctocat/commit/7502f6ce137485ce162c6082067070b576279701) [#251](https://github.com/primer/doctocat/pull/251) Thanks [@colebemis](https://github.com/colebemis)! - Add [Contribute](https://primer.style/contribute) to global navigation

## 1.7.0

### Minor Changes

- [`fa4fb2e`](https://github.com/primer/doctocat/commit/fa4fb2eed2eeb003ee3294f61b456005c03e5c1e) [#239](https://github.com/primer/doctocat/pull/239) Thanks [@colebemis](https://github.com/colebemis)! - Auto-populate title and description when valid `componentId` frontmatter variable is defined

## 1.6.0

### Minor Changes

- [`6aafb95`](https://github.com/primer/doctocat/commit/6aafb95bd47f611cffd7b6c5c6528343c53b42e3) [#225](https://github.com/primer/doctocat/pull/225) Thanks [@colebemis](https://github.com/colebemis)! - Reduce table of contents depth (only list `h2`s)

* [`31d9e8c`](https://github.com/primer/doctocat/commit/31d9e8cfe93d997a154928829b49c5d2f60dc35e) [#217](https://github.com/primer/doctocat/pull/217) Thanks [@srt32](https://github.com/srt32)! - Update supported statuses

  ```diff
  - New, Experimental, Review, Stable, Deprecated
  + Alpha, Beta, Stable, Deprecated
  ```

### Patch Changes

- [`c97e4ed`](https://github.com/primer/doctocat/commit/c97e4ed348cde43e7da638fd77893317d3db0ee4) [#224](https://github.com/primer/doctocat/pull/224) Thanks [@colebemis](https://github.com/colebemis)! - Replace `>` with `/` in the header

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

* [`cab38c3`](https://github.com/primer/doctocat/commit/cab38c38eb00a9645991147b28a47a535dcd1d41) [#190](https://github.com/primer/doctocat/pull/190) Thanks [@colebemis](https://github.com/colebemis)! - Update the navigation dropdown icon from a `chevron` to a `caret` to follow our [progressive disclosure guidelines](https://primer.style/design/ui-patterns/progressive-disclosure#progressive-disclosure-ui-patterns)
