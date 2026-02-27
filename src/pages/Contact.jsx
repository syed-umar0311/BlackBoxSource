import { useEffect, useRef } from 'react'
import CPHTime from '../components/CPHTime'
import PageLink from '../components/PageLink'
import { waitForPageReady } from '../utils/pageReady'

const marqueeItems = [
  'Say Hello',
  'Say Hola',
  'Say Hej',
  'Say Olá',
  'Say Bonjour',
  'Say Ciao',
  'Say Hallo',
  'Say Cześć',
  'Say Salve',
  'Say হ্যালো',
  'Say 你好',
  'Say Merhaba',
]

export default function Contact() {
  const mainContentRef = useRef(null)

  useEffect(() => {
    let isMounted = true
    const loader = document.getElementById('loader')
    const mainContent = mainContentRef.current

    const showPageWhenReady = async () => {
      if (mainContent) mainContent.style.opacity = '0'
      await waitForPageReady(mainContent)
      if (!isMounted) return

      if (loader) loader.style.display = 'none'
      if (mainContent) mainContent.style.opacity = '1'
    }

    showPageWhenReady()

    return () => {
      isMounted = false
    }
  }, [])

  const marqueeContent = marqueeItems.map((text, i) => (
    <span key={i}>
      {text}
      {i < marqueeItems.length - 1 ? <span className="separator">|</span> : ''}
      {' '}
    </span>
  ))

  return (
    <>
      <div
        id="main-content"
        className="contact-page"
        ref={mainContentRef}
        style={{ opacity: 0, transition: 'opacity 1s ease' }}
      >
        <header className="contact-header">
          <nav className="navbar-con">
            <h1 className="con-nav-head">
              <PageLink to="/" className="page-transition">
                BLACKBOXSOURCING
              </PageLink>
            </h1>
            <div className="nav-left-con">
              <PageLink to="/work" className="page-transition">
                Work®
              </PageLink>
              <PageLink to="/service" className="page-transition">
                Our Story
              </PageLink>
              <a href="#" style={{ pointerEvents: 'none', color: 'gray', textDecoration: 'none' }}>
                Contact
              </a>
            </div>
            <CPHTime />
          </nav>
        </header>

        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-text">{marqueeContent}</div>
            <div className="marquee-text">{marqueeContent}</div>
          </div>
        </div>

        <div className="con-foot">
          <div className="con-foot-in">
            <p className="con-in-p">
              We're always looking for amazing clients to work with – drop us a mail and you will
              hear from us as soon as possible.
            </p>
          </div>
          <div className="con-foot-inn">
            <div className="con-inner">
              <h5 className="con-inner-h1">BUSINESS INQUIRIES</h5>
              <p className="con-inner-p">
                <a className="con-inner-p" href="mailto:sayhello@blackboxsourcing.com">
                  sayhello@blackboxsourcing.com
                </a>
              </p>
            </div>
            <div className="con-inner">
              <h5 className="con-inner-h1">GENERAL</h5>
              <p className="con-inner-p">
                <a className="con-inner-p" href="mailto:sayhello@blackboxsourcing.com">
                  management@blackboxsourcing.com
                </a>
              </p>
            </div>
            <div className="con-inner">
              <h5 className="con-inner-h1">CALL US</h5>
              <p className="con-inner-p">- - -</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
