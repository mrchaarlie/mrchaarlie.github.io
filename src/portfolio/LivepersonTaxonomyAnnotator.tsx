export default function LivepersonTaxonomyAnnotator() {
  return (
    <article className="case-study">
      <div className="content">
        <header className="case-study-header">
          <h1>Taxonomy Annotator</h1>
          <p className="case-study-subtitle">An internal web app for text annotation, which improved the efficiency and accuracy of labelling data.</p>
          
          <div className="case-study-meta">
            <div className="meta-item">
              <strong>Platform</strong>
              <span>Web</span>
            </div>
            <div className="meta-item">
              <strong>Timeline</strong>
              <span>8 weeks</span>
            </div>
            <div className="meta-item">
              <strong>Domain/Topics</strong>
              <span>Machine Learning</span>
            </div>
            <div className="meta-item">
              <strong>Core Team</strong>
              <span>Designer (me), 3 Engineers</span>
            </div>
          </div>

          <div className="case-study-results">
            <div className="result-item">
              <div className="result-number">86%</div>
              <div className="result-label">faster to annotate messages</div>
            </div>
            <div className="result-item">
              <div className="result-number">10/10</div>
              <div className="result-label">Satisfaction, Survey of 8 users</div>
            </div>
          </div>
        </header>

        <section className="case-study-section">
          <h2>The need for efficient text classification</h2>
          <p>
            The challenge of accurately classifying consumer messages for sentiment and intent through spreadsheets was <strong>hindering our Machine Learning models' training</strong>. My team and I decided that an internal annotation tool could offer not just efficiency but a significant reduction in errors.
          </p>
        </section>

        <section className="case-study-section">
          <h2>The vision</h2>
          <p>
            My goal was to design a web app to enable the team to classify data more efficiently, improving classification speed and reducing human error. This change would ease user fatigue, enhance data quality, and accelerate our ML models' training.
          </p>
        </section>

        <section className="case-study-section">
          <h2>Successful launch and impact</h2>
          <p>
            Launched successfully in 2 months, the product is now utilized by data scientists and annotators, delivering a remarkable improvement in task completion time and overall job turn-around.
          </p>
          
          <blockquote className="testimonial">
            <p>"This is much better to use than working with spreadsheets. Reading the text is much easier, I make fewer mistakes, and I'm much faster at annotation."</p>
            <cite>— Lar, Insights Manager</cite>
          </blockquote>
        </section>

        <section className="case-study-section">
          <h2>How I discovered pain points</h2>
          
          <h3>Methodologies</h3>
          <ol>
            <li><strong>Market Research:</strong> Examined the existing methods of annotation</li>
            <li><strong>Competitive Analysis:</strong> Assessed similar tools like Prodigy to understand the competitive landscape and identify opportunities</li>
            <li><strong>Discovery Interviews:</strong> Collaborated with annotation, data-science, and engineering partners to uncover pain points and technical constraints</li>
            <li><strong>Usability Testing:</strong> Conducted moderated tests on prototypes to identify user expectations and pain points</li>
          </ol>

          <blockquote className="testimonial">
            <p>"After annotating for a while...I get tired and I end up misclicking a lot"</p>
            <cite>— Discovery interview participant</cite>
          </blockquote>

          <h3>Key insights</h3>
          <ul>
            <li>Users needed easy-to-use keyboard <strong>shortcuts</strong> for efficiency</li>
            <li>A clear need for reduced error rates through <strong>more conspicuous</strong> text and examples</li>
            <li><strong>Unexpected findings:</strong> The UI elements' placement led to frustration and errors</li>
          </ul>
        </section>

        <section className="case-study-section">
          <h2>Designing solutions to meet user needs</h2>
          <p>My designs had several goals in mind:</p>
          <ol>
            <li>Easy-to-use keyboard shortcuts to increase workflow efficiency</li>
            <li>Reduced error rates through more conspicuous text, examples, and noise reduction</li>
            <li>Modular components to work with various annotation levels</li>
            <li>Support different permission levels</li>
          </ol>
        </section>

        <section className="case-study-section">
          <h2>Implementation and results</h2>
          
          <h3>Faster, easier, and more accurate</h3>
          <p>
            The product launched internally to great success, being actively used by around a dozen users to annotate data. Initial tests show that:
          </p>
          <ul>
            <li><strong>86% faster</strong> message classification</li>
            <li><strong>26% faster</strong> task completion times</li>
            <li><strong>15% decrease</strong> in error rates¹</li>
          </ul>
          
          <p>
            Overall, this project was more than a success; it lead to tangible cost savings and performance improvements that redefined our approach to text annotation.
          </p>
          
          <p className="footnote">
            <strong>¹</strong> Error rates were determined by cross-referencing annotation results between multiple users and identifying anomalies
          </p>
        </section>
      </div>
    </article>
  )
} 