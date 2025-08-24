import PortfolioHeader from '../components/PortfolioHeader'
import { useEffect, useRef } from 'react'

export default function CalendlyAnalytics() {
  const tableRef = useRef<HTMLTableElement | null>(null)

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
      <div className="content">
        <section className="case-study-hero">
          <h1 className="case-study-title">Calendly Analytics</h1>
          <div className="case-study-summary">
            <p className="case-study-lead">As Calendly shifted upmarket, we needed to combat churn by demonstrating clear value to customers. I led the design of the scheduling industry's first analytics dashboard, boosting retention and contributing to company ARR growth.</p>

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
            <img src="/images/portfolio/thumbnail-calendly-analytics-1.png" alt="Calendly Analytics dashboard screenshot" loading="lazy" decoding="async" />
          </figure>
        </section>

        <PortfolioHeader />

        <section className="case-study-section">
          <h2>The Problem</h2>
          <p>
            Customers and account managers lacked visibility into how Calendly was being used, making it hard to quantify ROI or justify renewals. With churn rising after COVID-driven growth, retention became a company-wide priority.</p>
          <p>Our goal was clear: build the scheduling industry’s first analytics dashboard to help teams prove value, increase engagement, and improve retention.</p>

          <h3>Problem statement</h3>
          <p>In collaboration with Customer Success and Product stakeholders, we defined:</p>

          <blockquote>“Account managers lacked visibility into team scheduling metrics, making it difficult to justify renewals and undermining confidence in Calendly’s long-term value.”</blockquote>


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
          <p>Building Analytics posed multiple risks:</p>
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
            I ran a competitive audit and 30 discovery interviews with customers and internal teams. We found users didn’t just want raw data—they wanted guidance. Key insights shaped our objectives:</p>

          <ol>
            <li><strong>Exploration mattered</strong> → Make the dashboard interactive, with filters and defaults</li>
            <li><strong>Data should be shareable</strong> → Charts must look clear at any size, with lightweight UI</li>
            <li><strong>Customization was key</strong> → Let users choose what metrics to display</li>
          </ol>

          <h3>Information Architecture</h3>
          <p>I defined Analytics' placement in Calendly's navigation for scalability, collaborating with the navigation team for seamless integration.</p>

          <h3>Chart System</h3>
          <p>To handle diverse visualizations, I built a standardized design system for consistency, scalability, and performance—limiting initial chart types to focus the experience.</p>

          <h3>Design iterations</h3>
          <p>We explored multiple directions before arriving at the final design:</p>

          <p>Wireframes testing layouts and IA</p>
          <div>
            <img src="/images/portfolio/calendly-analytics-wireframes.png" alt="Wireframes testing layouts and IA" loading="lazy" decoding="async" />
          </div>

          <p>Lo-fi dashboard concepts without cards</p>
          <div>
            <img src="/images/portfolio/calendly-analytics-lofi.png" alt="Lo-fi dashboard concepts without cards" loading="lazy" decoding="async" />
          </div>


          <p>Final high-fidelity dashboard shipped to dev</p>
          <div>
            <video src="/images/portfolio/calendly-analytics-video.mp4" alt="Final high-fidelity dashboard shipped to dev" loading="lazy" decoding="async" />
          </div>

        </section>

        <section className="case-study-section">

          <h2>Results</h2>
          <p>We launched Alpha in 4 months, validated with live data, and iterated through Beta to GA. At GA, results far surpassed goals:
          </p>

          <div className="metrics-table-card">
            <table ref={tableRef} className="metrics-table">
              <thead>
                <tr>
                  <th>Goal</th>
                  <th>Beta</th>
                  <th>GA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>40% Adoption</td>
                  <td>53%</td>
                  <td>90%</td>
                </tr>
                <tr>
                  <td>50% Retention</td>
                  <td>52%</td>
                  <td>75%</td>
                </tr>
                <tr>
                  <td>70% CSAT</td>
                  <td>82%</td>
                  <td>83%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>Crucially, there was no measurable increase in contraction. Instead, we saw early signs of expansion among teams adopting Analytics, proving the feature strengthened retention and renewal conversations.
          </p>

          <blockquote className="testimonial">
            <p>“<strong>I really love it. It's reduced my workload so much</strong>...I just send the visuals [to execs] as is”</p>
            <cite>—Adobe</cite>
          </blockquote>

          <blockquote className="testimonial">
            <p>“Calendly is ahead of a lot of the other tools I use in terms of what we can get from the data.</p>
            <cite>Halpenny Insurance</cite>
          </blockquote>

        </section>

        <section className="case-study-section">
          <h2>Reflections</h2>
          <h3>What worked</h3>
          <ul>
            <li>Designing for varied data literacy levels ensured broad usability</li>
            <li>Close collaboration with Engineering and CS grounded the product in both user and business needs</li>
          </ul>
          <h3>Opportunities</h3>
          <ul>
            <li><strong>Onboarding:</strong> A guided flow would have better highlighted value at first use</li>
            <li><strong>Accessibility:</strong> Data display met compliance but could improve clarity and legibility</li>
          </ul>
        </section>
      </div>
    </article>
  )
} 