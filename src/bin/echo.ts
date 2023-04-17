export const echo = {
  description: 'Display a line of text',
  command(args: string[]): string {
    return args.join(' ')
  },
}
