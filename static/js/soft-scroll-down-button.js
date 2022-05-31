document.getElementById("scroll-down-button").addEventListener("click", function() {
    // Scrolling on 1 page
    $('html, body').animate({
        scrollTop: $('#scroll-to-lable').offset().top
    }, 500);
})

document.addEventListener("scroll", function() {
    document.getElementById("scroll-down-button").style.opacity = '0';
})