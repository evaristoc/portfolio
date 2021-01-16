//console.log($('#home')[0])
var openSection = "#home";

$('.port-item').click(function() {
    //console.log($('.collapse')[0]);
    //console.log($('#home')[0] === $('.collapse')[0]);
    //console.log($(this).attr("data-target"));
    //for(let i = 0; i < 4; i++){
    //    console.log($(".collapse")[i].id);
    //    console.log($(".collapse")[i].className.split(/\s+/));
    //};
    //console.log($(this).attr("data-target") == openSection);
    if($(this).attr("data-target") == openSection){
        event.stopPropagation();
        return;
    }else{
        $('.collapse').collapse('hide');
        openSection = $(this).attr("data-target");
    };
    
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