import { useNavigate } from 'react-router-dom'

export default function PageLink({ to, children, className = '', style }) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    const loader = document.getElementById('loader')
    if (loader) {
      loader.style.display = 'flex'
      loader.style.opacity = '1'
      loader.style.animation = 'none'
      loader.offsetWidth // reflow
      loader.style.animation = 'slideIn 0.6s ease-out forwards'
    }

    navigate(to)
  }

  return (
    <a href={to} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  )
}
