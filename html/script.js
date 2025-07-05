// DOM Ready Handler
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
    setupNavigation();
    setupMobileMenu();
    setupHeroAnimations();
    setupScrollEffects();
    setupFormHandling();
    setupCardHovers();
    setupParticleAnimations();
    setupLanguageToggle();
    setupSmoothScrolling();
    setupHeaderScroll();
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Remove active class from all nav links
                navLinks.forEach(navLink => {
                    navLink.classList.remove('nav-link-active');
                });
                
                // Add active class to clicked link
                this.classList.add('nav-link-active');
                
                // Scroll to target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const mobileClose = document.querySelector('[data-mobile-close]');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('mobile-menu-open');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileClose && mobileMenu) {
        mobileClose.addEventListener('click', function() {
            mobileMenu.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
        });
    }
    
    // Close menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Handle mobile nav link clicks
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu
                mobileMenu.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
                
                // Scroll to target section
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        });
    });
}

// Hero section animations
function setupHeroAnimations() {
    const heroElements = [
        '[data-hero-badge]',
        '[data-hero-title]',
        '[data-hero-description]'
    ];
    
    // Animate hero elements on load
    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 + (index * 200));
        }
    });
    
    // Setup hero button animations
    const heroButtons = document.querySelectorAll('[data-hero-appointment], [data-hero-contact]');
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('button-hover-active');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('button-hover-active');
        });
        
        button.addEventListener('click', function() {
            if (this.hasAttribute('data-hero-appointment')) {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                    contactSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else if (this.hasAttribute('data-hero-contact')) {
                const phone = '+63 912 345 6789';
                window.open(`tel:${phone}`, '_self');
            }
        });
    });
}

// Scroll effects and animations
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll(`
        [data-services-title],
        [data-services-description],
        [data-doctors-title],
        [data-doctors-description],
        [data-contact-title],
        [data-contact-description],
        [data-luxury-title],
        [data-luxury-description]
    `);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
        observer.observe(element);
    });
}

// Form handling functionality
function setupFormHandling() {
    const appointmentForm = document.querySelector('[data-appointment-form]');
    const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = {};
            
            // Collect form values
            const inputs = this.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (input.name) {
                    formValues[input.name] = input.value;
                }
            });
            
            // Validate form
            if (validateAppointmentForm(inputs)) {
                // Show success message
                showFormMessage('success', 'Appointment request submitted successfully! We will contact you within 24 hours.');
                
                // Reset form
                this.reset();
                
                // Remove any error states
                inputs.forEach(input => {
                    input.classList.remove('form-error');
                });
            } else {
                showFormMessage('error', 'Please fill in all required fields correctly.');
            }
        });
    }
    
    // Add focus effects to form inputs
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#2563eb';
            this.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.borderColor = '#e5e7eb';
                this.style.boxShadow = 'none';
            }
        });
        
        input.addEventListener('input', function() {
            // Remove error state when user starts typing
            this.classList.remove('form-error');
        });
    });
}

// Form validation function
function validateAppointmentForm(inputs) {
    let isValid = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        
        if (input.required && !value) {
            input.classList.add('form-error');
            isValid = false;
        } else if (input.type === 'email' && value && !isValidEmail(value)) {
            input.classList.add('form-error');
            isValid = false;
        } else if (input.type === 'tel' && value && !isValidPhone(value)) {
            input.classList.add('form-error');
            isValid = false;
        } else {
            input.classList.remove('form-error');
            input.classList.add('form-success');
        }
    });
    
    return isValid;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone);
}

