import { useEffect, useRef } from 'react'
import CPHTime from '../components/CPHTime'
import PageLink from '../components/PageLink'
import { waitForPageReady } from '../utils/pageReady'

const workItems = [
  { img: '/images/pic1.png', overlay: 'DENIM', title: 'Denim' },
  { img: '/images/pic2.jpg', overlay: 'KNITS', title: 'Knits' },
  { img: '/images/pic3.jpeg', overlay: 'LEATHER', title: 'Leather' },
  { img: '/images/pic4.png', overlay: 'WORKWEAR', title: 'Workwear' },
  { img: '/images/pic5.jpg', overlay: 'TOWELS', title: 'Towels' },
]

export default function Work() {
  const mainContentRef = useRef(null)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 901px)').matches
    if (isDesktop) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

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
    const isDesktop = window.matchMedia('(min-width: 901px)').matches
    if (!isDesktop) return

    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let scrollTarget = scrollContainer.scrollLeft
    let isScrolling = false

    const handleWheel = (e) => {
      e.preventDefault()
      const scrollSpeed = 300
      scrollTarget += e.deltaY * scrollSpeed
      scrollTarget = Math.max(
        0,
        Math.min(scrollTarget, scrollContainer.scrollWidth - scrollContainer.clientWidth)
      )
      if (!isScrolling) {
        isScrolling = true
        requestAnimationFrame(smoothScroll)
      }
    }

    const smoothScroll = () => {
      const delta = scrollTarget - scrollContainer.scrollLeft
      scrollContainer.scrollLeft += delta * 1
      if (Math.abs(delta) > 1) {
        requestAnimationFrame(smoothScroll)
      } else {
        scrollContainer.scrollLeft = scrollTarget
        isScrolling = false
      }
    }

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <>
      <div
        id="main-content"
        ref={mainContentRef}
        style={{ opacity: 0, transition: 'opacity 1s ease' }}
      >
        <header>
          <nav className="navbar-work">
            <h1 className="work-nav-head">
              <PageLink to="/" className="page-transition">
                BLACKBOXSOURCING
              </PageLink>
            </h1>
            <div className="nav-left-work">
              <a
                href="#"
                className="nav-link"
                style={{ pointerEvents: 'none', color: 'gray', textDecoration: 'none' }}
              >
                Work®
              </a>
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
          <div className="work-scroll" id="scrollContainer" ref={scrollContainerRef}>
            {workItems.map((item, i) => (
              <div key={i} className="work-content">
                <img className="work-image" src={item.img} alt={item.title} />
                <h1 className="work-overlay">{item.overlay}</h1>
                <h1 className="work-head">{item.title}</h1>
              </div>
            ))}
          </div>
        </main>

        <footer>
          <div className="work-foot">
            <h5 className="work-foot-in">WE TRANSFORM BRAND IN TO EXPRIENCES</h5>
            <h5 className="work-foot-in">CURRENT WORK(5)</h5>
          </div>
        </footer>
      </div>
    </>
  )
}
