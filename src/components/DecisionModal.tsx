import React from 'react'

export default function DecisionModal({ open, onClose, onContinue }: { open: boolean; onClose: () => void; onContinue: () => void }) {
  if (!open) return null
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-panel">
        <h3 id="modal-title">Have a password?</h3>
        <p className="modal-description">
          This case study is password-protected to safeguard company IP. If you’ve received my recent job application, you’ll find the password in my cover letter.
        </p>
        <p className="modal-description muted">No password? No problem. You can still explore my other case studies.</p>
        <div className="modal-actions">
          <button className="button button--secondary half" onClick={onClose}>Go back</button>
          <button className="button half" onClick={onContinue}>Continue to case study</button>
        </div>
      </div>
    </div>
  )
} 