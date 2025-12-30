// CRITICAL: Initialize Buffer and global polyfills FIRST, before any other imports
// This must run before Solana vendor code loads to prevent BigInt conversion errors
import { Buffer } from 'buffer'

if (typeof window !== 'undefined') {
  window.Buffer = Buffer
  window.global = window.global || window
  window.global.Buffer = Buffer
  
  // Fix BigInt serialization issues
  if (typeof BigInt !== 'undefined') {
    // Ensure BigInt can be properly handled
    try {
      BigInt.prototype.toJSON = function() {
        return this.toString()
      }
    } catch (e) {
      // Already defined or not needed
    }
  }
}

// Now safe to import other modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
