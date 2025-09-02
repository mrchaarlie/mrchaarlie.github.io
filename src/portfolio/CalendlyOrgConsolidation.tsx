import PortfolioHeader from '../components/PortfolioHeader'
import Lightbox, { ClickableImage } from '../components/Lightbox'
import SiteFooter from '../components/SiteFooter'
import { useEffect, useRef, useState } from 'react'

export default function CalendlyOrgConsolidation() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean
    imageSrc: string
    imageAlt: string
    caption?: string
  }>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    caption: ''
  })

  const openLightbox = (imageSrc: string, imageAlt: string, caption?: string) => {
    setLightbox({ isOpen: true, imageSrc, imageAlt, caption })
  }

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imageSrc: '', imageAlt: '', caption: '' })
  }
  // Autoplay/pause when in view
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        try { el.play().catch(() => { }) } catch { }
      } else {
        el.pause()
      }
    }, { threshold: [0, 0.5, 1] })
    observer.observe(el)
    return () => { observer.disconnect(); el.pause() }
  }, [])
  
  return (
    <article className="case-study">
      <section className="case-study-hero">
        <h1 className="case-study-title">Calendly Org Consolidation Tool</h1>
        <div className="case-study-summary">
          <p className="case-study-lead">
            Enterprise M&A activity and organic growth left customers with fragmented Calendly accounts, creating security risks and operational inefficiencies. I designed an automated consolidation tool that reduced Customer Success workload by 75% while giving enterprise admins complete migration control.
          </p>

          <div className="case-study-meta">
            <div className="meta-row">
              <span className="meta-label">Team</span>
              <span>Led design for cross-functional team of 5 (PM, 3 engineers)
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Skills</span>
              <span className="pills">
                <span className="pill">Compliance & security</span>
                <span className="pill">Enterprise tooling</span>
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Impact</span>
              <span>
                <strong>75%</strong> reduction in CSM task time<br />
                <strong>88%</strong> admin satisfaction
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Date</span>
              <span>Q1 2023</span>
            </div>
          </div>

        </div>

        <figure className="case-study-figure">
          <img src="/images/portfolio/calendly-org-hero.webp" alt="" loading="lazy" decoding="async" />
        </figure>
      </section>

      <div className="wrapper">
        <div className="content">
          <PortfolioHeader />

          <section className="case-study-section">
            <h2>The challenge</h2>

            <h3>Enterprise consolidation pain points</h3>

            <p>Corporate M&A activity and decentralized software adoption created a critical operational problem: enterprise customers had multiple fragmented Calendly organizations across departments, business units, and acquired companies.</p>

            <p>Customer Success teams spent 10+ hours per consolidation, manually migrating accounts, and enterprise admins lacked visibility into the process. This created security vulnerabilities, billing inefficiencies, and frustrated customers during critical business transitions.</p>

            <h3>Business impact</h3>
            <p>The manual process was unsustainable as Calendly moved upmarket:</p>
            <ul>
              <li><strong>CSM bandwidth:</strong> dozens of consolidation requests annually, each requiring weeks of coordination</li>
              <li><strong>Customer risk:</strong> Delayed migrations during M&A integration timelines</li>
              <li><strong>Security gaps:</strong> Temporary dual-access periods increased compliance risks</li>
            </ul>

            {/* <h3>Setting the goals</h3>
            <p>We aimed to bring two key changes:</p>
            <ul>
              <li>Automate the migration process, reducing the CSM team's time spent on each migration</li>
              <li>Enhance the customer experience by offering more visibility, updates, and control over the migration process</li>
            </ul> */}

          </section>

          <section className="case-study-section">
            <h2>The process</h2>

            <h3>Service design approach</h3>
            <p>I mapped the end-to-end consolidation journey across three user types: Customer Success Managers, enterprise admins, and end users. This service blueprint revealed critical handoff points where automation could reduce manual touchpoints while maintaining admin control.</p>

            <figure className="case-study-figure margin-bottom-4 width-150">
              <ClickableImage
                src="/images/portfolio/calendly-org-service-blueprint.webp"
                alt="A service blueprint that outlines the various users, actions, and interactions involved in the process."
                onLightboxOpen={openLightbox}
              />
              <figcaption>The full service blueprint that I designed, which outlines the various users, actions, and interactions involved in the process.</figcaption>
            </figure>

            <h3>Cross-application user flows</h3>
            <p>The consolidation process required seamless coordination between internal CSM tools and customer-facing admin dashboards. I designed connected experiences that kept all stakeholders informed while maintaining security protocols throughout the migration.</p>



            <figure className="case-study-figure width-130 margin-bottom-4">
              <img src="/images/portfolio/calendly-org-step-1.webp" alt="An image of an internal tool that allows a CSM to begin a migration process." loading="lazy" decoding="async" className="box-shadow" />
              <figcaption><strong>CSM initiation:</strong> Internal tool enables Customer Success to prepare migrations after admin approval</figcaption>
            </figure>

            <figure className="case-study-figure width-130 margin-bottom-4">
              <img src="/images/portfolio/calendly-org-step-2.webp" alt="An image of the Admin dashboard in Calendly where an admin can review and process member migrations." loading="lazy" decoding="async" className="box-shadow" />
              <figcaption><strong>Admin control:</strong> Enterprise admins review pending migrations and control timing to align with business needs</figcaption>
            </figure>

            <figure className="case-study-figure width-130 margin-bottom-4">
              <img src="/images/portfolio/calendly-org-step-3.webp" alt="An email inbox where a is informed of the migration status and is given instructions on how to migrate their account." loading="lazy" decoding="async" className="box-shadow" />
              <figcaption><strong>User communication:</strong> Clear, actionable guidance helps users complete migrations independently</figcaption>
            </figure>

            <div className="flex flex-center flex-col margin-bottom-4 width-130" >
              <video ref={videoRef} src="/videos/portfolio/calendly-org-step-4.mp4" controls muted playsInline preload="metadata" loop aria-label="The migrating user can export their work in their Calendly dashboard." className="box-shadow margin-bottom-1" />
              <figcaption><strong>Data continuity:</strong> Export/import functionality ensures no scheduling data is lost during transitions</figcaption>
            </div>


          </section>

          <section className="case-study-section">
            <h2>Results</h2>

            <p>The automated consolidation tool transformed enterprise account management:</p>

            <ul>
              <li><strong>Operational efficiency:</strong> Reduced CSM time per migration from 10+ to 1-2 hours</li>
              <li><strong>Migration success:</strong> 99% completion rate with zero data loss incidents</li>
              <li><strong>Admin satisfaction:</strong> 88% CSAT, with admins highlighting improved control and transparency</li>
            </ul>

            <blockquote className="testimonial">
              "These changes will greatly speed up my workflow... and simplify communication with my customers"
              <cite>— Customer Success Manager</cite>
            </blockquote>
          
          </section>

          <section className="case-study-section">
            <h2>Reflections</h2>

            <h3>What worked</h3>
            <p>Regular collaboration with Customer Success teams provided continuous validation of design decisions. Their frontline experience with customer pain points ensured the solution addressed real operational needs rather than theoretical improvements.</p>

            <h3>Opportunities</h3>
            <p>Creating a comprehensive service blueprint earlier would have revealed cross-application dependencies sooner, potentially reducing development complexity. For future multi-stakeholder tools, I'd prioritize service design documentation to align technical and business requirements upfront.</p>
          </section>
        </div>
      </div>

      <Lightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        imageSrc={lightbox.imageSrc}
        imageAlt={lightbox.imageAlt}
        caption={lightbox.caption}
      />
    </article>
  )
} 