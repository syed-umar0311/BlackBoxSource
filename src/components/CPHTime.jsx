import { useState, useEffect } from 'react'

export default function CPHTime() {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Europe/Copenhagen',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }
      const formatter = new Intl.DateTimeFormat([], options)
      const timeString = formatter.format(new Date())
      const [hours, minutes] = timeString.split(':')
      setTime(`${hours}:${minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="nav-right">
      PKT {time.split(':')[0]}
      <span className="blink">:</span>
      {time.split(':')[1] || '--'}
    </span>
  )
}
