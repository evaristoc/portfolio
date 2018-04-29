$('.port-item').click(function() {
    $('.collapse').collapse('hide');
})

$('[data-toggle="tooltip"]').tooltip();

//https://codepen.io/nxworld/pen/OyRrGy
//https://css-tricks.com/introducing-css-scroll-snap-points/
$(function() {
    $('.port-item').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this)).offset().top }, 500, 'linear');
    });
});