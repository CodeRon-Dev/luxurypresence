document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show'); // Toggle the 'show' class

    // Toggle visibility of icons
    this.style.display = 'none';
    document.getElementById('close-icon').style.display = 'block';
});

document.getElementById('close-icon').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('show'); // Remove the 'show' class

    // Toggle visibility of icons
    this.style.display = 'none';
    document.getElementById('menu-icon').style.display = 'block';
});

// Counting Animation JS
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    let hasStarted = false;

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = -1; // Start counting from 0
        const increment = 1; // Increment by 1

        const updateCount = () => {
            count += increment;
            if (count <= target) { // Count up to the target
                counter.textContent = count;
                setTimeout(updateCount, 500); // Delay for slower counting (500ms)
            } else {
                counter.textContent = target; // Ensure it ends at target
            }
        };

        updateCount();
    };

    const resetCounts = () => {
        counters.forEach(counter => {
            counter.textContent = '0'; // Reset count to 0
        });
        hasStarted = false; // Allow the counting to start again
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!hasStarted) {
                    resetCounts(); // Reset counts when the section is visible
                    counters.forEach(counter => countUp(counter));
                    hasStarted = true; // Prevent multiple triggers
                }
            } else {
                resetCounts(); // Reset counts when the section is out of view
            }
        });
    }, { threshold: 0.0 }); // Trigger when any part is visible

    observer.observe(document.getElementById('accomplishments'));
});

// Circle Magnetic Animation
let boxes = document.querySelectorAll('.counting'); // Select all counting elements

boxes.forEach(box => {
    box.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let BoxWidth = box.clientWidth;
        let BoxHeight = box.clientHeight;
        let moveX = (x - BoxWidth / 2) / 3; // Adjusted for a smoother effect
        let moveY = (y - BoxHeight / 2) / 3; // Adjusted for a smoother effect
        box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });

    box.addEventListener('mouseout', () => {
        box.style.transform = ``; // Reset transformation
    });
});

// reveal animation on scroll
window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++) {
            
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active-scroll');
            }
            else {
                reveals[i].classList.remove('active-scroll');
            }
        }
    }