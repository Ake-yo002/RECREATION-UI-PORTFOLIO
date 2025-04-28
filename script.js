// 1. Mobile Navigation Toggle
document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('active');
});

// 2. Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Responsive Service Cards
function adjustServicesLayout() {
    const servicesSection = document.querySelector('.services-section');
    if (window.innerWidth < 768) {
        servicesSection?.classList.add('mobile-view');
    } else {
        servicesSection?.classList.remove('mobile-view');
    }
}

// 4. Initialize and run on resize
window.addEventListener('resize', adjustServicesLayout);
adjustServicesLayout(); // Run on load

// 5. Prevent layout shift by preloading critical images
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => img.loading = 'eager');
});