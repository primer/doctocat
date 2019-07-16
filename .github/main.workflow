workflow "Publish" {
  on = "push"
  resolves = ["publish"]
}

action "install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "yarn"
  args = "install"
}

action "publish" {
  uses = "primer/publish@master"
  needs = ["install"]
  secrets = ["GITHUB_TOKEN", "NPM_AUTH_TOKEN"]
  args = "--dir=packages/gatsby-theme-primer"
}
