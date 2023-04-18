resource "digitalocean_droplet" "web" {
  image      = "ubuntu-22-10-x64"
  name       = "web-syd1-1"
  region     = "syd1"
  size       = "s-1vcpu-1gb"
  monitoring = true
  ssh_keys   = [var.ssh_fingerprint]
  tags       = ["production", "web"]
}
