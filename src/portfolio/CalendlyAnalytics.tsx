import PortfolioHeader from '../components/PortfolioHeader'

export default function CalendlyAnalytics() {
  return (
    <article className="case-study">
      <div className="content">
        <section className="case-study-hero">
          <h1 className="case-study-title">Calendly Analytics</h1>
          <div className="case-study-summary">
            <p className="case-study-lead">Calendly was moving up-market and needed a way to address churn by showing customers the value of its surfaces. I worked on creating the scheduling platform industry's first analytics dashboard, which resulted improved retention and company ARR.</p>

            <div className="case-study-meta">
              <div className="meta-row">
                <span className="meta-label">Team</span>
                <span>1 Product designer, 1 PM, 1 Content designer, 2 Engineers</span>
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
                <span>93% CSAT, 55% adoption rate (in 2 months)</span>
              </div>
              <div className="meta-row">
                <strong>Date</strong>
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
          <h3>Users lacked access to their Calendly usage data</h3>
          <p>
            We wanted to empower our customers (Account Managers) with insights into their team's usage data and behaviors. This helps them make strategic decisions like optimizing schedules, coaching or rewarding members, and improving overall workflows.
          </p>

          <h3>Goal</h3>
          <p>
            This initiative was meant to address a clear gap: give a better understanding of their product usage to maximize its benefits.
          </p>
          <p>Our measurable goals were:</p>
          <ol>
            <li>Increase user retention by improving their understanding of the product</li>
            <li>Increase Analytics MAUs by 10% within first quarter of launch</li>
          </ol>

          <h3>Final results</h3>
          <p>
            After the public launch, users received a rich dashboard offering an array of features, allowing them to customize views, explore in-depth data, and gain unique insights. Several customers gave positive feedback on its impact and value:
          </p>

          <blockquote className="testimonial">
            <p>"We used the dashboard trends to quickly reduce our meeting cancellations by 10%."</p>
            <cite>— Nabil Belmezouar, Senior Product Manager</cite>
          </blockquote>
        </section>

        <section className="case-study-section">
          <h2>Research</h2>
          <h3>Uncovering key insights through research</h3>
          <p>We started off by validating our problem statement to fine-tune our goals.</p>

          <h3>Methodologies</h3>
          <ol>
            <li><strong>Competitive Analysis:</strong> Assessed similar tools or features in the market to understand the competitive landscape and identify opportunities for differentiation</li>
            <li><strong>Discovery interviews:</strong> I worked with our Content Strategist to run 3 rounds of discovery interviews. Our primary audience was admins or account managers from diverse company sizes — from nimble startups to established enterprises.</li>
            <li><strong>Usability Testing:</strong> After creating prototypes, I conducted a series of moderated tests to identify pain points, and user expectations</li>
          </ol>

          <h3>Key insights</h3>
          <ul>
            <li>Users valued <strong>exploring</strong> interesting data and wanted <strong>insights</strong> on anomalies and key indicators</li>
            <li><strong>Data export</strong> for in-depth analysis was essential</li>
            <li><strong>Customization</strong> was key, users wanted dashboards tailored to role-specific requirements</li>
          </ul>

          <p><strong>Unexpected learnings:</strong></p>
          <ul>
            <li><strong>Some metrics</strong> initially believed to be important (like global seat usage data), <strong>were less relevant</strong></li>
          </ul>

          <blockquote className="testimonial">
            <p>"I want something that summarizes usage data that I can easily share with my exec team in our monthly meeting"</p>
            <cite>— Discovery interview participant</cite>
          </blockquote>

          <h3>Design principles</h3>
          <p>From the research, I derived a set of design principles which then used to guide my designs:</p>
          <ol>
            <li><strong>Simplicity</strong> Ensure the designs remain intuitive and user-friendly</li>
            <li><strong>Encourage interaction</strong> Elements should invite users to engage, sparking curiosity and promoting exploration</li>
            <li><strong>Modularity</strong> Ensure each component is self-contained for easy future adaptability and expansion</li>
          </ol>
        </section>

        <section className="case-study-section">
          <h2>Design iterations</h2>
          <h3>Designing solutions to meet user needs</h3>
          <p>
            After the ideation phase, I delved into crafting storyboards, defining the information architecture, and making user flows and wireframes.
          </p>
        </section>

        <section className="case-study-section">
          <h2>Results</h2>
          <h3>Impact, lessons learned, and next steps</h3>

          <h3>Challenges</h3>
          <ul>
            <li><strong>Design optimization:</strong> Striking the balance between simplicity for everyday users and detailed insights for administrators was challenging</li>
            <li><strong>Technical constraints:</strong> Scope changes occurred due to engineering research and performance issues that were uncovered during tests</li>
            <li><strong>Stakeholder communication:</strong> Engagement with stakeholders took longer than anticipated, limiting the data available and affecting the project's timeline</li>
          </ul>

          <h3>Results</h3>
          <p>
            After launching, we noted a <strong>23% increase in MAUs</strong> within two quarters, confirming that our goals were met and our approach was effective. Stakeholder's testimonial reinforced this success: "We used the dashboard trends to quickly <strong>reduce our meeting cancellations by 10%</strong>"—Nabil Belmezouar, Senior Product Manager.
          </p>
          <p>
            The project's <strong>journey from idea to implementation</strong> demonstrated our ability to create a useful analytics tool that meets diverse user needs, presenting data in an accessible and significant manner.
          </p>

          <h3>Reflections</h3>
          <p>Some things I would do differently:</p>
          <ul>
            <li><strong>Process optimization:</strong> Reflecting on the communication delays, and developing a more structured approach to stakeholder engagement could save time in future projects</li>
            <li><strong>Conduct engineering research earlier:</strong> Getting more accurate performance data earlier would have enabled more informed design decisions, impacting the project's outcome in a positive way</li>
          </ul>

          <p><strong>Next steps:</strong></p>
          <ul>
            <li><strong>Improve sorting/filtering mechanisms:</strong> enhancing these functions will provide better contextual data availability</li>
            <li><strong>Expand dashboard customizability:</strong> Further personalization options will increase user efficacy and satisfaction</li>
            <li><strong>Scheduled data exporting:</strong> Introducing automation will enhance workflow efficiencies</li>
          </ul>

          <p>
            These targeted improvements emphasized our commitment at the time to evolve the product and deliver the maximum value to users.
          </p>
        </section>
      </div>
    </article>
  )
} 