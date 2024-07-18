document.addEventListener('DOMContentLoaded', function() {
    let poems = document.querySelectorAll('.poem');
    poems.forEach(poem => {
        poem.style.opacity = 0;
    });

    window.addEventListener('scroll', function() {
        poems.forEach(poem => {
            let position = poem.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;

            if (position < screenPosition) {
                poem.style.animation = 'fadeIn 1s forwards';
            }
        });
    });
});
