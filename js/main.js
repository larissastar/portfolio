/**
 * Larissa Starikova Portfolio — Shared Scripts
 * Handles mobile menu toggle, focus management, and keyboard accessibility.
 * Page-agnostic: only runs if the shared header/footer markup exists.
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var mobileMenu = document.getElementById('mobile-menu');
    var mobileClose = document.getElementById('mobile-menu-close');
    var mobileLinks = document.querySelectorAll('.mobile-menu__link');

    // Gracefully exit if this page doesn't include the mobile menu components
    if (!menuToggle || !mobileMenu) return;

    function openMenu() {
      mobileMenu.classList.add('is-open');
      menuToggle.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // Event bindings
    menuToggle.addEventListener('click', openMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMenu);
    
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });
  });
})();