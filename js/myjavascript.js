$('.port-item').click(function() {
    $('.collapse').collapse('hide');
})

$('[data-toggle="tooltip"]').tooltip();

$(function() {
    $('.port-item').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this)).offset().top }, 500, 'linear');
    });
});