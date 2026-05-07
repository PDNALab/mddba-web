// Stats Count-up Animation Component
export function initStats() {
  const statsConfig = {
    publications: 1,
    events: 2,
    community: 0
  };

  const statNums = document.querySelectorAll('.stat-item .num');
  const partnerCount = window.partnerCount || 1;

  const targets = [
    { el: statNums[0], value: partnerCount, suffix: '+' },
    { el: statNums[1], value: statsConfig.publications, suffix: '' },
    { el: statNums[2], value: statsConfig.events, suffix: '+' },
    { el: statNums[3], value: statsConfig.community, suffix: '+' }
  ];

  function animateCount(el, target, suffix, duration = 1500) {
    if (target === 0) {
      el.textContent = '0' + suffix;
      return;
    }

    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statsSection = document.querySelector('.stats');
  if (!statsSection) return;

  let animated = false;
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        targets.forEach(({ el, value, suffix }) => {
          animateCount(el, value, suffix);
        });
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(statsSection);
}
