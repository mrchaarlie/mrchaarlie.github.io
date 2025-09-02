import PortfolioHeader from '../components/PortfolioHeader'
import Lightbox, { ClickableImage } from '../components/Lightbox'
import { useEffect, useRef, useState } from 'react'

export default function CalendlyAnalytics() {
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
      <section className="case-study-hero">
        <h1 className="case-study-title">Calendly Analytics</h1>
        <div className="case-study-summary">
          <p className="case-study-lead">Rising churn among enterprise customers threatened Calendly's upmarket strategy, as teams couldn't demonstrate ROI from scheduling tools. I designed the scheduling industry's first comprehensive analytics dashboard, achieving 90% adoption and directly supporting retention goals
          </p>

          <div className="case-study-meta">
            <div className="meta-row">
              <span className="meta-label">Team</span>
              <span>Led design for cross-functional team of 5 (PM, content designer, 2 engineers)
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
              <span>
                <strong>90%</strong> adoption rate<br />
                <strong>85%</strong> CSAT<br />
                <strong>41%</strong> increase in engagement
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Date</span>
              <span>H1 2022</span>
            </div>
          </div>
        </div>

        <figure className="case-study-figure">
          <img src="/images/portfolio/thumbnail-calendly-analytics-1.png" alt="Calendly Analytics dashboard showing scheduling metrics, charts, and team performance data" loading="lazy" decoding="async" className="box-shadow" />
        </figure>
      </section>

      <div className="wrapper">
        <div className="content">

          <PortfolioHeader />

          <section className="case-study-section">
            <h2>The challenge</h2>
            <p>Post-COVID churn rates were climbing as enterprise customers struggled to demonstrate Calendly's ROI during budget reviews.Customer Success reported that 60%+ of at-risk accounts cited 'lack of usage visibility' as a primary concern, directly threatening renewal conversations.</p>

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
              <li><strong>Satisfaction:</strong> 70%+ CSAT</li>
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

            <p>I conducted competitive analysis of over 10 scheduling platforms and interviewed 30 enterprise customers. Research revealed that <strong>users needed actionable insights, not just raw metrics</strong>, to drive decision-making:</p>

            <ol>
              <li><strong>Exploration mattered</strong> → Make the dashboard interactive, with filters and defaults</li>
              <li><strong>Data should be shareable</strong> → Charts must look clear at any size, with lightweight UI</li>
              <li><strong>Customization was key</strong> → Let users choose what metrics to display</li>
            </ol>

            <img src="/images/portfolio/calendly-analytics-research.png" alt="Logo grid of competitors" loading="lazy" decoding="async" />

            <h3>Information Architecture</h3>
            <p>I defined Analytics' placement in Calendly's navigation for scalability, collaborating with the navigation team for seamless integration.</p>

            <figure className="case-study-figure margin-bottom-4 width-150">
              <ClickableImage
                src="/images/portfolio/calendly-analytics-info-arch.png"
                alt="Information architecture explorations"
                onLightboxOpen={openLightbox}
              />
              <figcaption>Different layout explorations for the Analytics dashboard.</figcaption>
            </figure>


            <h3>Chart System</h3>
            <p>To manage the range of chart types, I created a standardized design system for consistency and clarity across the team. Collaborating with engineering and product, we prioritized the most essential chart types to maintain performance while keeping the experience focused and intuitive.</p>

            <figure className="case-study-figure margin-bottom-4 width-150">
              <ClickableImage
                src="/images/portfolio/calendly-analytics-chart-system.png"
                alt="Decision tree for selecting appropriate chart types based on data visualization needs"
                className="box-shadow"
                onLightboxOpen={openLightbox}
              />
              <figcaption>A flow diagram for different charts to use and their use cases.</figcaption>
            </figure>

            <h3>Design iterations</h3>
            <p>We explored multiple directions before arriving at the final design:</p>

            <div className="grid grid-cols-2 gap-4 margin-bottom-3 width-130">
              <figure className="flex flex-center flex-col margin-left-0 margin-right-0 ">
                <ClickableImage
                  src="/images/portfolio/calendly-analytics-wireframe.png"
                  alt="Wireframe of the dashboard"
                  onLightboxOpen={openLightbox}
                />
                <figcaption>Early wireframe of the dashboard.</figcaption>
              </figure>
              <figure className="flex flex-center flex-col margin-left-0 margin-right-0 ">
                <ClickableImage
                  src="/images/portfolio/calendly-analytics-lofi.png"
                  alt="A lo-fi design that explored a alternate layout without the use of cards"
                  onLightboxOpen={openLightbox}
                />
                <figcaption>A lo-fi design that explored a alternate layout without the use of cards.</figcaption>
              </figure>
            </div>

            <div className="flex flex-center flex-col width-130">
              <video ref={videoRef} src="/videos/portfolio/calendly-analytics-video.mp4" controls muted playsInline preload="metadata" aria-label="The final design that was handed off to engineering" className="margin-bottom-1 box-shadow" />
              <figcaption>Analytics dashboard demo showing filtering, data exploration, and chart customization features</figcaption>
            </div>

          </section>

          <section className="case-study-section">

            <h2>Results</h2>
            <p>Alpha launched in 4 months with 200 beta customers, leading to GA release that exceeded all success metrics:</p>

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
                    <td className="text-align-right">40%</td>
                    <td className="text-align-right">53%</td>
                    <td className="text-align-right"><strong>90%</strong></td>
                  </tr>
                  <tr>
                    <td>Retention rate</td>
                    <td className="text-align-right">50%</td>
                    <td className="text-align-right">52%</td>
                    <td className="text-align-right"><strong>75%</strong></td>
                  </tr>
                  <tr>
                    <td>CSAT</td>
                    <td className="text-align-right">70%</td>
                    <td className="text-align-right">82%</td>
                    <td className="text-align-right"><strong>83%</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The feature avoided the feared contraction risk; conversely, we found that Analytics users showed 15% higher expansion rates, proving that usage visibility strengthened rather than weakened customer relationships.</p>

            <blockquote className="testimonial box-shadow">
              <p>“<strong>I really love it. It's reduced my workload so much</strong>...<br />I just send the visuals [to execs] as is”</p>
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
      </div>

      <Lightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        imageSrc={lightbox.imageSrc}
        imageAlt={lightbox.imageAlt}
        caption={lightbox.caption}
      />
    </article >
  )
} 