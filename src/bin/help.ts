import * as bin from './index'

export const help = {
  description: 'Display this help message',
  command(args: string[]): string {
    const commands = Object.entries(bin).map(([key, value]) => {
      return `<span class="text-green-500">${key}</span>\t${value.description}`
    }).sort()

    return `
nickedwards.lol <span class="text-green-500">1.0.0</span>

<span class="text-yellow-500">Usage:</span>
  command [arguments]

<span class="text-yellow-500">Available commands:</span>
  ${commands.join('\n  ')}

[ctrl+l]\tClear terminal
[ctrl+c]\tCancel command
`.trim()
  },
}
