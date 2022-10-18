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
    account_id = var.newrelic_account_id
    api_key    = var.newrelic_api_key
    region     = "EU"
}
