provider "digitalocean" {
  token = var.do_token
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

module "droplet" {
  source = "./modules/droplet"

  ssh_fingerprint = var.ssh_fingerprint
}

module "network" {
  source = "./modules/network"

  droplet = module.droplet.droplet
}

module "dns" {
  source = "./modules/dns"

  domain_name  = "nickedwards.lol"
  ipv4_address = module.network.floating_ip.ip_address
}

resource "digitalocean_project" "nickedwards-lol" {
  name        = "nickedwards.lol"
  description = "It's-a me"
  purpose     = "Just trying out DigitalOcean"
  environment = "Production"
}

resource "digitalocean_project_resources" "nickedwards-lol" {
  project   = digitalocean_project.nickedwards-lol.id
  resources = [
    module.droplet.droplet.urn,
    module.network.floating_ip.urn
  ]
}
