import Bin from "../types/Bin"

export const git: Bin = {
  description: '\t\tThe stupid content tracker',
  run(args: string[]): string {
    setTimeout(() => window.open('https://github.com/nickjedwards'), 1000)

    return 'Opening Github'
  },
}
