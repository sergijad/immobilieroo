document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Animate services on scroll
    const serviceItems = document.querySelectorAll('.service-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });

    serviceItems.forEach(item => {
        observer.observe(item);
    });

    // Contact button animation
    const contactButton = document.getElementById('contact-button');
    contactButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e65c00';
    });
    contactButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#ff6600';
    });

    // Text animation for h2 and h3
    const textElements = document.querySelectorAll('.content h2, .content h3');
    textElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const textObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.5
    });

    textElements.forEach(element => {
        textObserver.observe(element);
    });

    // Notification permission request
    if ('Notification' in window) {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('Notifications enabled', {
                        body: 'You will receive updates from IMMOBILIERO.INC',
                        icon: 'images/Immobiliero logo.png'
                    });
                } else {
                    alert('Notifications are disabled. You will not receive updates from IMMOBILIERO.INC.');
                }
            });
        }
    } else {
        alert('Your browser does not support notifications.');
    }

    // Animation for nav elements
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(-20px)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    });

    window.addEventListener('load', () => {
        navItems.forEach(item => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Pulse effect for the contact button
    const contactButton = document.getElementById('contact-button');
    contactButton.classList.add('pulse');

    

    // Hover effect for service items to display more information
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        const info = document.createElement('div');
        info.classList.add('service-info');
        info.textContent = 'hh'.textContent;
        item.appendChild(info);

        item.addEventListener('mouseover', () => {
            info.style.opacity = 1;
            info.style.transform = 'translateY(0)';
        });

        item.addEventListener('mouseout', () => {
            info.style.opacity = 0;
            info.style.transform = 'translateY(10px)';
        });
    });

    

    // Scroll-to-top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerText = '↑';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px';
    scrollToTopButton.style.height= '3rem';
    scrollToTopButton.style.width= '3rem';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '50%';
    scrollToTopButton.style.backgroundColor = '#ff6600';
    scrollToTopButton.style.color = '#fff';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.display = 'none';
    scrollToTopButton.style.zIndex = '1000';
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.style.transform = 'scale(1.05) rotate(1deg)';
            project.style.opacity = '0.8';
            project.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            const text = project.querySelector('p');
            text.style.transform = 'translateY(-10px)';
            text.style.transition = 'transform 0.3s ease';
        });

        project.addEventListener('mouseout', () => {
            project.style.transform = 'scale(1) rotate(0deg)';
            project.style.opacity = '1';
            project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            const text = project.querySelector('p');
            text.style.transform = 'translateY(0)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.style.transform = 'scale(1.1) rotate(2deg)';
            project.style.opacity = '0.9';
            project.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
            project.style.backgroundColor = '#f0f0f0';
            const text = project.querySelector('p');
            text.style.transform = 'translateY(-15px)';
            text.style.transition = 'transform 0.3s ease, color 0.3s ease';
            text.style.color = '#ff7f50';
        });

        project.addEventListener('mouseout', () => {
            project.style.transform = 'scale(1) rotate(0deg)';
            project.style.opacity = '1';
            project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            project.style.backgroundColor = 'white';
            const text = project.querySelector('p');
            text.style.transform = 'translateY(0)';
            text.style.color = 'white';
        });
    });
});
 
