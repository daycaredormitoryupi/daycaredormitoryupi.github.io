// Animasi Navbar saat Scroll (Mengubah ukuran & transparansi)
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('py-2', 'bg-white/100', 'shadow-md');
        navbar.classList.remove('py-4', 'bg-white/90');
    } else {
        navbar.classList.add('py-4', 'bg-white/90');
        navbar.classList.remove('py-2', 'shadow-md');
    }
});

// Smooth scroll untuk semua link navigasi (#)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Jika link hanya "#", jangan lakukan smooth scroll (biarkan default)
        if(this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset agar tidak tertutup navbar
                behavior: 'smooth'
            });
        }
    });
});

// Pesan konfirmasi sederhana saat mengklik email
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log("Membuka aplikasi email...");
    });
});