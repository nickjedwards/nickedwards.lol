export default interface Bin {
  description: string
  run(args: string[]): string
}
