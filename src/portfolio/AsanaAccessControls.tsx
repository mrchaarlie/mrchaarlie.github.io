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
            Enterprise customers were abandoning Asana due to confusing permission controls, directly impacting $100M+ ARR. I redesigned the access control system, achieving 99% enterprise adoption and preventing customer churn to competitors like Monday.com and Notion.
          </p>

          <div className="case-study-meta">
            <div className="meta-row">
              <span className="meta-label">Team</span>
              <span>Led design for cross-functional team of 6 (PM, data scientist, 3 engineers)</span>
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
          <img src="/images/portfolio/asana-access-control.png" alt="Asana custom field access control interface showing privacy settings and member permissions" loading="lazy" decoding="async" />
        </figure>
      </section>
      <div className="wrapper">

        <div className="content">
          <PortfolioHeader />

          <section className="case-study-section">
            <h2>The challenge</h2>

            <h3>Context & stakes</h3>

            <p>Asana's inconsistent permission system was blocking deals: Sales reported losing enterprise prospects that cited better access controls as deal-blockers, and existing customers had churned to competitors like Monday.com or ClickUp for their more robust permission models.</p>

            <p>Customer research revealed that most enterprise admins avoided putting sensitive data (eg: budgets, salaries, strategic metrics) in Asana due to permission gaps. This directly reduced platform adoption and renewal rates among our highest-value customers.
            </p>

            <figure className="case-study-figure">
              <img src="/images/portfolio/asana-access-control-example.png" alt="A table of work with the Budget column visible to all team members" loading="lazy" decoding="async" className="box-shadow" />
              <figcaption>Previously, private data like <em>Budget</em> values were visible to all project members.</figcaption>
            </figure>

            <h3>My role</h3>
            <p>I led the complete design process from research to launch, conducting 20+ customer interviews and collaborating with data science to analyze usage across all of our enterprise accounts. I designed the core permission hierarchy and flows that needed to work with Asana's entire feature ecosystem (from custom fields to AI teammates) ensuring compatibility from SMB teams to Fortune 500 organizations with 300,000+ users.
            </p>

            <figure className="case-study-figure width-80">
              <img src="/images/portfolio/asana-access-control-role.png" alt="My work on access controls affects all of Asana's features" loading="lazy" decoding="async" className="" />
              <figcaption>My work on access controls affects all of Asana's features.</figcaption>
            </figure>
          </section>

          <section className="case-study-section">
            <h2>Process</h2>

            <h3>Understanding the dependencies</h3>

            <p>Custom fields store critical business data across all enterprise accounts, but Asana's cross-project task sharing meant sensitive data (eg: budgets, strategic goals) became visible to unintended teams, blocking secure collaboration.</p>

            <p>Without more granular permissions, data in custom fields <strong>couldn't be kept private while still enabling collaboration</strong>, creating friction for cross-functional work.</p>

            <figure className="case-study-figure image-offset-16">
              <img src="/images/portfolio/asana-access-control-work-access.png" alt="A table of work with the Budget column visible to all team members" loading="lazy" decoding="async" className="" />
              <figcaption>Without permissions, sharing tasks across projects often exposes fields beyond the intended audience.</figcaption>
            </figure>

            <h3>Setting the goal</h3>

            <p>
              Beyond solving immediate access control needs, I designed a foundational permissions system that could scale across <em>Asana's entire product ecosystem</em>. We had to solve for:
            </p>

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

            {/* <figure className="case-study-figure margin-bottom-4">
              <ClickableImage
                src="/images/portfolio/asana-access-control-field-settings-a1.png"
                alt="The same modal as above, with with a privacy dropdown at the bottom that says 'Privacy: Default privacy'."
                onLightboxOpen={openLightbox}
              />
              <figcaption>Option A1: A privacy setting to the bottom of the modal.</figcaption>
            </figure> */}

            <div className="flex flex-center flex-col margin-bottom-4" style={{ width: '512px' }}>
              <video ref={videoRef} src="/videos/portfolio/asana-access-control-field-settings-2.mp4" controls muted playsInline preload="metadata" loop aria-label="Interface demonstration showing privacy control toggle that reveals granular access settings when activated" className="margin-bottom-1 box-shadow" />
              <figcaption>Option A: Use a “click to reveal” pattern to discourage unintentional use.</figcaption>
            </div>

            <figure className="case-study-figure margin-bottom-4 width-150">
              <ClickableImage
                src="/images/portfolio/asana-access-control-field-settings-b.png"
                alt="A full screen modal with multiple tabs: Overview, field definition, Usage dashboard, and Advanced settings."
                onLightboxOpen={openLightbox}
              />
              <figcaption>Option B: A full screen modal experience increases friction in a different way.</figcaption>
            </figure>

            <figure className="case-study-figure margin-bottom-4 width-150">
              <ClickableImage
                src="/images/portfolio/asana-access-control-field-settings-c.png"
                alt="A large modal with a split view, allowing the user to see all available fields, and edit the selected field with 2 tabs: Overview and Field members."
                onLightboxOpen={openLightbox}
              />
              <figcaption>Option C: A large modal with a split view offered more context for the user. </figcaption>
            </figure>

            <h4>Design validation</h4>
            <p>I tested design concepts with 20 enterprise customers and internal teams through moderated usability sessions and unmoderated surveys. The findings from these conversations would later be used to guide the final design:
            </p>

            <ul>
              <li>Simpler language outperformed technical terminology and imagery</li>
              <li>An “eye” icon resonated more than padlocks</li>
              <li>Users preferred managing visibility from the field library, not within each task</li>
            </ul>

            <p>These insights helped me to refine both the designs and the mental model, ensuring the experience felt intuitive and trustworthy.</p>

            <h4>Tradeoffs & decisions</h4>
            <p>I facilitated alignment sessions with the VP of Product and other cross-functional leadership to prioritize tradeoffs using our framework of scale, flexibility, regression risk, and user trust
            </p>

            <p>Using a weighted decision matrix, I recommended the global restrictions approach that balanced system complexity with user clarity—enabling secure collaboration without disrupting existing workflows</p>

            <figure className="case-study-figure width-80">
              <img src="/images/portfolio/asana-access-control-decision-chart.png" alt="Decision matrix plotting design complexity against user clarity, highlighting chosen global restrictions approach" loading="lazy" decoding="async" className="box-shadow" />
              <figcaption>Decision framework that prioritized user clarity over feature completeness, leading to the current restrictions framework.</figcaption>
            </figure>

            <h4>The final experience</h4>

            <div className="flex flex-center flex-col margin-bottom-4 width-130">
              <video ref={videoRef} src="/videos/portfolio/asana-access-control-final.mp4" controls muted playsInline preload="metadata" loop aria-label="A video of the final access controls experience. Approved users can view private fields, while others do not." className="margin-bottom-1 box-shadow" />
              <figcaption>Admin workflow: Restricting field visibility through column menu with confirmation dialog to prevent accidental changes.</figcaption>
            </div>


          </section>

          <section className="case-study-section">
            <h2 id="results">Results</h2>
            <p>Field-level access controls delivered measurable impact across user adoption, business metrics, and product foundation:
            </p>

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


            <p>Achieved 99% adoption among enterprise customers within 3 months, directly supporting $100M+ ARR retention. The permission framework I designed became Asana's foundation for securing AI teammates, automation rules, and future enterprise features.</p>
          </section>

          <section className="case-study-section">
            <h2 id="reflections">Reflections</h2>

            <p>Improving access controls isn't just about the UI, <strong>it's about building trust at scale.</strong></p>

            <h3>What Worked</h3>
            <p>Prioritizing simple interfaces with smart defaults proved essential for enterprise adoption. The 4-month process required 20+ design iterations and deep cross-functional to alignment to balance security requirements with Asana's collaborative philosophy.</p>

            <h3>Opportunities</h3>
            <p>Stronger upfront documentation and cross-team workshops would have accelerated adoption. Instead, I had to onboard teams one by one—a process that slowed momentum and diluted efficiency.</p>
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