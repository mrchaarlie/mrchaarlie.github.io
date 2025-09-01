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

            <figure className="case-study-figure width-80">
              <img src="/images/portfolio/asana-access-control-rule-example.png" alt="A rule template that says 'When Trigger, check if Condidtion, then do Action'. However when the condition isn't visible anymore, does the actions still run?" loading="lazy" decoding="async" className="box-shadow" />
              <figcaption>An example of needing to be flexible: rules that use private fields need to continue working even when a user doesn't have access to the field.</figcaption>
            </figure>

            <h3>Designing the system</h3>

            <h4>The starting point</h4>
            <p>Here's what the intial access settings for custom fields looked like. It lacked the granularity needed for secure collaboration.</p>

            <figure className="case-study-figure width-80">
              <img src="/images/portfolio/asana-access-control-field-settings-0.png" alt="An access settings modal for a custom field, with a section for invitations and a list of members." loading="lazy" decoding="async" className="" />
              <figcaption>The starting point for the redesign</figcaption>
            </figure>

            <h4>Explorations</h4>
            <p>I explored several different designs for the access settings, each with varying benefits and drawbacks.</p>

            <figure className="case-study-figure margin-bottom-4">
              <ClickableImage
                src="/images/portfolio/asana-access-control-field-settings-a1.png"
                alt="The same modal as above, with with a privacy dropdown at the bottom that says 'Privacy: Default privacy'."
                onLightboxOpen={openLightbox}
              />
              <figcaption>Option A1: A privacy setting to the bottom of the modal.</figcaption>
            </figure>

            <div className="flex flex-center flex-col margin-bottom-4" style={{ width: '512px' }}>
              <video ref={videoRef} src="/videos/portfolio/asana-access-control-field-settings-2.mp4" controls muted playsInline preload="metadata" loop aria-label="A video of the same modal, with a label and button that says 'Default privacy. Change'. Clicking the button reveals the same dropdown as in Option A1'." className="margin-bottom-1 box-shadow" />
              <figcaption>Option A2: Use a “click to reveal” pattern to discourage unintentional use.</figcaption>
            </div>

            <figure className="case-study-figure margin-bottom-4 width-150">
              <ClickableImage
                src="/images/portfolio/asana-access-control-field-settings-b.png"
                alt="A full screen modal with multiple tabs: Overview, field definition, Usage dashboard, and Advanced settings."
                className="width-130"
                onLightboxOpen={openLightbox}
              />
              <figcaption>Option B: A full screen modal experience increases friction in a different way.</figcaption>
            </figure>

            <figure className="case-study-figure margin-bottom-4 width-150">
              <ClickableImage
                src="/images/portfolio/asana-access-control-field-settings-c.png"
                alt="A large modal with a split view, allowing the user to see all available fields, and edit the selected field with 2 tabs: Overview and Field members."
                className="width-130"
                onLightboxOpen={openLightbox}
              />
              <figcaption>Option C: A large modal with a split view offered more context for the user. </figcaption>
            </figure>

            <h4>Design validation</h4>
            <p>I bought these designs (or variations of them) to various users, including 20 enterprise customers and internal teams. The findings were then integrated into the final design:</p>

            <ul>
              <li>Simpler language outperformed technical terminology and imagery</li>
              <li>An “eye” icon resonated more than padlocks</li>
              <li>Users preferred managing visibility from the field library, not within each task</li>
            </ul>

            <p>These insights helped me to refine both the designs and the mental model, ensuring the experience felt intuitive and trustworthy.</p>

            <h4>Tradeoffs & decisions</h4>
            <p>Further iterations were made, this time considering the impact to Asana's core features and workflows. We aligned with product and engineering leadership to navigate key tradeoffs, leveraging the key objectives set earlier around scale, flexibility, regression risk, and trust.</p>

            <p>Ultimately, I ended up with a design that pritoritzed compatibility with other features without overcomplicating the experience. A decision matrix was used to help the team make the final call.</p>

            <figure className="case-study-figure width-80">
              <img src="/images/portfolio/asana-access-control-decision-chart.png" alt="A line chart with complexity on the x-axis and user  clarity on the y-axis. There are various solutions with an 'X', and Global restrictions is checked." loading="lazy" decoding="async" className="box-shadow" />
              <figcaption>A simplified graph that showed how I ended up with the ultimate design.</figcaption>
            </figure>

            <h4>The final experience</h4>

            <div className="flex flex-center flex-col margin-bottom-4 width-130">
              <video ref={videoRef} src="/videos/portfolio/asana-access-control-final.mp4" controls muted playsInline preload="metadata" loop aria-label="A video of the final access controls experience. Approved users can view private fields, while others do not." className="margin-bottom-1 box-shadow" />
            </div>


          </section>

          <section className="case-study-section">
            <h2 id="results">Results</h2>
            <p>The launch of field-level visibility had significant impact across both product usage and business outcomes.</p>

            <div className="metrics-table-card box-shadow">
              <table ref={tableRef} className="metrics-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th className="text-align-right">Goal</th>
                    <th className="text-align-right">Beta results</th>
                    <th className="text-align-right">GA results</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Adoption rate</td>
                    <td className="text-align-right">30%+</td>
                    <td className="text-align-right">40%</td>
                    <td className="text-align-right"><strong>99%</strong></td>
                  </tr>
                  <tr>
                    <td>CSAT</td>
                    <td className="text-align-right">80%+</td>
                    <td className="text-align-right">80%</td>
                    <td className="text-align-right"><strong>90%</strong></td>
                  </tr>
                  <tr>
                    <td>Unblocked enterprise use cases</td>
                    <td className="text-align-right">✅</td>
                    <td className="text-align-right">✅</td>
                    <td className="text-align-right"><strong>✅</strong></td>
                  </tr>
                  <tr>
                    <td>Establish a scalable permissions foundation</td>
                    <td className="text-align-right">✅</td>
                    <td className="text-align-right">🟠</td>
                    <td className="text-align-right"><strong>✅</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>


            <p>Feature adoption was significant, with 99% of enterprise customers using the new functionality, impacting over <strong>$100M in ARR</strong>. Additionally, the access control patterns are now being implemented in other product areas like rules and AI teammates, making it a foundational piece of the product.</p>
          </section>

          <section className="case-study-section">
            <h2 id="reflections">Reflections</h2>

            <p>Improving access controls isn't just about the UI, <strong>it's about building trust at scale.</strong></p>

            <h3>What Worked</h3>
            <p>Simple interfaces and clear defaults are crucial when designing for scale. But arriving at that destination takes time, cross-functional collaboratoin, and countless iterations.</p>

            <h3>Opportunities</h3>
            <p>Better internal documentation and knowledge-shares would have reduced ambiguity and confusion during rollout and planning. Other teams especially benefit from this since they're not directly involved in this work, often with different timelines and priorities.</p>
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