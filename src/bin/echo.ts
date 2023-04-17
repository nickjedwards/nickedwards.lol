export const echo = {
  description: '\t\tDisplay a line of text',
  command(args: string[]): string {
    return args.join(' ')
  },
}
