
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('backtotop');
    if (window.scrollY > 0) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('backtotop').addEventListener('click', scrollToTop);