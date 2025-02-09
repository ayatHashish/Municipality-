// main.js
require(["jquery", "aos", 'bootstrap', "owl", 'resources.' + BER.languageCode], function ($, AOS) {
    $(document).ready(function(){
        // Initialize AOS
        AOS.init({ once: true, disable: "mobile" });

        // Set RTL/LTR based on language
        const isRTL = BER.languageCode === 'ar';

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Burger Menu
        const burgerBtn = document.querySelector('.burger-btn');
        if (burgerBtn) {
            burgerBtn.addEventListener('click', () => {
                const currentState = burgerBtn.getAttribute('data-state');
                const mainNav = $('.first-nav');

                if (!currentState || currentState === 'closed') {
                    burgerBtn.setAttribute('data-state', 'opened');
                    burgerBtn.setAttribute('aria-expanded', 'true');
                    mainNav.addClass('open');
                } else {
                    burgerBtn.setAttribute('data-state', 'closed');
                    burgerBtn.setAttribute('aria-expanded', 'false');
                    mainNav.removeClass('open');
                }
            });
        }

        // Initialize All Carousels
        initCarousels();
        
        // Initialize Counters
        initCounters();
    });

    // Carousels Configuration
    function initCarousels() {
        // Common carousel settings
        const commonSettings = {
            rtl: BER.languageCode === 'ar', 
            nav: true,
            navText: BER.languageCode === 'ar' ? ['<i class="icon-arrow-right"></i>', '<i class="icon-arrow-left"></i>'] 
                                              : ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>']
        };

        // Banner Slider
        $(".banner-slider").owlCarousel({
            ...commonSettings,
            items: 1,
            loop: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1000,
            smartSpeed: 1000,
            responsive: {
                0: { items: 1 },
                575: { items: 1 },
                767: { items: 1 },
                991: { items: 1 },
                1400: { items: 1 },
                1537: { items: 1 }
            }
        });

        // Services Slider
        $(".our-Services-slider").owlCarousel({
            ...commonSettings,
            items: 4,
            loop: true,
            margin: 24,
            dots: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 1 },
                575: { items: 1 },
                767: { items: 2 },
                991: { items: 2 },
                1400: { items: 4 },
                1537: { items: 4 }
            }
        });

        // Latest News Slider
        $(".latest-news-slider").owlCarousel({
            ...commonSettings,
            items: 3,
            loop: true,
            dots: true,
            responsive: {
                0: { items: 1 },
                575: { items: 1 },
                767: { items: 1 },
                991: { items: 2 },
                1400: { items: 3 },
                1537: { items: 3 }
            }
        });

        // Quality Numbers Slider
        $(".quality-numbers-slider").owlCarousel({
            ...commonSettings,
            items: 5,
            loop: true,
            margin: 20,
            responsive: {
                0: { items: 1 },
                575: { items: 2 },
                767: { items: 2 },
                991: { items: 2 },
                1400: { items: 5, margin: 100 },
                1537: { items: 5, margin: 100 }
            }
        });
    }

    // Counter Animation (unchanged)
    function initCounters() {
        // ... existing counter code ...
    }
})(BER.resources);