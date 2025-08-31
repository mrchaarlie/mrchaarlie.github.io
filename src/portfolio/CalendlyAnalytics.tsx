import PortfolioHeader from '../components/PortfolioHeader'
import { useEffect, useRef } from 'react'

export default function CalendlyAnalytics() {
  const tableRef = useRef<HTMLTableElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

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

  // Prefer HD video on fast connections (experimental Network Information API)
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const nav: any = navigator as any
    const conn = nav?.connection || nav?.mozConnection || nav?.webkitConnection
    const saveData = !!conn?.saveData
    const effectiveType = conn?.effectiveType as string | undefined
    const downlink = typeof conn?.downlink === 'number' ? (conn.downlink as number) : undefined
    const isFast = !saveData && effectiveType === '4g' && (downlink === undefined || downlink >= 5)
    if (isFast) {
      const hdSrc = '/videos/portfolio/calendly-analytics-video-hd.mp4'
      // Only swap if not already HD
      if (!(el.currentSrc && el.currentSrc.includes(hdSrc))) {
        el.src = hdSrc
        el.load()
      }
    }
  }, [])

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
      <div className="content">
        <section className="case-study-hero">
          <h1 className="case-study-title">Calendly Analytics</h1>
          <div className="case-study-summary">
            <p className="case-study-lead">As Calendly shifted upmarket, we needed to combat churn by demonstrating clear value to customers. I led the design of the scheduling industry's first analytics dashboard, boosting retention and improving ARR growth.</p>

            <div className="case-study-meta">
              <div className="meta-row">
                <span className="meta-label">Team</span>
                <span>1 Product designer (me), 1 PM, 1 Content designer, 2 Engineers
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Skills</span>
                <span className="pills">
                  <span className="pill">0 to 1</span>
                  <span className="pill">Data viz</span>
                  <span className="pill">Design systems</span>
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Impact</span>
                <span>90% adoption rate, 85% CSAT, 41% increase in engagement
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Date</span>
                <span>H1 2022</span>
              </div>
            </div>
          </div>

          <figure className="case-study-figure">
            <img src="/images/portfolio/thumbnail-calendly-analytics-1.png" alt="Calendly Analytics dashboard screenshot" loading="lazy" decoding="async" className="box-shadow"/>
          </figure>
        </section>

        <PortfolioHeader />

        <section className="case-study-section">
          <h2>The challenge</h2>
          <p>
            Customers and account managers lacked visibility into how Calendly was being used, making it hard to quantify ROI or justify renewals. With churn rising after COVID-driven growth, retention became a company-wide priority.</p>
          <p>Our goal was clear: build the scheduling industry’s first analytics dashboard to help teams prove value, increase engagement, and improve retention.</p>

          <h3>Problem statement</h3>
          <p>In collaboration with Customer Success and Product stakeholders, we defined our problem statement:</p>

          <blockquote className="box-shadow">Account managers lacked visibility into team scheduling metrics, making it difficult to justify renewals and undermining confidence in Calendly’s long-term value.</blockquote>


          <h3>Goals</h3>
          <p>
            To align stakeholders across Product, Engineering, and Customer Success, we set 3 measurable goals:
          </p>
          <ul>
            <li><strong>Adoption:</strong> 40% of orgs with 20+ users adopt the feature</li>
            <li><strong>Retention:</strong> 50% continue using after 1 month</li>
            <li><strong>Statisfaction:</strong> 70%+ CSAT</li>
          </ul>

          <h3>Constraints</h3>
          <p>However, building Analytics posed multiple risks that our team needed to design around:</p>
          <ul>
            <li><strong>Technical:</strong> Scaling performance with large datasets, untested chart rendering</li>
            <li><strong>Product:</strong> Exposing unused seats could highlight value gaps, risking contraction</li>
            <li><strong>Design:</strong> No existing chart components—this was a true 0→1 effort requiring new patterns and systems</li>
          </ul>

        </section>

        <section className="case-study-section">
          <h2>Process</h2>

          <h3>Research & insights</h3>
          <p>
            I ran a competitive audit of scheduling software, followed by 30 discovery interviews with customers. We found users didn’t just want raw data, <strong>they wanted guidance!</strong> The insights from these interviews shaped our objectives:</p>

          <ol>
            <li><strong>Exploration mattered</strong> → Make the dashboard interactive, with filters and defaults</li>
            <li><strong>Data should be shareable</strong> → Charts must look clear at any size, with lightweight UI</li>
            <li><strong>Customization was key</strong> → Let users choose what metrics to display</li>
          </ol>

          <img src="/images/portfolio/calendly-analytics-research.png" alt="Research insights" loading="lazy" decoding="async" />

          <h3>Information Architecture</h3>
          <p>I defined Analytics' placement in Calendly's navigation for scalability, collaborating with the navigation team for seamless integration.</p>

          <figure className="case-study-figure case-study-figure--large">
            <img src="/images/portfolio/calendly-analytics-info-arch.png" alt="Information architecture" loading="lazy" decoding="async" />
            <figcaption>Different layout explorations</figcaption>
          </figure>

          <h3>Chart System</h3>
          <p>To handle diverse visualizations, I built a standardized design system for consistency, scalability, and performance—limiting initial chart types to focus the experience.</p>

          <h3>Design iterations</h3>
          <p>We explored multiple directions before arriving at the final design:</p>

          <div className="grid grid-cols-2 gap-4  margin-bottom-3">
            <div className="flex flex-center flex-col">
              <img src="/images/portfolio/calendly-analytics-wireframe.png" alt="Early wireframe of the dashboard" loading="lazy" decoding="async" />
              <figcaption>Early wireframe of the dashboard</figcaption>
            </div>
            <div className="flex flex-center flex-col">
              <img src="/images/portfolio/calendly-analytics-lofi.png" alt="A lo-fi design that explored a alternate layout without the use of cards" loading="lazy" decoding="async" />
              <figcaption>A lo-fi design that explored a alternate layout without the use of cards</figcaption>
            </div>
          </div>

          <div className="flex flex-center flex-col">
            <video ref={videoRef} src="/videos/portfolio/calendly-analytics-video.mp4" controls muted playsInline preload="metadata" aria-label="The final design that was handed off to engineering" className="margin-bottom-1 box-shadow" />
            <figcaption>The final design that was handed off to engineering</figcaption>
          </div>

        </section>

        <section className="case-study-section">

          <h2>Results</h2>
          <p>We launched Alpha within 4 months, validated with customers, and iterated through to GA. The final results far surpassed our goals:
          </p>

          <div className="metrics-table-card box-shadow">
            <table ref={tableRef} className="metrics-table">
              <thead>
                <tr>
                  <th>Goal</th>
                  <th className="text-align-right">Beta metrics</th>
                  <th className="text-align-right">GA metrics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>40% Adoption</td>
                  <td className="text-align-right">53%</td>
                  <td className="text-align-right"><strong>90%</strong></td>
                </tr>
                <tr>
                  <td>50% Retention</td>
                  <td className="text-align-right">52%</td>
                  <td className="text-align-right"><strong>75%</strong></td>
                </tr>
                <tr>
                  <td>70% CSAT</td>
                  <td className="text-align-right">82%</td>
                  <td className="text-align-right"><strong>83%</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>Crucially, there was also no measurable increase in contraction. Instead, we saw early signs of expansion among teams adopting Analytics, proving the feature strengthened retention and renewal conversations.
          </p>

          <blockquote className="testimonial box-shadow">
            <p>“<strong>I really love it. It's reduced my workload so much</strong>...I just send the visuals [to execs] as is”</p>
            <cite>—Adobe</cite>
          </blockquote>

          <blockquote className="testimonial box-shadow">
            <p>“Calendly is ahead of a lot of the other tools I use in terms of what we can get from the data.</p>
            <cite>—Halpenny Insurance</cite>
          </blockquote>

        </section>

        <section className="case-study-section">
          <h2>Reflections</h2>
          <h3>What worked</h3>
          <ol>
            <li><strong>Designing for varied data literacy levels</strong>
              <p>We had users ranging from data-savvy analysts to team leads who rarely looked at dashboards. By layering the experience—using clear defaults, approachable copy, and progressive complexity—we made Analytics useful to both audiences without overloading either.</p></li>
            <li><strong>Tight collaboration with Engineering and CS</strong>
              <p>Building a 0→1 analytics product meant constant unknowns. Partnering closely with engineers helped us pressure-test feasibility early, while ongoing input from Customer Success kept us anchored to real customer pain points. This alignment ensured we shipped something both technically sound and directly valuable.</p></li>
          </ol>
          <h3>Opportunities</h3>
          <ol>
            <li><strong>Onboarding and first-use experience</strong>
              <p>While the dashboard was intuitive once explored, new users often needed context to see its value immediately. A lightweight onboarding flow or guided highlights would have accelerated adoption and strengthened the retention curve.</p></li>
            <li><strong>Accessibility and data clarity</strong>
              <p>The product met compliance requirements, but there’s more to accessibility than checkboxes. Some charts could have communicated insights more directly with stronger color contrast, clearer labeling, and alternative views for users with visual or cognitive differences. It’s an area I’d invest in for future iterations.</p></li>
          </ol>


          
          
          
        </section>
      </div>
    </article>
  )
} 