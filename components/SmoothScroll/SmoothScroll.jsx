"use client"
import { useEffect } from 'react'

const SmoothScroll = () => {
  useEffect(() => {
    // Add smooth scroll behavior to all navigation links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]')
    
    const handleSmoothScroll = (e) => {
      e.preventDefault()
      const targetId = e.currentTarget.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        const headerHeight = document.querySelector('.navbar')?.offsetHeight || 80
        const targetPosition = targetElement.offsetTop - headerHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
        
        // Update URL without triggering page jump
        window.history.pushState(null, null, targetId)
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse')
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show')
        }
      }
    }
    
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })
    
    // Cleanup event listeners
    return () => {
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return null // This component doesn't render anything
}

export default SmoothScroll
