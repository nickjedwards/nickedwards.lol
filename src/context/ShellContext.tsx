import { ReactElement, createContext, useContext, useState } from 'react'

import * as bin from '../bin'
import { History } from '../types/History'

type Context = {
  clearHistory: () => void
  execute: (setCommand: string) => void
  history: History[]
  setHistory: (command: string, stdout: string) => void
}

type Stderr = {
  stderr: string
}

type Props = {
  children: ReactElement;
}

const ShellContext = createContext<Context>({
  clearHistory() {},
  execute(command: string) {},
  history: [],
  setHistory(command: string, stdout: string) {},
})

export function useShell() {
  return useContext(ShellContext);
}

export default function ShellProvider({ children }: Props) {
  const [history, _setHistory] = useState<History[]>([])

  const setHistory = (command: string, stdout: string) => {
    _setHistory((previous) => [
      ...previous,
      {
        id: previous.length,
        date: new Date(),
        command,
        stdout,
      },
    ])
  }

  const clearHistory = () => {
    _setHistory([])
  }

  const execute = (command: string) => {
    const [executable, ...args] = [Date.now().toString(), command].slice(1)

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
            stdout = bin[executable]()
          } catch (error) {
            stdout = (error as Stderr).stderr
          }
        }
    }

    setHistory(executable, stdout);
  };

  return <ShellContext.Provider value={{ clearHistory, execute, history, setHistory }}>{children}</ShellContext.Provider>
}
