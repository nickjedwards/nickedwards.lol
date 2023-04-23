import Ps1 from './Ps1'

import IHistory from '../types/History'

type Props = {
  history: IHistory[]
}

export default function History({ history }: Props) {
  return (
    <>
      {history.map((command, index) => (
        <div key={command.id}>
          <div className="mt-4 flex items-center space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow font-medium text-white text-sm">{command.command}</div>
          </div>

          <p
            className="font-medium text-white text-sm whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: command.stdout }}
          />
        </div>
      ))}
    </>
  )
}
