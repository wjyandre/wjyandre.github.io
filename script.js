document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current navigation item based on page URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if ((currentPage === linkPage) || 
           (currentPage === '' && linkPage === 'index.html') ||
           (currentPage === '/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Add subtle fade-in animation for content elements with progressive delay
    const contentElements = document.querySelectorAll('.blurb, .publication, .teaching-item, .paper');
    contentElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(5px)';
        element.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 + (index * 40));
    });
    
    // Enhanced paper toggles for TL;DR and citations
    document.querySelectorAll('.paper-links a').forEach(link => {
        if (link.getAttribute('onclick') && 
            (link.textContent === 'TL;DR' || link.textContent === 'BibTeX' || link.textContent === 'Citation')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get parent paper element
                const paperElement = this.closest('.paper');
                
                // Find which section should be toggled based on link text
                const toggleClass = this.textContent === 'TL;DR' ? 'show-tldr' : 'show-citation';
                const otherToggleClass = this.textContent === 'TL;DR' ? 'show-citation' : 'show-tldr';
                
                // Remove other toggle class if it exists
                if (paperElement.classList.contains(otherToggleClass)) {
                    paperElement.classList.remove(otherToggleClass);
                    // Reset styling for the other toggle button
                    paperElement.querySelectorAll('.paper-links a').forEach(otherLink => {
                        if ((otherLink.textContent === 'TL;DR' && otherToggleClass === 'show-tldr') || 
                            ((otherLink.textContent === 'Citation' || otherLink.textContent === 'BibTeX') && otherToggleClass === 'show-citation')) {
                            otherLink.style.fontWeight = '';
                            otherLink.style.textDecoration = '';
                        }
                    });
                }
                
                // Toggle the class for this button
                paperElement.classList.toggle(toggleClass);
                
                // Visual indicator for active button
                if (paperElement.classList.contains(toggleClass)) {
                    this.style.fontWeight = '700';
                    this.style.textDecoration = 'underline';
                } else {
                    this.style.fontWeight = '';
                    this.style.textDecoration = '';
                }
            });
        }
    });
    
    // Add focus states for better accessibility
    document.querySelectorAll('.paper-links a').forEach(link => {
        link.addEventListener('focus', function() {
            this.style.outline = '1px dotted var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        link.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Improve paper card hover effects
    document.querySelectorAll('.paper').forEach(paper => {
        paper.addEventListener('mouseenter', function() {
            this.querySelectorAll('.paper-links a').forEach(link => {
                link.style.opacity = '1';
            });
        });
        
        paper.addEventListener('mouseleave', function() {
            this.querySelectorAll('.paper-links a').forEach(link => {
                link.style.opacity = '0.9';
            });
        });
    });
    
    // Add hover effect to all links with improved transitions
    document.querySelectorAll('a').forEach(link => {
        // Skip nav links which have their own styling
        if (link.closest('nav')) return;
        
        link.style.transition = 'color 0.2s ease, transform 0.2s ease';
        
        link.addEventListener('mouseenter', function() {
            if (this.closest('.paper-links')) {
                this.style.transform = 'translateY(-2px)';
            }
            this.style.color = '#006A96'; // UC San Diego Light Blue
        });
        
        link.addEventListener('mouseleave', function() {
            if (this.closest('.paper-links')) {
                this.style.transform = 'translateY(0)';
            }
            this.style.color = '';
        });
    });
    
    // Enhance external links with proper attributes
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}); 