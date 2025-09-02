export default function SiteFooter() {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="footer-left">
          {/* <h3 className="footer-title">Thanks for visiting!</h3> */}
          <small>© {new Date().getFullYear()} Charles Wu</small>
        </div>

        <div className="footer-right">
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hi@charleswu.ca">Email</a>
            <a href="https://www.linkedin.com/in/mrchaarlie/.com/mrchaarlie" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://substack.com/@mrchaarlie" target="_blank" rel="noopener noreferrer">Substack</a>
          </div>
          <div className="footer-col">
            <h4>Download</h4>
            <a href="/Charles-Wu-Resume.pdf" download>Resume</a>
          </div>
          <div className="footer-col">
            <h4>Projects</h4>
            <a href="/work/asana">Asana Access Controls</a>
            <a href="/work/calendly-analytics">Calendly Analytics</a>
            <a href="/work/calendly-org-consolidation">Calendly Org Consolidation</a>
            <a href="/work/liveperson-taxonomy-annotator">LivePerson Taxonomy</a>
          </div>
          
        </div>
      </div>
    </footer>
  )
} 