export const git = {
  description: '\t\tThe stupid content tracker',
  command(args: string[]): string {
    setTimeout(() => window.open('https://github.com/nickjedwards'), 1000)

    return 'Opening Github'
  },
}
