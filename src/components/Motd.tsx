import { banner } from '../bin/banner'

export default function Motd() {
  const date = new Date();
  const major = new Intl.DateTimeFormat('en-US', { year: '2-digit' }).format(date);
  const minor = new Intl.DateTimeFormat('en-US', { month: '2-digit' }).format(date);
  const patch = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(date);

  return (
    <div>
      <p className="font-medium text-white text-sm">
        Welcome to Nick Edwards {`${major}.${minor}.${patch}`} LOL (NJE/Edwards 5.6.91-generic x86_64)
      </p>
      <p
        className="mt-4 text-white whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: banner.command() }}
      />
    </div>
  )
}
