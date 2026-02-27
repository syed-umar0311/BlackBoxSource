import { useEffect, useRef, useState } from 'react'
import CPHTime from '../components/CPHTime'
import PageLink from '../components/PageLink'
import { waitForPageReady } from '../utils/pageReady'

const gridImagePool = [
  '/images/pic1.png',
  '/images/pic2.jpg',
  '/images/pic3.jpeg',
  '/images/pic4.png',
  '/images/pic5.jpg',
]

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5)

export default function Index() {
  const mainContentRef = useRef(null)
  const [gridCells, setGridCells] = useState(() =>
    shuffle(gridImagePool)
      .slice(0, 4)
      .map((src) => ({ src, version: 0 })),
  )

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

  useEffect(() => {
    const timers = []

    const scheduleSwap = (cellIndex) => {
      const delay = 1500 + Math.floor(Math.random() * 3000)

      const timer = setTimeout(() => {
        setGridCells((prev) => {
          const usedByOthers = new Set(
            prev.filter((_, index) => index !== cellIndex).map((cell) => cell.src),
          )
          const currentSrc = prev[cellIndex].src
          const candidates = gridImagePool.filter(
            (src) => !usedByOthers.has(src) && src !== currentSrc,
          )

          if (candidates.length === 0) return prev

          const nextSrc = pickRandom(candidates)

          return prev.map((cell, index) =>
            index === cellIndex ? { src: nextSrc, version: cell.version + 1 } : cell,
          )
        })
        scheduleSwap(cellIndex)
      }, delay)

      timers.push(timer)
    }

    for (let i = 0; i < 4; i += 1) {
      scheduleSwap(i)
    }

    return () => {
      timers.forEach(clearTimeout)
    }
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
            <div className="final-grid">
              {gridCells.map((cell, index) => (
                <div className="final-grid-cell" key={index}>
                  <img
                    key={cell.version}
                    src={cell.src}
                    alt={`BlackBox visual ${index + 1}`}
                    className="final-grid-image"
                  />
                </div>
              ))}
            </div>
            <div className="final-grid-logo-wrap">
              <img src="/images/gridlogo.jpg" alt="BlackBox mark" className="final-grid-logo" />
            </div>
            <h1 className="image-heading"></h1>
            <p className="image-para"></p>
            {/* <hr /> */}
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
