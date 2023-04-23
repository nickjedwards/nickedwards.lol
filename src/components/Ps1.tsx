import { useState } from "react"

export default function Ps1() {
  const [hostname] = useState(() => window.location.hostname)

  return (
    <>
      <span className="font-medium text-green-500 text-sm">guest@{hostname}</span>
      <span className="font-medium text-white text-sm">:</span>
      <span className="font-medium text-blue-500 text-sm">~</span>
      <span className="font-medium text-white text-sm">$</span>
    </>
  )
}
