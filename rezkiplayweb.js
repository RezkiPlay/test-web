document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.classList.add("appear");
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const logo = document.querySelector(".logo");
    const sections = document.querySelectorAll("section");
    const heroSection = document.querySelector("#hero");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Mencegah perilaku tautan default
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Menghapus kelas animasi dari semua bagian terlebih dahulu
            sections.forEach(section => section.classList.remove("smooth-slide-in"));

            // Tambahkan kelas animasi ke bagian target
            targetSection.classList.add("smooth-slide-in");

            // Gulir halus ke bagian target
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Mengembalikan ke Hero Section (Hi There) saat logo diklik
    logo.addEventListener("click", function (e) {
        e.preventDefault(); // Mencegah perilaku tautan default
        // Menghapus kelas animasi dari semua bagian
        sections.forEach(section => section.classList.remove("smooth-slide-in"));
        // Gulir halus kembali ke Hero Section
        heroSection.scrollIntoView({ behavior: "smooth" });
    });
});
// Update class active on scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header nav a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});
AOS.init({
    duration: 800, // durasi animasi
    once: true // animasi hanya terjadi sekali saat elemen muncul
});
// Update class active on scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header nav a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});
// JavaScript untuk toggling menu mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('mobile-active'); // Menampilkan/menghilangkan menu saat di klik
    });
});
