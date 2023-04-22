import { KeyboardEvent, useEffect, useRef, useState } from 'react'

import Motd from './components/Motd'
import History from './components/History'
import Ps1 from './components/Ps1'
import { useShell } from './context/ShellContext'

export default function App() {
  const [value, setValue] = useState('')
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    execute,
    clearHistory,
    history,
    lastCommandIndex,
    setHistory,
    setLastCommandIndex
  } = useShell()

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight)
  }, [history])

  const onClickAnywhere = () => {
    inputRef.current?.focus()
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const commands: string[] = history
      .map(({ command }) => command)
      .filter((value: string) => value);

    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault()

      setHistory({
        id: Date.now(),
        command: value,
        stdout: '',
      })
      setValue('')
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault()

      clearHistory()
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();

      if (!commands.length) return

      const index: number = lastCommandIndex + 1

      if (index <= commands.length) {
        setLastCommandIndex(index);
        setValue(commands[commands.length - index])
      }
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()

      if (!commands.length) return

      const index: number = lastCommandIndex - 1

      if (index > 0) {
        setLastCommandIndex(index);
        setValue(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setValue('');
      }
    }

    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault()

      setHistory(execute(value))
      setValue('')
    }
  };

  return (
    <div ref={containerRef} className="overflow-y-auto h-full p-2" onClick={onClickAnywhere}>
      {/* Message of the day */}
      <Motd />

      {/* Command history */}
      <History history={history} />

      <div className="mt-4 font-medium text-sm">
        <label htmlFor="prompt" className="flex space-x-2">
          {/* PS1 */}
          <div className="flex-shrink">
            <Ps1 />
          </div>

          {/* Prompt */}
          <input
            ref={inputRef}
            id="prompt"
            type="text"
            className="flex-grow bg-fuchsia-950 text-white focus:outline-none"
            aria-label="prompt"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoFocus
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
          />
        </label>
      </div>
    </div>
  )
}
