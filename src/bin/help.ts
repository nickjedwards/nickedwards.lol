import * as bin from './index'

export function help() {
  const commands = Object.keys(bin).sort().join(', ');

  // return `Available commands:\n${commands}\n\n[ctrl+l]\t clear terminal.\n[ctrl+c]\t cancel command.`;

  return `
Usage:
  command [arguments]

Available commands:
  banner\t Display the header
  help\t\t Display this help message

[ctrl+l]\t clear terminal
[ctrl+c]\t cancel command
`.trim()
}
