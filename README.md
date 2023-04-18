# nickedwards.lol

## Development

Install dependencies.

```sh
npm i
```

Run the development server.

```sh
npm run dev
```

## IaC

**Initialize**

Prepare the working directory for other commands.

```sh
terraform init --backend-config=backend_config.hcl
```

**plan**

Show changes required by the current configuration.

```sh
terraform plan
```

**Apply**

Create or update infrastructure.

```sh
terraform apply
```
