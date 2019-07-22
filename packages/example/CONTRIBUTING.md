# Contributing

If you've made it this far, thank you! We appreciate your contribution and hope that this document helps you along the way. If you have any questions or problems, don't hesitate to [file an issue](https://github.com/primer/gatsby-theme-primer/issues/new).

## Local development

Run the following commands to begin local development:

_Note: These steps require [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com) to be set up locally._

```shell
# Clone the repository
git clone https://github.com/primer/gatsby-theme-primer.git
cd gatsby-theme-primer

# Install the dependencies
yarn

# Start the development server
yarn workspace example develop

# Navigate to http://localhost:8000 in your browser
```

## File structure

```
.
├── packages
│   ├── gatsby-theme-primer
│   └── example
├── package.json
└── now.json
```

- `packages/gatsby-theme-primer/`: This directory contains the code for the [Gatsby Theme](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) and is what gets published to npm.
- `packages/example/`: This directory contains the code for the example site. The example site serves as the documentation site for Doctocat and can also be used to test changes to the theme locally.
- `package.json`: This file defines the [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) for the project and is not meant to be published.
- `now.json`: This file configures the deployment of the example site. Check out the [now.json docs](https://zeit.co/docs/v2/deployments/configuration/?query=now.json) for more information.

## Scripts

The example site has a few [npm scripts](https://docs.npmjs.com/misc/scripts) for developing and building the site. You can run these scripts from the root directory using the [`yarn workspace`](https://yarnpkg.com/lang/en/docs/cli/workspace/) command:

```shell
yarn workspace example <script-name>
```

### `develop`

Starts Gatsby's hot-reloading development environment on http://localhost:8000. This is likely the only script you will run manually.

### `build`

Builds the site for deployment and places the output in `public/`.

### `now-build`

Builds the site for [Now](https://zeit.co/now) deployment. You will never have to run `now-build` manually. Check out the [`@now/static-build` docs](https://zeit.co/docs/v2/advanced/builders/static-build-now-static-build) for more information.

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in this repository.

Guidelines for bug reports:

1. Use the GitHub issue search – check if the issue has already been reported.
2. Check if the issue has been fixed – try to reproduce it using the latest version of the extension.
3. Isolate the problem – find a way to demonstrate your issue. Provide either screenshots or code samples to show you problem.

A good bug report shouldn't leave others needing to chase you down for more information. Please try to be as detailed as possible in your report.

- What is your environment?
- What steps will reproduce the issue?
- What browser(s) versions experience the problem?
- What would you expect to be the outcome?

All these details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
> 4. Attach screenshots, etc.
>
> Any other information you want to share that is relevant to the issue being reported.

## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to _you_ to make a strong case to convince the project's developers of the merits of this feature.
Please provide as much detail and context as possible.

## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic help.
They should remain focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant pull request (e.g. implementing features, refactoring code),
otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

Please adhere to the coding conventions used throughout a project (indentation, accurate comments, etc.) and any other requirements (such as test coverage).

Follow this process if you'd like your work considered for inclusion in the project:

- [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:

```shell
# Clone your fork of the repository
git clone https://github.com/<your-username>/gatsby-theme-primer

# Navigate to the newly cloned directory
cd gatsby-theme-primer

# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/primer/gatsby-theme-primer
```

- If you cloned a while ago, get the latest changes from upstream:

```shell
git checkout master
git pull upstream master
```

- Create a new topic branch (off of the `master` branch) to contain your feature, change, or fix:

```sh
git checkout -b <topic-branch-name>
```

- Install the dependencies:

```bash
yarn
```

- Start Gatsby's hot-reloading development environment:

```bash
yarn workspace example develop
# The example site will now be accessible from http://localhost:8000
```

- Commit your changes in logical chunks. You can use Git's [interactive rebase](https://help.github.com/articles/interactive-rebase) feature to tidy up your commits before making them public.

* Locally merge (or rebase) the upstream development branch into your topic branch:

```bash
git pull [--rebase] upstream master
```

- Push your topic branch up to your fork:

```bash
git push origin <topic-branch-name>
```

- [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description.
