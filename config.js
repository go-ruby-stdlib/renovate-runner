// Self-hosted Renovate config for the whole go-ruby-* fleet.
// Autodiscovers every repo owned by a go-ruby-* org and honours each repo's own
// renovate.json (which extends that org's .github/default.json). One runner,
// no per-org GitHub App install.
module.exports = {
  platform: 'github',
  gitAuthor: 'tannevaled <tannevaled@users.noreply.github.com>',  // account blocks pushes exposing a non-noreply email
  autodiscover: true,
  autodiscoverFilter: ['go-ruby-*/**'],
  onboarding: false,          // every repo already ships a renovate.json
  requireConfig: 'optional',  // process a repo even if it has no renovate.json
  dependencyDashboard: true,  // a "Dependency Dashboard" issue per repo


  // Fleet throttles so a live run trickles rather than floods.
  prConcurrentLimit: 10,
  prHourlyLimit: 10,
  branchConcurrentLimit: 20,

  // Collapse the noise: one PR per repo for all GitHub Actions bumps, and one for
  // the MkDocs docs toolchain, instead of a separate PR per action / per package.
  packageRules: [
    {
      matchManagers: ['github-actions'],
      groupName: 'github actions',
      groupSlug: 'github-actions',
    },
    {
      matchManagers: ['pip_requirements', 'pip-compile', 'pep621', 'poetry'],
      groupName: 'docs toolchain (mkdocs)',
      groupSlug: 'docs-mkdocs',
    },
  ],
};
