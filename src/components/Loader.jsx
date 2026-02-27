export default function Loader({ show }) {
  return (
    <div
      id="loader"
      className={show ? 'show' : ''}
      style={{
        display: show ? 'flex' : 'none',
        opacity: show ? 1 : 0,
        animation: show ? 'slideIn 0.6s ease-out forwards' : 'none',
      }}
    >
      <img src="/images/Logo.jpg" alt="" style={{ width: 200, height: 200 }} />
      <div className="loaderr" />
    </div>
  )
}
