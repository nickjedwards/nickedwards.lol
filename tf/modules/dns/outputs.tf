output "A_fqdn" {
  value       = cloudflare_record.root_A.hostname
  description = "The FQDN of the record."
}

output "CNAME_fqdn" {
  value       = cloudflare_record.www_CNAME.hostname
  description = "The FQDN of the record."
}
