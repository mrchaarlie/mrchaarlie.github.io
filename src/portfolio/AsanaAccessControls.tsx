import PortfolioHeader from '../components/PortfolioHeader'
import Lightbox, { ClickableImage } from '../components/Lightbox'

import { useEffect, useRef, useState } from 'react'

export default function AsanaAccessControls() {
  const tableRef = useRef<HTMLTableElement | null>(null)
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

  useEffect(() => {
    const el = tableRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-visible')
        io.disconnect()
      }
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <article className="case-study">
      <section className="case-study-hero">
        <h1 className="case-study-title">Asana Access Controls</h1>
        <div className="case-study-summary">
          <p className="case-study-lead">
            Asana’s complicated permission system was confusing for enterprise customers, causing them to leave or choose competitors. I redesigned the access controls to make permissions clear and predictable, helping organizations manage access easily and securely at scale.
          </p>

          <div className="case-study-meta">
            <div className="meta-row">
              <span className="meta-label">Team</span>
              <span>1 Product designer (me), 1 PM, 1 Data scientist, 3 Engineers</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Skills</span>
              <span className="pills">
                <span className="pill">Enterprise scale</span>

                <span className="pill">Systems architecture</span>
                <span className="pill">Access controls</span>
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Impact</span>
              <span>
                <strong>99%</strong> enterprise adoption<br />
                <strong>$100M+</strong> ARR influenced<br />
                <strong>90%</strong> CSAT
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Date</span>
              <span>H2 2024</span>
            </div>
          </div>
        </div>

        <figure className="case-study-figure">
          <img src="/images/portfolio/asana-access-control.png" alt="Asana access controls redesign preview" loading="lazy" decoding="async" />
        </figure>
      </section>
      <div className="wrapper">

        <div className="content">
          <PortfolioHeader />

          <section className="case-study-section">
            <h2>The challenge</h2>

            <h3>Context & stakes</h3>
            <p>Asana’s permission system had grown inconsistently across product areas, creating serious problems for enterprise adoption. <strong>Customers were leaving for competitors with clearer access controls, and new deals stalled when buyers compared us to more structured solutions.</strong></p>

            <p>Admins often had to choose between settings that were <em>too restrictive</em> or <em>too permissive</em>, with many complaints that Asana’s model was “too open.” Sensitive fields like <em>Budgets</em> couldn’t be locked down, creating real risk of data leaks. As a result, high-risk data stayed out of Asana, reducing enterprise usage, reliance, and trust.</p>

            <figure className="case-study-figure">
              <img src="/images/portfolio/asana-access-control-example.png" alt="A table of work with the Budget column visible to all team members" loading="lazy" decoding="async" className="box-shadow" />
              <figcaption>Previously, private data like <em>Budget</em> values were visible to all project members.</figcaption>
            </figure>

            <h3>My role</h3>
            <p>As the lead product designer, I owned the end-to-end experience from discovery to launch. I conducted customer interviews, analyzed usage patterns with our data scientist, and translated complex technical constraints into intuitive user flows. My responsibilities included designing the permission hierarchy, ensuring compatibility with all of Asana’s work objects (projects, portfolios, custom fields, etc), and ensuring the system worked for small teams up to Fortune 500 organizations.</p>

            <figure className="case-study-figure width-80">
              <img src="/images/portfolio/asana-access-control-role.png" alt="My work on access controls affects all of Asana's features" loading="lazy" decoding="async" className="" />
              <figcaption>My work on access controls affects all of Asana's features.</figcaption>
            </figure>
          </section>

          <section className="case-study-section">
            <h2>Process</h2>

            <h3>Understanding the dependencies</h3>

            <p>Custom fields often hold key data in Asana. They’re embedded in tasks, projects, and portfolios, and are visible to anyone with access to the task. </p>

            <p>Because work in Asana is shared across teams (like marketing and accounting, or product and sales), tasks can appear in multiple projects. When that happens, fields from one project may become visible to another team.</p>

            <p>Without more granular permissions, sensitive data in custom fields <strong>can’t be kept private while still enabling collaboration</strong>, creating friction for cross-functional work.</p>

            <figure className="case-study-figure image-offset-16">
              <img src="/images/portfolio/asana-access-control-work-access.png" alt="A table of work with the Budget column visible to all team members" loading="lazy" decoding="async" className="" />
              <figcaption>Without permissions, sharing tasks across projects often exposes fields beyond the intended audience.</figcaption>
            </figure>

            <h3>Setting the goal</h3>

            <p>
              Our team’s objective wasn’t just about adding granular visibility settings; it was <em>building a scalable system</em>. We had to solve for:</p>

            <ul>
              <li><strong>Scale:</strong> supporting thousands of fields across the company</li>
              <li><strong>Flexibility:</strong> adapting to rules, templates, AI teammates, and more</li>
              <li><strong>Regression risk:</strong> being compatible with millions of existing tasks using fields</li>
              <li><strong>Trust:</strong> preventing unexpected access changes from eroding trust or disrupting workflows</li>
            </ul>

            <h3>Designing the system</h3>

            <h4>The starting point</h4>
            <p>Here's what the intial access settings for custom fields looked like. It lacked the granularity needed for secure collaboration.</p>

            <figure className="case-study-figure width-80">
              <img src="/images/portfolio/asana-access-control-field-settings-0.png" alt="The starting point for the redesign" loading="lazy" decoding="async" className="" />
              <figcaption>The starting point for the redesign</figcaption>
            </figure>
            
            <h4>Explorations</h4>
            <p>I explored several different designs for the access settings, each with varying benefits and drawbacks.</p>
            
            <figure className="case-study-figure margin-bottom-4">
              <ClickableImage
                src="/images/portfolio/asana-access-control-field-settings-1.png"
                alt="Option A1: A privacy setting to the bottom of the modal."
                onLightboxOpen={openLightbox}
              />
              <figcaption>Option A1: A privacy setting to the bottom of the modal.</figcaption>
            </figure>

            <div className="flex flex-center flex-col margin-bottom-4" style={{ width: '512px' }}>
              <video ref={videoRef} src="/videos/portfolio/asana-access-control-field-settings-2.mp4" controls muted playsInline preload="metadata" aria-label="Option A2: Use a “click to reveal” pattern to discourage unintentional use." className="margin-bottom-1 box-shadow" />
              <figcaption>Option A2: Use a “click to reveal” pattern to discourage unintentional use.</figcaption>
            </div>

            <figure className="case-study-figure margin-bottom-4 width-130">
              <ClickableImage
                src="/images/portfolio/asana-access-control-field-settings-3.png"
                alt="Option B: A full screen modal with multiple tabs: Overview, field definition, Usage dashboard, and Advanced settings."
                className="width-130"
                onLightboxOpen={openLightbox}
              />
              <figcaption>Option B: A full screen modal experience increases friction in a different way.</figcaption>
            </figure>

            <h4>Tradeoffs & Decisions</h4>
            <ul>
              <li><strong>Fewer roles vs. flexibility:</strong> We consolidated roles to reduce cognitive load, adding scoped overrides for edge cases.</li>
              <li><strong>Backwards compatibility:</strong> Legacy roles mapped to the nearest new role; we surfaced a review step for impactful changes.</li>
              <li><strong>Progressive disclosure:</strong> Advanced options moved behind clear affordances to keep the primary path simple.</li>
            </ul>
          </section>

          <section className="case-study-section">
            <h2 id="results">Results</h2>
            <p>The redesign measurably improved clarity and speed for administrators and reduced frustrating access errors for end users.</p>

            <div className="metrics-table-card box-shadow">
              <table ref={tableRef} className="metrics-table">
                <thead>
                  <tr>
                    <th>Goal</th>
                    <th>Beta metrics</th>
                    <th>GA metrics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Increase task completion rate</td>
                    <td>+12%</td>
                    <td><strong>+18%</strong></td>
                  </tr>
                  <tr>
                    <td>Reduce permission error rate</td>
                    <td>-22%</td>
                    <td><strong>-37%</strong></td>
                  </tr>
                  <tr>
                    <td>Shorten admin time-to-complete</td>
                    <td>-14%</td>
                    <td><strong>-28%</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="case-study-section">
            <h2 id="reflections">Reflections</h2>

            <h3>What Worked</h3>
            <p>Unifying roles across scopes paid off in comprehension and speed. Previewing the impact of changes was especially effective at preventing mistakes.</p>

            <h3>Opportunities</h3>
            <p>Expand audit surfaces and add guided fixes for the most common errors. Extend role previews to bulk operations and templates.</p>
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