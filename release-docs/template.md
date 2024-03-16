# Check For Flooding Release

* Version: {{ version }}
* Proposed Release Date: {{ date }}
* Jira Release Overview: https://eaflood.atlassian.net/projects/FSR/versions/{{ id }}/tab/release-report-all-issues

## Tickets

{{#tickets}}
- {{ . }}
{{/tickets}}

## Instructions

# renumber and delete as appropriate
1 - Execute LFW_{STAGE}_02_UPDATE_DATABASE
1 - Execute LFW_{STAGE}_04_UPDATE_FLOOD_APP_AND_SERVICE_PIPELINE

Execute smoke tests and forward results