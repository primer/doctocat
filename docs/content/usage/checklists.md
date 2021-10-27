---
title: Checklists
description: Improve the consistency of your project and documentation using checklists.
---

Doctocat has first-class support for checklists on documentation pages via Markdown frontmatter.

```yml
---
documentationChecklist:
  hasTitle: true
  hasDescription: true
  hasExamples: false
  hasApiReference: false
---

```

[show example of checklist in docs]

## Usage

To understand how checklists work in Doctocat, let's create a documentation checklist. In this example scenerio, we have a collection of pages documenting UI components and we expect all of these pages to include the following content:

- Title
- Description
- Examples
- API reference

We'll use a checklist to make these expectations visible.

### Create a checklist schema

First, we'll need to describe the structure of our checklist by creating a checklist schema. Checklist schema files (`.schema.js`) must live in a `src/@primer/gatsby-theme-doctocat/src/checklists/` directory. In our case, we'll create `documentation.schema.js`:

<!-- NOTE: should schema files be in TypeSript? -->

```js
// @primer/gatsby-theme-doctocat/src/checklists/documentation.schema.js

module.exports = {
  title: 'Documentation checklist',
  items: {
    hasTitle: {
      description: 'Title',
    },
    hasDescription: {
      description: 'Description',
    },
    hasExamples: {
      description: 'Examples',
    },
    hasApiReference: {
      description: 'API reference',
    },
  },
}
```

Checklists schema files are JavaScript files that export an object that describes the structure of a checklist. Let's checkout the dive deeper into the structure of the schema:

- `title` (`string`): Give your checklist a title. This becomes the heading of the checklist on documentation pages.
- `items` (`{ [checklistItemId: string]: { description: string } }`): Define the checklist items. Each item must have a unique `id` and a `description`.

<Note variant="warning">Checklist schema files must use CommonJS-style exports.</Note>

### Use a checklist

Now in any markdown file in our Doctocat site, we can use our documentation checklist via frontmatter:

```yml
---
documentationChecklist:
  hasTitle: true
  hasDescription: true
  hasExamples: false
  hasApiReference: false
---

```

The name `documentationChecklist` corresponds to the name of the checklist schema (`documentation.schema.js`). The value is an object with a key for each checklist item. The value of each key is a boolean indicating whether or not the item should be checked.

When checklist frontmatter is present in a markdown file, the checklist will be rendered on the bottom of the page:

[show example of checklist]

<Note variant="warning">All keys from the checklist schema must be present in the checklist. If a key is not present, the site will fail to build. This ensures that you don't accidently forget to check an item.</Note>

### Group checklist items

<!-- I'm still a little unsure about this API -->

In our example scenerio, we now want to group checklist items by status. Specifically, we want to make it clear that title and description are required for all components with `Alpha` status. Examples and API reference documentation are required to move to `Beta` status.

[show example of grouped checklist]

To accomplish this we'll need to update our checklist schema:

<!-- NOTE: `status` seems like the wrong name -->

```diff
// @primer/gatsby-theme-doctocat/src/checklists/accessibility.schema.js

module.exports = {
  title: 'Documentation checklist',
+ metadata: {
+  componentStatus: ['Alpha', 'Beta', 'Stable'],
+ },
+ groubBy: 'componentStatus',
  items: {
    hasTitle: {
      description: 'Title',
+     componentStatus: 'Alpha',
    },
    hasDescription: {
      description: 'Description',
+     componentStatus: 'Alpha',
    },
    hasExamples: {
      description: 'Examples',
+     componentStatus: 'Beta',
    },
    hasApiReference: {
      description: 'API reference',
+     componentStatus: 'Beta',
    },
  },
}
```

- `metadata` (`{ [key: string]: Array<string> }`): Define metadata that can be added to checklist items.

- `groupBy` (`string | undefined`): Define a metadata property that will be used to group checklist items.

## Built-in checklists

Doctocat includes the following checklist schemas by default:

### `component` checklist

A collection of maturity criteria for Primer components.

<!-- TODO: add component stable criteria to component checklist -->

```
---
componentChecklist:
  dependenciesReviewed: false
---
```

### Extend built-in checklists

Use Gatsby [file shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/#any-source-file-is-shadowable) and [deepmerge](#) to extend any built-in checklist schemas:

```js
// src/@primer/gatsby-theme-doctocat/src/checklists/component.schema.js

const merge = require('deepmerge')
const componentChecklistSchema = require('@primer/gatsby-theme-doctocat/src/checklists/component.schema')

module.exports = merge(componentChecklistSchema, {
  items: {
    treeshakable: {
      description: 'Component is tree-shakable',
      status: 'alpha',
    },
  },
})
```
