variable "droplet" {
  type = object({
    id     = string
    region = string
  })

  description = "The Droplet resource."
}
