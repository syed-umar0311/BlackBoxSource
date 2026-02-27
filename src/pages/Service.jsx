import { useEffect, useRef } from 'react'
import CPHTime from '../components/CPHTime'
import PageLink from '../components/PageLink'
import { waitForPageReady } from '../utils/pageReady'

export default function Service() {
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

  return (
    <>
      <div
        id="main-content"
        ref={mainContentRef}
        style={{ opacity: 0, transition: 'opacity 1s ease' }}
      >
        <div className="animate">
          <header>
            <nav className="navbar-service">
              <h1 className="service-nav-head">
                <PageLink to="/">BLACKBOXSOURCING</PageLink>
              </h1>
              <div className="nav-left-service">
                <PageLink to="/work" className="nav-link page-transition">
                  Work®
                </PageLink>
                <a href="#" style={{ pointerEvents: 'none', color: 'gray', textDecoration: 'none' }}>
                  Our Story
                </a>
                <PageLink to="/contact" className="page-transition">
                  Contact
                </PageLink>
              </div>
              <CPHTime />
            </nav>
          </header>

          <div className="born">
            <h1 className="born-head">BORN IN DIGITAL</h1>
          </div>

          <div className="born-main">
            <div className="image-born">
              <img src="/images/ser.jpg" alt="" className="born-image" />
              <p className="born-p">INTERACTIVE DESIGNER & C0-FOUNDER</p>
            </div>
            <div className="image-born">
              <img src="/images/ser.jpg" alt="" className="born-image" />
              <p className="born-p">INTERACTIVE DESIGNER & C0-FOUNDER</p>
            </div>
            <div className="text-born">
              <h5 className="born-h5">
                A lifestyle that brings together a journey enriched by history, cultural
                experiences, travel, and influences from various interactions with diverse groups
                of individuals.
              </h5>
            </div>
          </div>

          <section className="bbx-flow-wrap">
            <div className="bbx-flow-block">
              <h2 className="bbx-flow-title">LIFESTYLE</h2>
              <h3 className="bbx-flow-sub">BLACK BOX MEANING AND LIFESTYLE</h3>
              <p className="bbx-flow-text">
                Black Box is a design-inspired apparel virtual manufacturing company, founded by
                individuals from across the globe who have experience and creativity to produce,
                design and engineer fashion keeping the simplicity yet edginess which today's
                customer demands within the realities of value pricing.
              </p>
              <p className="bbx-flow-text">
                The founders' belief in an ethical supply chain and openness to adapt fashion from
                across the globe resulted in the creation of Black Box, connecting individuals and
                stakeholders.
              </p>
            </div>

            <div className="bbx-flow-block">
              <h2 className="bbx-flow-title">THE WAY FORWARD</h2>
              <h3 className="bbx-flow-sub">BELIEVES IN REALITY</h3>
              <p className="bbx-flow-text">
                Our experience of over 13 years of fashion and retail in a continuously evolving
                environment allows us to focus on relevant trends, faster inventory cycles and value
                for the ultimate consumer.
              </p>
            </div>

            <div className="bbx-flow-block">
              <h2 className="bbx-flow-title">WE CARE</h2>
              <h3 className="bbx-flow-sub">STORY OF RESPONSIBILITY</h3>
              <p className="bbx-flow-text">
                We aspire for sustainable relationships and collaboration with the people we work
                with, the processes we abide by, and the environment and society where we are.
              </p>
              <p className="bbx-flow-text">
                Black Box Story is about sustainability, reliability, recycle and responsibility to
                the Earth.
              </p>
            </div>
          </section>

          <div className="studio-foot">
            <img src="/images/est.jpg" alt="EST 2022" className="studio-foot-img" />
          </div>
        </div>
      </div>
    </>
  )
}
