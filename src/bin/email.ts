import Bin from "../types/Bin"

export const email: Bin = {
  description: '\t\tSpamAssassin',
  run(args: string[]): string {
    setTimeout(() => window.open('mailto:developer@endever.com.au?subject=LOL!'), 1000)

    return 'Opening email client'
  },
}
