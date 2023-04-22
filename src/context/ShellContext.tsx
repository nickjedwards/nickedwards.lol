import { ReactElement, createContext, useContext, useState } from 'react'

import * as bin from '../bin'
import History from '../types/History'
import Bin from '../types/Bin'

type Context = {
  clearHistory(): void
  execute(command: string): History
  history: History[]
  lastCommandIndex: number
  setHistory(history: History): void
  setLastCommandIndex(index: number): void
}

type Stderr = {
  stderr: string
}

type Props = {
  children: ReactElement;
}

const ShellContext = createContext<Context>({
  clearHistory() {},
  execute: (command: string) => ({} as History),
  history: [],
  lastCommandIndex: 0,
  setHistory(history: History) {},
  setLastCommandIndex(index: number) {},
})

export function useShell() {
  return useContext(ShellContext);
}

export default function ShellProvider({ children }: Props) {
  const [history, _setHistory] = useState<History[]>([])
  const [lastCommandIndex, setLastCommandIndex] = useState<number>(0)

  const setHistory = (history: History) => {
    _setHistory((previous) => [...previous, history])
  }

  const clearHistory = () => _setHistory([])

  const execute = (command: string): History => {
    const [executable, ...args] = command.split(' ')

    let stdout = ''

    switch (executable) {
      case '':
        // Do nothing
        break

      case 'clear':
        clearHistory()
        break

      default:
        if (Object.keys(bin).indexOf(executable) === -1) {
          stdout = `Bash: command not found: ${executable}`
        } else {
          try {
            stdout = (bin as {[key: string]: Bin})[executable].run(args)
          } catch (error) {
            stdout = (error as Stderr).stderr
          }
        }
    }

    return {
      id: Date.now(),
      command,
      stdout,
    }
  };

  return (
    <ShellContext.Provider
      value={{
        clearHistory,
        execute,
        history,
        lastCommandIndex,
        setHistory,
        setLastCommandIndex
      }}>
        {children}
    </ShellContext.Provider>
  )
}
