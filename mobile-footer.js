// Mobile Footer Fix v2
// Completely replaces the footer on mobile with hardcoded flat links
// to permanently fix overlap/click issues

(function() {
    // Hardcoded footer links - guaranteed correct regardless of DOM state
    var footerData = [
        {
            title: 'Grade Levels',
            links: [
                { text: 'Kindergarten', href: 'kindergarten.html' },
                { text: '1st Grade', href: 'grade1.html' },
                { text: '2nd Grade', href: 'grade2.html' },
                { text: '3rd Grade', href: 'grade3.html' },
                { text: '4th Grade', href: 'grade4.html' },
                { text: '5th Grade', href: 'grade5.html' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { text: 'Free Resources', href: 'resources.html' },
                { text: 'About Us', href: 'about.html' },
                { text: 'Pricing', href: 'pricing.html' },
                { text: 'Parent Dashboard', href: 'family-dashboard.html' }
            ]
        },
        {
            title: 'Support',
            links: [
                { text: 'FAQs', href: 'faqs.html' },
                { text: 'Contact Us', href: 'contact.html' },
                { text: 'Community Forum', href: 'forum.html' },
                { text: 'Teaching Tips Blog', href: 'blog.html' }
            ]
        }
    ];

    var linkStyle = 'display:block;width:100%;padding:16px 20px;margin:6px 0;'
        + 'background:#374151;color:#d1d5db;text-decoration:none;border-radius:8px;'
        + 'font-size:16px;font-weight:500;box-sizing:border-box;border:2px solid #4b5563;'
        + 'text-align:left;-webkit-tap-highlight-color:rgba(245,158,11,0.3);';

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function buildMobileFooter() {
        if (!isMobile()) {
            // Restore original footers on desktop
            var allFooters = document.querySelectorAll('.site-footer');
            allFooters.forEach(function(f) {
                var orig = f.getAttribute('data-original');
                if (orig && f.getAttribute('data-mobile-active') === 'true') {
                    f.innerHTML = orig;
                    f.setAttribute('data-mobile-active', 'false');
                    f.style.display = '';
                }
            });
            return;
        }

        // Remove any duplicate footers (old mobile-footer HTML from previous fix)
        var allFooters = document.querySelectorAll('.site-footer');
        var primaryFooter = null;
        allFooters.forEach(function(f, i) {
            if (i === 0) {
                primaryFooter = f;
            } else {
                // Hide duplicate footers
                f.style.display = 'none';
            }
        });

        if (!primaryFooter) return;

        // Store original HTML for desktop restore
        if (!primaryFooter.getAttribute('data-original')) {
            primaryFooter.setAttribute('data-original', primaryFooter.innerHTML);
        }

        // Already replaced
        if (primaryFooter.getAttribute('data-mobile-active') === 'true') return;

        // Build mobile footer from hardcoded data
        var html = '<div style="padding:30px 20px 20px;">';

        footerData.forEach(function(section) {
            html += '<div style="color:white;font-size:18px;font-weight:bold;margin:20px 0 10px;padding:0;">'
                + section.title + '</div>';
            section.links.forEach(function(link) {
                html += '<a href="' + link.href + '" style="' + linkStyle + '">'
                    + link.text + '</a>';
            });
        });

        html += '<div style="text-align:center;padding-top:25px;margin-top:25px;border-top:1px solid #374151;">';
        html += '<p style="color:#9ca3af;font-size:14px;margin:10px 0;">&copy; 2026 HomeLearn Academy. All rights reserved.</p>';
        html += '<p style="margin:10px 0;"><a href="privacy-policy.html" style="color:#d1d5db;text-decoration:none;">Privacy Policy</a> | <a href="terms-of-service.html" style="color:#d1d5db;text-decoration:none;">Terms of Service</a></p>';
        html += '</div>';
        html += '</div>';

        // Remove old classes that might interfere
        primaryFooter.classList.remove('desktop-footer', 'mobile-footer');
        primaryFooter.style.display = '';
        primaryFooter.innerHTML = html;
        primaryFooter.setAttribute('data-mobile-active', 'true');

        // Add touch/hover feedback to each link
        var mobileLinks = primaryFooter.querySelectorAll('a');
        mobileLinks.forEach(function(link) {
            link.addEventListener('touchstart', function() {
                this.style.background = '#4b5563';
                this.style.borderColor = '#f59e0b';
                this.style.color = '#f59e0b';
            }, { passive: true });
            link.addEventListener('touchend', function() {
                var el = this;
                setTimeout(function() {
                    el.style.background = '#374151';
                    el.style.borderColor = '#4b5563';
                    el.style.color = '#d1d5db';
                }, 200);
            }, { passive: true });
            link.addEventListener('mouseenter', function() {
                this.style.background = '#4b5563';
                this.style.borderColor = '#f59e0b';
                this.style.color = '#f59e0b';
            });
            link.addEventListener('mouseleave', function() {
                this.style.background = '#374151';
                this.style.borderColor = '#4b5563';
                this.style.color = '#d1d5db';
            });
        });
    }

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildMobileFooter);
    } else {
        buildMobileFooter();
    }

    // Run on resize (with debounce)
    var resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(buildMobileFooter, 250);
    });
})();
