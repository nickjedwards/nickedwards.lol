output "droplet" {
  value = {
    id     = digitalocean_droplet.web.id
    urn    = digitalocean_droplet.web.urn
    region = digitalocean_droplet.web.region
  }

  description = "The Droplet resource."
}
