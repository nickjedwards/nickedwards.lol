export const email = {
  description: 'SpamAssassin',
  command(args: string[]): string {
    setTimeout(() => window.open('mailto:developer@endever.com.au?subject=LOL!'), 1000)

    return 'Opening email client';
  },
}
