import Bin from "../types/Bin"

export const echo: Bin = {
  description: '\t\tDisplay a line of text',
  run(args: string[]): string {
    return args.join(' ')
  },
}
