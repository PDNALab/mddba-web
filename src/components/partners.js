// Partners Ticker Component
export function initPartners() {
  const track = document.getElementById('partners-track');

  if (!track) return;

  const originalItems = Array.from(track.querySelectorAll('.partner-item'));
  const partnerCount = originalItems.length;

  if (partnerCount >= 1) {
    originalItems.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
    track.classList.add('scrolling');
  }

  // Return partner count for stats
  window.partnerCount = partnerCount;
}
