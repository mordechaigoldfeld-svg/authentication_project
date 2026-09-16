import React from 'react'
import { useNavigate } from 'react-router'
import './NotFound.css'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="not-found-container">
      <div className="not-found-card">
       
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Lost in the world?</h2>
        <p className="not-found-text">
          We couldn't find the current page.
        </p>

        <div className="not-found-actions">
          <button 
            className="not-found-btn primary" 
            onClick={() => navigate('/login')}
          >
            Back to login 🏠
          </button>
        </div>
      </div>
    </div>
  )
}