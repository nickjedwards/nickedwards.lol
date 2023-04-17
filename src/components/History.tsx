import Ps1 from './Ps1'

import { History as IHistory } from '../types/History';

type Props = {
  history: IHistory[]
}

export default function History({ history }: Props) {
  return (
    <>
      {history.map((command, index) => (
        <div key={command.command + index}>
          <div className="mt-4 flex space-x-2 font-medium text-sm">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow text-white">{command.command}</div>
          </div>

          <p
            className="text-white whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: command.stdout }}
          />
        </div>
      ))}
    </>
  )
}
