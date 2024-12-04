/**
 * Template Name: iLanding
 * Template URL: https://bootstrapmade.com/ilanding-bootstrap-landing-page-template/
 * Updated: Nov 12 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function() {
  "use strict";

  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  const scrollTop = document.querySelector('.scroll-top');
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function toggleScrolled() {
    if (!selectHeader) return;
    const isScrolled = window.scrollY > 100;
    selectBody.classList.toggle('scrolled', isScrolled);
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  function mobileNavToggle() {
    selectBody.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
  }

  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (selectBody.classList.contains('mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.parentNode;
      parent.classList.toggle('active');
      parent.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  function toggleScrollTop() {
    if (scrollTop) {
      scrollTop.classList.toggle('active', window.scrollY > 100);
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('load', () => {
    toggleScrollTop();
    navmenuScrollspy();
    aosInit();
  });
  document.addEventListener('scroll', toggleScrollTop);

  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  const glightbox = GLightbox({ selector: '.glightbox' });

  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(swiperElement => {
      const config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  new PureCounter();

  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach(faqItem => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  window.addEventListener('load', function() {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      const isActive = position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight);
      navmenulink.classList.toggle('active', isActive);
    });
  }

  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
