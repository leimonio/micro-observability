terraform {
  required_version = "> 0.13.0"

  required_providers {
    newrelic = {
      source  = "newrelic/newrelic"
      version = "~> 2.21"
    }
  }
}

provider "newrelic" {
  account_id = local.newrelic_account_id
  api_key    = local.newrelic_api_key
  region     = "EU"
}
