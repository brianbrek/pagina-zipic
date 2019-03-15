/* ZIPIC Funciones JS */

/* Modals */
$(document).ready(function(){
    $('.modal').modal();
});

/* Parallax */
$(document).ready(function(){
    $('.parallax').parallax();
});

/* Animate CSS */   
$(".dos, .cuatro, .seis, .uno").hover(function(){
    $(this).addClass("pulse");
}, function(){
$(this).removeClass("pulse");
});