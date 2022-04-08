data "newrelic_entity" "app" {
  name   = local.newrelic_browser_app_name
  domain = "BROWSER"
  type   = "APPLICATION"
}

resource "newrelic_alert_policy" "mfe_app_runtime_errors" {
  name = "Micro-FE Apps - Runtime Errors"
}

resource "newrelic_alert_channel" "team_email" {
  name = "Team Email"
  type = "email"

  config {
    recipients              = local.recipient_email
    include_json_attachment = "1"
  }
}

resource "newrelic_alert_policy_channel" "mfe_app_alert_channels" {
  policy_id   = newrelic_alert_policy.mfe_app_runtime_errors.id
  channel_ids = [newrelic_alert_channel.team_email.id]
}

resource "newrelic_nrql_alert_condition" "mfe_module_errors" {
  policy_id                    = newrelic_alert_policy.mfe_app_runtime_errors.id
  type                         = "static"
  name                         = "Micro-FE modules errors"
  description                  = "Micro-FE modules errors"
  enabled                      = true
  violation_time_limit_seconds = 3600


  nrql {
    query = "SELECT count(*) FROM JavaScriptError WHERE appName = 'mf-apps' AND moduleName = 'micro-fe-module'"
  }

  critical {
    operator              = "above"
    threshold             = 2      # number of errors
    threshold_duration    = 1 * 60 # in seconds
    threshold_occurrences = "ALL"
  }
}
resource "newrelic_nrql_alert_condition" "mfe_module_error_modals" {
  policy_id                    = newrelic_alert_policy.mfe_app_runtime_errors.id
  type                         = "static"
  name                         = "Micro-FE modules errors"
  description                  = "Micro-FE modules errors"
  enabled                      = true
  violation_time_limit_seconds = 3600


  nrql {
    query = "SELECT count(*) FROM PageAction WHERE appName = 'mf-apps' AND actionName = 'error_modal_displayed' AND moduleName = 'micro-fe-module'"
  }

  critical {
    operator              = "above"
    threshold             = 2      # number of errors
    threshold_duration    = 1 * 60 # in seconds
    threshold_occurrences = "ALL"
  }
}
