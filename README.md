# renovate-runner

Self-hosted [Renovate](https://docs.renovatebot.com/) runner for the entire
`go-ruby-*` fleet. A single scheduled GitHub Action autodiscovers every repo in
every `go-ruby-*` org and opens dependency-update PRs, honouring each repo's own
`renovate.json`. No per-org Renovate App install is required.

- **Config:** [`config.js`](config.js) (`autodiscover` + `go-ruby-*/**` filter).
- **Schedule:** daily 04:00 UTC (`.github/workflows/renovate.yml`), plus manual `workflow_dispatch`.
- **Token:** the `RENOVATE_TOKEN` repository secret (a PAT that can open PRs across the orgs).

`config.js` ships with `dryRun: 'full'` as a first-run safety valve — remove that
line to let Renovate open PRs and create dashboards live.
