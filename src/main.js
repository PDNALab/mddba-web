// Main JavaScript Entry Point
import './styles/main.css';
import { initHeader } from './components/header.js';
import { initHero } from './components/hero.js';
import { initStats } from './components/stats.js';
import { initPartners } from './components/partners.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHero();
  initStats();
  initPartners();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
