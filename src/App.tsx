import { KeyboardEvent, useRef, useState } from 'react'

import Motd from './components/Motd'
import History from './components/History'
import Ps1 from './components/Ps1'
import { useShell } from './context/ShellContext';

export default function App() {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { execute, clearHistory, history,  setHistory } = useShell();

  const onClickAnywhere = () => {
    inputRef.current?.focus()
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault()

      setHistory(value, '')
      setValue('')
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault()

      clearHistory()
    }

    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault()

      execute(value)

      setValue('')
    }
  };

  return (
    <div className="h-full p-2" onClick={onClickAnywhere}>
      {/* Message of the day */}
      <Motd />

      {/* Command history */}
      <History history={history} />

      <div className="mt-4 flex space-x-2 font-medium text-sm">
        {/* PS1 */}
        <label htmlFor="prompt" className="flex-shrink">
          <Ps1 />
        </label>

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
      </div>
    </div>
  )
}
