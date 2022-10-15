variable "newrelic_account_id" {
  type        = string
  description = "The new relic account id."
}

variable "newrelic_api_key" {
  type        = string
  description = "The new relic api key for terraform integration."
}

variable "newrelic_app_name" {
  type        = string
  description = "The new relic app name."
}

variable "newrelic_alert_email" {
  type        = string
  description = "The recipient email in case of a new relic alert."
}