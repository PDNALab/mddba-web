// Hero Section Component
export function initHero() {
  const heroVideo = document.querySelector('.hero-video');

  if (!heroVideo) return;

  // Attempt to play video
  heroVideo.play().catch(() => {
    // If autoplay is blocked, play on first user interaction
    document.addEventListener('click', () => heroVideo.play(), { once: true });
    document.addEventListener('touchstart', () => heroVideo.play(), { once: true });
  });
}
