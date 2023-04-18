variable "do_token" {
  description = "DigitalOcean token"
  type      = string
  sensitive = true
}

variable "cloudflare_api_token" {
  description = "Cloudflare API token"
  type      = string
  sensitive = true
}

variable "ssh_fingerprint" {
  type        = string
  description = "The SSH key fingerprint."
}
