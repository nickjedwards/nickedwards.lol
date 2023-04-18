output "floating_ip" {
  value = {
    urn = digitalocean_floating_ip.web.urn,
    ip_address = digitalocean_floating_ip.web.ip_address
  }

  description = "The Floating (Reserved) IP resource."
}
