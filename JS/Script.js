



// ===================================================== 
// ISSUE 3: HEADER & MOBILE NAVIGATION
// Responsive header with hamburger menu for mobile
// ===================================================== 
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');

if (menuToggle && closeMenu && mobileNavOverlay) {
    menuToggle.addEventListener('click', () => {
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    });

    closeMenu.addEventListener('click', () => {
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    });

    // Close on link click
    const mobileLinks = mobileNavOverlay.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close on outside click
    mobileNavOverlay.addEventListener('click', (e) => {
        if (e.target === mobileNavOverlay) {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}
