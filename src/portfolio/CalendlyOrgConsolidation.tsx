export default function CalendlyOrgConsolidation() {
  return (
    <article className="case-study">
      <div className="content">
        <header className="case-study-header">
          <h1>Organization Consolidation</h1>
          <p className="case-study-subtitle">An end-to-end implementation of improving a user's account migration process.</p>
          
          <div className="case-study-meta">
            <div className="meta-item">
              <strong>Platform</strong>
              <span>(Responsive) Web, Email</span>
            </div>
            <div className="meta-item">
              <strong>Timeline</strong>
              <span>16+ weeks • Research &gt; Design &gt; Enhancements</span>
            </div>
            <div className="meta-item">
              <strong>Domain/Topics</strong>
              <span>Enterprise, Customer Experience, Compliance & Security</span>
            </div>
            <div className="meta-item">
              <strong>Core Team</strong>
              <span>Designer (me), Product Manager, 3 Engineers</span>
            </div>
          </div>
        </header>

        <section className="case-study-section">
          <h2>Migrating accounts is a slow and tedious process</h2>
          <p>
            Managing accounts and consolidating them across organizations can be a real challenge. In 2022 alone, over 18,000 mergers and acquisitions (M&A's) took place, each one requiring the reallocation of personnel, resources, and the unification of software licenses. But the need to consolidate accounts isn't exclusive to M&A's: within many companies, different teams may independently sign up for Calendly, inadvertently forming their own localized organizations.
          </p>
          <p>
            This <strong>fragmentation</strong> can create significant pain points such as <strong>security risks, billing complexities, and inconsistencies</strong> in departmental procedures.
          </p>
          <p>
            Existing migration processes were slow, manual, cumbersome, and offered little transparency to customers. A more seamless solution was needed, one that would equip customers with the tools and knowledge they needed to control their migration process.
          </p>
        </section>

        <section className="case-study-section">
          <h3>Setting the goals</h3>
          <p>We aimed to bring two key changes:</p>
          <ul>
            <li>Automate the migration process, reducing the CSM team's time spent on each migration</li>
            <li>Enhance the customer experience by offering more visibility, updates, and control over the migration process</li>
          </ul>
        </section>

        <section className="case-study-section">
          <h2>Understanding the Challenges</h2>
          <p>
            Understanding the core issues involved substantial research and collaboration with my product manager and engineers.
          </p>
          
          <h3>Weekly check-ins and feedback loops</h3>
          <p>
            Regular communication with CSMs helped uncover their pain points, and weekly design check-ins enabled ongoing feedback and adjustments. This <strong>iterative approach</strong> ensured alignment with users' needs.
          </p>
          <p>
            The shared learning journey created stronger connections and uncovered valuable insights from CSMs as we continued further into the project
          </p>
          
          <h3>Uncovered challenges</h3>
          <p>The project was filled with complexities:</p>
          <ul>
            <li><strong>Uncertainty around the migration timelines</strong> at different companies steps affected communication and designs</li>
            <li>This flow required <strong>interaction with different applications by different users</strong>, increasing the complexity</li>
            <li>Challenges in incremental testing due to <strong>multiple features being added simultaneously</strong></li>
          </ul>
          
          <div className="process-steps">
            <div className="step">
              <strong>Step 1:</strong> A CSM uses an internal tool to mark users as "ready to migration", after discussion with the org admins.
            </div>
            <div className="step">
              <strong>Step 2:</strong> An admin at the incoming migration's org manages the user migration. They can send the invite when ready, or force a migration at a scheduled point in time.
            </div>
            <div className="step">
              <strong>Step 3:</strong> The user that needs to migrate receives an email with information and next steps.
            </div>
            <div className="step">
              <strong>Step 4 (Optional):</strong> The user can export their event types to have a back up, or to later import into their new org.
            </div>
          </div>
        </section>

        <section className="case-study-section">
          <h2>Designing with insight</h2>
          
          <h3>Innovative solutions offer user choice</h3>
          <p>Some standout features I designed included:</p>
          <ul>
            <li>Selective user migration, providing flexibility in who gets migrated</li>
            <li>Admin control for invitations, scheduling, and notifications</li>
            <li>An Event Type import and export feature, giving more control to users</li>
          </ul>
          
          <blockquote className="testimonial">
            <p>"[These changes] will greatly speed up my workflow... and simplify communication with my customers"</p>
            <cite>— Customer Success Manager</cite>
          </blockquote>
        </section>

        <section className="case-study-section">
          <h2>Reflections and learnings</h2>
          
          <h3>What I would do differently</h3>
          <p>
            If I made a service blueprint earlier, we could have untangled the web of user interactions sooner, making our journey smoother. Going forward, implementing a blueprint from the outset will be a priority for larger projects, as it has proven to be a vital tool in aligning the team, predicting challenges, and ensuring a more coherent and efficient design process.
          </p>
          
          <h3>Results</h3>
          <p>
            Though quantitative metrics are not yet available, the qualitative insights are promising:
          </p>
          <ul>
            <li>Customers appreciated the control and flexibility, potentially saving admin hours</li>
            <li>CSMs loved the new features, with one saying it would "greatly speed up their workflow" and "simplify their communication with customers"</li>
          </ul>
          
          <p>
            This project signifies a major step towards customer empowerment and process automation. By addressing complex challenges, and involving users in the design process, the project is set to transform the migration experience.
          </p>
        </section>
      </div>
    </article>
  )
} 