import { useEffect, useRef } from 'react'
import CPHTime from '../components/CPHTime'
import PageLink from '../components/PageLink'
import { waitForPageReady } from '../utils/pageReady'

export default function Index() {
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

  useEffect(() => {
    const h1 = document.querySelector('.title-section h1')
    if (!h1) return
    const text = h1.textContent
    h1.textContent = ''
    ;[...text].forEach((letter, i) => {
      const span = document.createElement('span')
      span.textContent = letter
      span.style.animationDelay = `${i * 0.1}s`
      h1.appendChild(span)
    })
  }, [])

  return (
    <>
      <div
        id="main-content"
        ref={mainContentRef}
        style={{ opacity: 0, transition: 'opacity 2s ease' }}
      >
        <div className="scroll-image">
          <div className="box">
            <h1 style={{ marginLeft: '-11px' }}>BOX</h1>
          </div>
          <div className="final-box" style={{ top: '170px' }}>
            <img src="/images/pic1.png" alt="BlackBox Logo" className="fix-image" />
            <h1 className="image-heading"></h1>
            <p className="image-para"></p>
            <hr />
          </div>

          <div className="index-foot">
            <div className="in-index-foot">
              <h4 className="index-foot-h4">BUSINESS INQUIRIES</h4>
              <p className="index-foot-p">
                <a className="index-foot-p" href="mailto:sayhello@blackboxsourcing.com">
                  sayhello@blackboxsourcing.com
                </a>
              </p>
            </div>
            <div className="in-index-foot">
              <h4 className="index-foot-h4">GEBERAL</h4>
              <p className="index-foot-p">
                <a className="index-foot-p" href="mailto:sayhello@blackboxsourcing.com">
                  management@blackboxsourcing.com
                </a>
              </p>
            </div>
            <div className="in-index-foot">
              <h4 className="index-foot-h4">CALL US</h4>
              <p className="index-foot-p">- - -</p>
            </div>
          </div>
        </div>

        <header>
          <nav className="navbar">
            <div className="nav-left">
              <PageLink to="/work" className="nav-link page-transition">
                Work®
              </PageLink>
              <PageLink to="/service" className="page-transition">
                Our Story
              </PageLink>
              <PageLink to="/contact" className="page-transition">
                Contact
              </PageLink>
            </div>
            <CPHTime />
          </nav>
        </header>

        <main>
          <div className="title-section">
            <h1>BLACK </h1>
          </div>

          <div className="description">
            <p>
              <img src="/images/TabLogo.jpg" alt="" className="inline-logo" />
              delivering end-to-end supply chain solutions for global fashion brands. We
              specialize in denim, knits, and workwear, managing everything from fabric
              development and sampling to bulk production, quality control, and on-time
              delivery. With a strong network of vetted mills and manufacturers, we ensure
              transparency, efficiency, and consistent product excellence.
              <br />
              <br />
              <b>
                <i>
                  Turning concepts into commercially viable collections with precision and
                  reliability.
                </i>
              </b>
            </p>
          </div>

          <div className="index-foot index-foot-mobile">
            <div className="in-index-foot">
              <h4 className="index-foot-h4">BUSINESS INQUIRIES</h4>
              <p className="index-foot-p">
                <a className="index-foot-p" href="mailto:sayhello@blackboxsourcing.com">
                  sayhello@blackboxsourcing.com
                </a>
              </p>
            </div>
            <div className="in-index-foot">
              <h4 className="index-foot-h4">GEBERAL</h4>
              <p className="index-foot-p">
                <a className="index-foot-p" href="mailto:sayhello@blackboxsourcing.com">
                  management@blackboxsourcing.com
                </a>
              </p>
            </div>
            <div className="in-index-foot">
              <h4 className="index-foot-h4">CALL US</h4>
              <p className="index-foot-p">- - -</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
