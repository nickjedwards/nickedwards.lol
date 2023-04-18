resource "cloudflare_zone" "dns_zone" {
  account_id = "4cb9e6ec6b7dd5c70d1a9345d23f8ac6"
  zone       = var.domain_name
  plan       = "free"
  jump_start = true
}

resource "cloudflare_record" "root_A" {
  zone_id = cloudflare_zone.dns_zone.id
  name    = "@"
  value   = var.ipv4_address
  type    = "A"
  proxied = true
}

resource "cloudflare_record" "www_CNAME" {
  zone_id = cloudflare_zone.dns_zone.id
  name    = "www"
  value   = cloudflare_zone.dns_zone.zone
  type    = "CNAME"
  proxied = true
}
