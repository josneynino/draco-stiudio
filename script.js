// script.js

// --- Lógica del carrusel (si la necesitas en index.html) ---
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("hero-section");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length > 0) { // Asegura que haya slides antes de intentar acceder a ellos
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

function prevSlide() {
    plusSlides(-1);
}

function nextSlide() {
    plusSlides(1);
}

// Opcional: Auto-avance del carrusel
// setInterval(() => {
//     plusSlides(1);
// }, 5000); // Cambia de slide cada 5 segundos

// --- Lógica del menú de hamburguesa ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) { // Asegura que los elementos existen
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Opcional: para animar el icono
        });
    }
});


// --- NUEVA LÓGICA: Desplazamiento a sección al cargar la página ---
document.addEventListener('DOMContentLoaded', function() {
    // Si la URL contiene un hash (ej. #caster-info)
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1); // Elimina el '#'
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Usa setTimeout para dar tiempo al navegador a renderizar la página
            // antes de intentar hacer scroll. Un pequeño retraso es a menudo necesario.
            setTimeout(() => {
                // Comportamiento de desplazamiento suave nativo
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Opcional: Ajustar el desplazamiento para la barra de navegación fija (si aplica)
                // const navbarHeight = document.querySelector('.navbar').offsetHeight;
                // window.scrollBy(0, -navbarHeight); // Desplaza hacia arriba el alto de la navbar
            }, 100); // Puedes ajustar este tiempo si es necesario
        }
    }

    // Lógica para todos los enlaces internos de la página (opcional: si quieres smooth scroll en general)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Previene el comportamiento de salto predeterminado solo si es un ancla interna
            if (this.pathname === window.location.pathname) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Opcional: Ajustar el desplazamiento para la barra de navegación fija (si aplica)
                    // const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    // window.scrollBy(0, -navbarHeight);
                }
            }
        });
    });
});