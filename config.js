// Self-hosted Renovate config for the whole go-ruby-* fleet.
// Autodiscovers every repo owned by a go-ruby-* org and honours each repo's own
// renovate.json (which extends that org's .github/default.json). One runner,
// no per-org GitHub App install.
module.exports = {
  platform: 'github',
  autodiscover: true,
  autodiscoverFilter: ['go-ruby-*/**'],
  onboarding: false,          // every repo already ships a renovate.json
  requireConfig: 'optional',  // process a repo even if it has no renovate.json
  dependencyDashboard: true,  // a "Dependency Dashboard" issue per repo
  // First-run safety valve: 'full' = extract + look up + report, open NO PRs and
  // create NO issues. Flip to null (delete this line) to go live.
  dryRun: 'full',
  // Fleet throttles so the first live run trickles rather than floods.
  prConcurrentLimit: 10,
  prHourlyLimit: 10,
  branchConcurrentLimit: 20,
};
