let isAtTop = false;

document.addEventListener('scroll', function (event) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop <= 0 && !isAtTop) {
        // Prevent upward scrolling
        window.scrollTo(0, 0);
        isAtTop = true; // Lock at the top
    } else if (scrollTop > 0) {
        isAtTop = false; // Allow normal scrolling
    }
});