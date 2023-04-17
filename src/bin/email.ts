export const email = {
  description: '\t\tSpamAssassin',
  command(args: string[]): string {
    setTimeout(() => window.open('mailto:developer@endever.com.au?subject=LOL!'), 1000)

    return 'Opening email client';
  },
}
