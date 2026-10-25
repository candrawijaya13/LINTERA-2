/**
 * LINTERA (Lingkaran Interaktif untuk Matematika)
 * Vanilla JavaScript untuk Welcome Page
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Elements
  const orientationOverlay = document.getElementById('orientation-overlay');
  const btnExplore = document.getElementById('btn-explore');
  const btnMenuToggle = document.getElementById('btn-menu-toggle');
  const navDrawer = document.getElementById('nav-drawer');
  const drawerClose = document.getElementById('drawer-close');

  // Modals
  const modalTentang = document.getElementById('modal-tentang');
  const modalFitur = document.getElementById('modal-fitur');
  const modalKontak = document.getElementById('modal-kontak');
  const modalDashboard = document.getElementById('modal-dashboard');

  // 2. Orientation Detection
  function checkDeviceOrientation() {
    if (!orientationOverlay) return;

    const isPortrait = window.innerHeight > window.innerWidth;
    const isMobile =
      window.innerWidth <= 900 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isPortrait && isMobile) {
      orientationOverlay.style.display = 'flex';
    } else {
      orientationOverlay.style.display = 'none';
    }
  }

  // Initial check & Listeners
  checkDeviceOrientation();
  window.addEventListener('resize', checkDeviceOrientation);
  window.addEventListener('orientationchange', checkDeviceOrientation);

  // 3. Navigation Drawer Toggle
  if (btnMenuToggle && navDrawer) {
    btnMenuToggle.addEventListener('click', () => {
      navDrawer.classList.toggle('active');
    });
  }

  if (drawerClose && navDrawer) {
    drawerClose.addEventListener('click', () => {
      navDrawer.classList.remove('active');
    });
  }

  // Close drawer when clicking outside
  if (navDrawer) {
    navDrawer.addEventListener('click', (e) => {
      if (e.target === navDrawer) {
        navDrawer.classList.remove('active');
      }
    });
  }

  // 4. Modal Handlers
  function openModal(modal) {
    if (modal) modal.classList.add('active');
  }

  function closeModal(modal) {
    if (modal) modal.classList.remove('active');
  }

  // Bind close buttons in modals
  document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
      }
    });

    const closeBtn = backdrop.querySelector('.modal-btn-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        backdrop.classList.remove('active');
      });
    }

    const actionBtn = backdrop.querySelector('.btn-secondary');
    if (actionBtn) {
      actionBtn.addEventListener('click', () => {
        backdrop.classList.remove('active');
      });
    }
  });

  // Nav link bindings
  const linkTentang = document.getElementById('link-tentang');
  const linkFitur = document.getElementById('link-fitur');
  const linkKontak = document.getElementById('link-kontak');

  const drawerTentang = document.getElementById('drawer-tentang');
  const drawerFitur = document.getElementById('drawer-fitur');
  const drawerKontak = document.getElementById('drawer-kontak');

  if (linkTentang) linkTentang.addEventListener('click', () => openModal(modalTentang));
  if (linkFitur) linkFitur.addEventListener('click', () => openModal(modalFitur));
  if (linkKontak) linkKontak.addEventListener('click', () => openModal(modalKontak));

  if (drawerTentang) {
    drawerTentang.addEventListener('click', () => {
      if (navDrawer) navDrawer.classList.remove('active');
      openModal(modalTentang);
    });
  }

  if (drawerFitur) {
    drawerFitur.addEventListener('click', () => {
      if (navDrawer) navDrawer.classList.remove('active');
      openModal(modalFitur);
    });
  }

  if (drawerKontak) {
    drawerKontak.addEventListener('click', () => {
      if (navDrawer) navDrawer.classList.remove('active');
      openModal(modalKontak);
    });
  }

  // 5. Tombol Mulai Jelajahi -> Tampilkan Placeholder Dashboard
  if (btnExplore) {
    btnExplore.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(modalDashboard);
    });
  }

  // Kontak Form submit handler
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');
  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.display = 'none';
      contactSuccess.style.display = 'block';
    });
  }
});
