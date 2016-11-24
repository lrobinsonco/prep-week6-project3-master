/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1
$('.changeColor').click(function () {
  $('ul li:nth-child(3)').css('color' , '#8A2BE2')
})

// Question #2
$('ul li:nth-child(4)').click(function() {
  $(this).append("<li>Place another 'li' below me</li>");
});
// $('ul li:nth-child(4)').click(function() {
//   $(this).append('<li>hi</li>');
//   });
// Question #3
$('.removeLi').click(function() {
  $('ul li:nth-child(2)').hide()
})

// Question #4
$('ul li:last-child').click(function() {
  $(this).css('font-size' , '40px')
  $('ul li:nth-last-child(n+2)').hide()
})

// Question #5
$('.cute').click(function() {
  $(this).clone().appendTo($('.clones'))
})

  // Question #6
$('html').dblclick(function() {
  $('#makeSquare').css('width', '120px')
  $('#makeSquare').css('border-radius', '0px')

})


// Question #7
$('.black').click(function() {
  $('html').css('background-color', '#000')
})
$('.wood').click(function() {
  $('html').css('background-image', 'url("http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-3.jpg")')
})
$('.chaos').click(function() {
  $('html').css('background-image', 'url("http://image.shutterstock.com/z/stock-photo-abstract-chaos-painting-design-wallpaper-69559093.jpg")')
})
$('.restore').click(function() {
  $('html').css('background-image', 'none')
  $('html').css('background-color', '#fff')
})
  // Question #8
$('#hover').hover(function() {
  $(this).css('background-color', 'red'),


$('#hover').click(function() {
  $(this).toggleClass('green')
});


});
})