// Show form messages
function showFormMessage(type, message) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message-${type}`;
    messageElement.style.cssText = `
        padding: 12px 16px;
        border-radius: 8px;
        margin-top: 16px;
        font-size: 14px;
        font-weight: 500;
        ${type === 'success' 
            ? 'background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; color: #065f46;' 
            : 'background-color: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; color: #991b1b;'
        }
    `;
    messageElement.textContent = message;
    
    // Insert message after form
    const form = document.querySelector('[data-appointment-form]');
    if (form) {
        form.appendChild(messageElement);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// Card hover effects
function setupCardHovers() {
    // Service cards
    const serviceCards = document.querySelectorAll('[data-service-card]');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover-active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover-active');
        });
    });
    
    // Doctor cards
    const doctorCards = document.querySelectorAll('[data-doctor-card]');
    doctorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover-active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover-active');
        });
    });
    
    // Trust badges
    const trustBadges = document.querySelectorAll('[data-trust-badge]');
    trustBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.classList.add('trust-badge-active');
        });
        
        badge.addEventListener('mouseleave', function() {
            this.classList.remove('trust-badge-active');
        });
    });
    
    // Contact details
    const contactDetails = document.querySelectorAll('[data-contact-detail]');
    contactDetails.forEach(detail => {
        detail.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        detail.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Luxury features
    const luxuryFeatures = document.querySelectorAll('[data-luxury-feature]');
    luxuryFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Particle animations
function setupParticleAnimations() {
    const particles = document.querySelectorAll('[data-particle]');
    
    particles.forEach((particle, index) => {
        // Set initial random position
        const randomTop = Math.random() * 80 + 10; // 10% to 90%
        const randomLeft = Math.random() * 80 + 10; // 10% to 90%
        
        particle.style.top = randomTop + '%';
        particle.style.left = randomLeft + '%';
        particle.style.position = 'absolute';
        particle.style.zIndex = '1';
        
        // Add floating animation
        particle.classList.add('particle-animated');
        
        // Add random delay
        particle.style.animationDelay = (index * 1.5) + 's';
        
        // Move particles occasionally
        setInterval(() => {
            const newTop = Math.random() * 80 + 10;
            const newLeft = Math.random() * 80 + 10;
            
            particle.style.transition = 'all 10s ease-in-out';
            particle.style.top = newTop + '%';
            particle.style.left = newLeft + '%';
        }, 15000 + (index * 3000)); // Different intervals for each particle
    });
}

// Language toggle functionality
function setupLanguageToggle() {
    const languageToggle = document.querySelector('[data-language-toggle]');
    const languageText = document.querySelector('.language-text');
    let isArabic = false;
    
    if (languageToggle && languageText) {
        languageToggle.addEventListener('click', function() {
            isArabic = !isArabic;
            
            if (isArabic) {
                languageText.textContent = 'English';
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'ar');
                // Add Arabic font family to body
                document.body.style.fontFamily = "'Tajawal', sans-serif";
            } else {
                languageText.textContent = 'العربية';
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.setAttribute('lang', 'en');
                // Reset to default font family
                document.body.style.fontFamily = "'Inter', sans-serif";
            }
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

// Smooth scrolling for all internal links
function setupSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Header scroll effects
function setupHeaderScroll() {
    const header = document.querySelector('[data-header]');
    let lastScrollTop = 0;
    let scrollTimeout;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Clear timeout
            clearTimeout(scrollTimeout);
            
            // Add scrolled class when scrolling down
            if (scrollTop > 10) {
                header.style.background = 'linear-gradient(90deg, rgba(59, 130, 246, 0.95) 0%, rgba(20, 184, 166, 0.95) 50%, rgba(168, 85, 247, 0.95) 100%)';
                header.style.backdropFilter = 'blur(12px)';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            } else {
                header.style.background = 'linear-gradient(90deg, #3b82f6 0%, #14b8a6 50%, #a855f7 100%)';
                header.style.backdropFilter = 'none';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// Appointment button functionality
document.addEventListener('click', function(e) {
    if (e.target.matches('[data-appointment-btn], [data-hero-appointment], .mobile-appointment-btn')) {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    if (e.target.matches('[data-luxury-btn]')) {
        e.preventDefault();
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            servicesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Form submit button animation
document.addEventListener('click', function(e) {
    if (e.target.matches('[data-form-submit]')) {
        // Add loading state
        e.target.style.transform = 'scale(0.98)';
        e.target.textContent = 'Submitting...';
        
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
            e.target.textContent = 'Book Appointment';
        }, 1000);
    }
});

// Search functionality
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm.length > 2) {
            // Simple search functionality - highlight matching service cards
            const serviceCards = document.querySelectorAll('[data-service-card]');
            serviceCards.forEach(card => {
                const title = card.querySelector('.service-title');
                const description = card.querySelector('.service-description');
                
                if (title && description) {
                    const titleText = title.textContent.toLowerCase();
                    const descText = description.textContent.toLowerCase();
                    
                    if (titleText.includes(searchTerm) || descText.includes(searchTerm)) {
                        card.style.border = '2px solid #2563eb';
                        card.style.transform = 'scale(1.02)';
                    } else {
                        card.style.border = '2px solid #e0f2fe';
                        card.style.transform = 'scale(1)';
                    }
                }
            });
        } else {
            // Reset all cards
            const serviceCards = document.querySelectorAll('[data-service-card]');
            serviceCards.forEach(card => {
                card.style.border = '2px solid #e0f2fe';
                card.style.transform = 'scale(1)';
            });
        }
    });
}

// Contact phone number click handler
document.addEventListener('click', function(e) {
    if (e.target.matches('.contact-text, .footer-contact-text')) {
        const text = e.target.textContent;
        if (text.includes('+63') || text.includes('912')) {
            window.open(`tel:${text}`, '_self');
        } else if (text.includes('@')) {
            window.open(`mailto:${text}`, '_self');
        }
    }
});

// Initialize intersection observer for scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(`
        .service-card,
        .doctor-card,
        .luxury-feature,
        .contact-detail
    `);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initScrollAnimations, 500);
});

// Service card learn more buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.service-btn')) {
        e.preventDefault();
        
        // Get the service card
        const serviceCard = e.target.closest('[data-service-card]');
        const serviceTitle = serviceCard.querySelector('.service-title').textContent;
        
        // Simple modal or expand functionality
        alert(`Learn more about ${serviceTitle}. Contact us at +63 912 345 6789 for detailed information about this service.`);
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations can be added here
}, 100));

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.backgroundColor = '#f3f4f6';
            this.style.color = '#9ca3af';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.fontSize = '14px';
            this.innerHTML = 'Image not available';
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        if (mobileMenu && mobileMenu.classList.contains('mobile-menu-open')) {
            mobileMenu.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
        }
    }
    
    // Enter key activates buttons
    if (e.key === 'Enter' && e.target.matches('button')) {
        e.target.click();
    }
});

// Print styles support
window.addEventListener('beforeprint', function() {
    // Hide non-essential elements for printing
    const elementsToHide = document.querySelectorAll(`
        .floating-particle,
        .mobile-menu,
        .search-wrapper,
        .header-actions
    `);
    
    elementsToHide.forEach(element => {
        element.style.display = 'none';
    });
});

window.addEventListener('afterprint', function() {
    // Restore hidden elements after printing
    const elementsToShow = document.querySelectorAll(`
        .floating-particle,
        .mobile-menu,
        .search-wrapper,
        .header-actions
    `);
    
    elementsToShow.forEach(element => {
        element.style.display = '';
    });
});

console.log('Arevalo Dental Clinic website initialized successfully!');