terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "2.27.1"
    }

    cloudflare = {
        source  = "cloudflare/cloudflare"
        version = "4.3.0"
    }
  }
  backend "s3" {
    endpoint                    = "syd1.digitaloceanspaces.com"
    key                         = "iac/terraform.tfstate"
    bucket                      = "nickedwards.lol"
    region                      = "ap-southeast-2"
    skip_credentials_validation = true
    skip_metadata_api_check     = true
  }
}
