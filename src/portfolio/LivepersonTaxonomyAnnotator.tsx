import PortfolioHeader from '../components/PortfolioHeader'
import Lightbox, { ClickableImage } from '../components/Lightbox'
import SiteFooter from '../components/SiteFooter'
import { useEffect, useRef, useState } from 'react'

export default function LivepersonTaxonomyAnnotator() {
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
        <h1 className="case-study-title">LivePerson Data Annotation Tool</h1>
        <div className="case-study-summary">
          <p className="case-study-lead">
            Manual text classification in spreadsheets was creating a data quality bottleneck that slowed machine learning model training by months. I designed a specialized annotation tool that increased classification speed by 86% while reducing human error, accelerating our ML development pipeline.
          </p>

          <div className="case-study-meta">
            <div className="meta-row">
              <span className="meta-label">Team</span>
              <span>Led design for team of 4 (3 ML engineers)</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Skills</span>
              <span className="pills">
                <span className="pill">ML workflows</span>
                <span className="pill">Internal tooling</span>
                <span className="pill">Workflow optimization</span>
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Impact</span>
              <span>
                <strong>86%</strong> faster annotation<br />
                <strong>15%</strong> fewer errors<br />
                <strong>100%</strong> CSAT
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Date</span>
              <span>Q3 2021</span>
            </div>
          </div>
        </div>

        <figure className="case-study-figure">
          <img src="/images/portfolio/thumbnail-liveperson-1.png" alt="ML annotation tool interface" loading="lazy" decoding="async" />
        </figure>
      </section>

      <div className="wrapper">
        <div className="content">
          <PortfolioHeader />

          <section className="case-study-section">
            <h2>The challenge</h2>
            
            <h3>ML training bottleneck</h3>
            <p>Data scientists and ML engineers were manually classifying thousands of consumer messages in spreadsheets to train sentiment and intent models. This process was error-prone, exhausting, and created a critical bottleneck in our machine learning development pipeline.</p>
            
            <p>The team needed to label thousands of messages every week, but spreadsheet-based annotation caused annotator fatigue, inconsistent classifications, and delayed model iterations by several weeks per cycle.</p>

            <h3>Core problems</h3>
            <ul>
              <li><strong>Speed:</strong> Manual spreadsheet navigation slowed classification rates</li>
              <li><strong>Accuracy:</strong> Fatigue and poor UI led to 15%+ error rates</li>
              <li><strong>Consistency:</strong> No standardized process across annotators</li>
              <li><strong>Scalability:</strong> Process couldn't handle growing data volumes</li>
            </ul>
          </section>

          <section className="case-study-section">
            <h2>Process</h2>

            <h3>Understanding ML annotation workflows</h3>
            <p>I conducted discovery interviews with data scientists, ML engineers, and annotation specialists to map the end-to-end labeling process. Through competitive analysis of tools like Prodigy and Label Studio, I identified key workflow patterns for efficient text classification.</p>

            <blockquote className="testimonial box-shadow">
              <p>"After annotating for a while...I get tired and I end up misclicking a lot"</p>
              <cite>—Data Annotation Specialist</cite>
            </blockquote>

            <h3>Workflow optimization design</h3>
            <p>I designed the annotation interface around three core principles:</p>
            <ol>
              <li><strong>Keyboard-first navigation:</strong> Hotkeys for all classification actions to minimize mouse dependency</li>
              <li><strong>Cognitive load reduction:</strong> Clear visual hierarchy, larger text, and contextual examples to reduce decision fatigue</li>
              <li><strong>Error prevention:</strong> Confirmation patterns and visual feedback to catch misclassifications before submission</li>
            </ol>

            <figure className="case-study-figure margin-bottom-4">
              <img src="/images/portfolio/taxonomy-annotator-1.webp" alt="Annotation tool interface dashboard" loading="lazy" decoding="async" className="box-shadow" />
              <figcaption>An early iteration of the dashboard, containing tasks, results, and benchmarks.</figcaption>
            </figure>

            <h3>Modular annotation system</h3>
            <p>I created flexible UI components that could handle different classification schemas—from binary sentiment analysis to multi-level intent categorization—enabling the tool to scale across various ML training needs without requiring design changes.</p>

            <figure className="case-study-figure margin-bottom-4">
              <img src="/images/portfolio/taxonomy-annotator-2.webp" alt="Annotation tool interface dashboard" loading="lazy" decoding="async" className="box-shadow" />
              <figcaption>A design variant for annotating a conversation, where the UI elements are beneath the messages.</figcaption>
            </figure>

            <figure className="case-study-figure margin-bottom-4">
              <img src="/images/portfolio/taxonomy-annotator-3.webp" alt="Annotation tool interface dashboard" loading="lazy" decoding="async" className="box-shadow" />
              <figcaption>A design exploration that lets users annotate text within a message.</figcaption>
            </figure>

            <div className="flex flex-center flex-col margin-bottom-4 width-100">
              <video ref={videoRef} src="/videos/portfolio/liveperson-taxonomy-annotator-demo.mp4" controls muted playsInline preload="metadata" loop aria-label="." className="margin-bottom-1 box-shadow" />
              <figcaption>A video demo of the annotation tool. Users can use keyboard shortcuts to navigate and annotate text. They can also select and annotate text within a message.</figcaption>
            </div>

          </section>

          <section className="case-study-section">
            <h2>Results</h2>
            <p>The annotation tool transformed our ML training data pipeline:</p>

            <ul>
              <li><strong>Speed improvement:</strong> 86% faster message classification compared to spreadsheets</li>
              <li><strong>Quality gains:</strong> 15% reduction in annotation errors through better UI and validation</li>
              <li><strong>User adoption:</strong> 100% team adoption within first week, 10/10 satisfaction scores</li>
              <li><strong>Pipeline impact:</strong> Reduced ML model training cycles from quarterly to monthly iterations</li>
            </ul>

            <blockquote className="testimonial box-shadow">
              <p>"This is much better to use than working with spreadsheets. Reading the text is much easier, I make fewer mistakes, and I'm much faster at annotation."</p>
              <cite>—Lar, Insights Manager</cite>
            </blockquote>

            <p>The tool became critical infrastructure for our ML operations, enabling faster model improvements and more responsive product development cycles.</p>
          </section>

          <section className="case-study-section">
            <h2>Reflections</h2>

            <h3>What worked</h3>
            <p>Focusing on workflow efficiency over feature richness proved essential. By prioritizing keyboard shortcuts and error reduction, the tool solved the core productivity challenge without adding unnecessary complexity that would slow adoption.</p>

            <h3>Opportunities</h3>
            <p>Building inter-annotator agreement tracking into the initial design would have provided valuable quality metrics from day one. For future ML tooling projects, I'd incorporate reliability measurements as core features rather than post-launch additions.</p>
          </section>
        </div>
      </div>
    </article>
  )
} 