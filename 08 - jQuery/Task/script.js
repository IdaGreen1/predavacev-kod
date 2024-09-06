$(document).ready(function () {
$('p:first-child').css('background-color', 'yellow');
$('.gone').click( function () {
    $(this).slideUp();
});
 $('#dclick').dblclick( function () {
    $(this).slideUp();
 });
$('.hide-btn').click( function (){
    $('p').hide();
});
$('.show-btn').click( function () {
    $('p').show();
});
$('#button-box').click( function () {
    $('.box').animate({width:300})
});
$('#callback').click( function () {
    $('.gone').hide
   });
   $('#callback').click( function () {
    alert('animacija završena')
   });
$('.toggle-btn').click( function () {
    $('p').fadeOut()
    $('p').fadeIn()
});   
});