import { useState } from "react"

export default function Ps1() {
  const [hostname] = useState(() => window.location.hostname)

  return (
    <>
      <span className="text-green-500">guest@{hostname}</span>
      <span className="text-white">:</span>
      <span className="text-blue-500">~</span>
      <span className="text-white">$</span>
    </>
  )
}
