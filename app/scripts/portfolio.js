/**
 * petarbojinov.com - 2016
 */

var PB = (function() {
    // $('.callout').okvideo({ video: 'https://vimeo.com/86394920' });
    window.sr = new scrollReveal();
})();

/**
 * GA tracking
 */

/** 404 button **/
$('#ga-404').on('click', function() {
    ga('send', 'event', 'Button', 'Press', '404');
});

/** Section 1 **/
$('#intro').on('click', function() {
    ga('send', 'event', 'Intro', 'Press', 'About');
});

/** Projects **/
$('#ga-opensource').on('click', function() {
    ga('send', 'event', 'Interests', 'Press', 'Open Source');
    // window.location.href = 'https://github.com/pbojinov';
    window.open('https://github.com/pbojinov', '_blank');
});
$('#ga-write').on('click', function() {
    ga('send', 'event', 'Interests', 'Press', 'Writing');
    // window.location.href = 'https://medium.com/@pbojinov';
    window.open('https://medium.com/@pbojinov', '_blank');
});
$('#ga-perf').on('click', function() {
    ga('send', 'event', 'Interests', 'Press', 'Performance');
    // window.location.href = 'https://twitter.com/hashtag/perfmatters';
    window.opne('https://twitter.com/hashtag/perfmatters', '_blank');
});
$('#ga-music').on('click', function() {
    ga('send', 'event', 'Interests', 'Press', 'Music');
    // window.location.href = 'https://twitter.com/hashtag/perfmatters';
    window.opne('https://soundcloud.com/almanor/guess-who', '_blank');
});

/** Social  Buttons **/
$('#ga-linkedin').on('click', function() {
    ga('send', 'event', 'Social', 'Press', 'LinkedIn');
});
$('#ga-github').on('click', function() {
    ga('send', 'event', 'Social', 'Press', 'GitHub');
});
$('#ga-stackoverflow').on('click', function() {
    ga('send', 'event', 'Social', 'Press', 'StackOverflow');
});
$('#ga-twitter').on('click', function() {
    ga('send', 'event', 'Social', 'Press', 'Twitter');
});
$('#ga-google').on('click', function() {
    ga('send', 'event', 'Social', 'Press', 'Google+');
});
$('#ga-mail').on('click', function() {
    ga('send', 'event', 'Social', 'Press', 'Email');
});
$('#ga-medium').on('click', function() {
    ga('send', 'event', 'Social', 'Press', 'Medium');
});
$('#ga-soundcloud').on('click', function() {
    ga('send', 'event', 'Social', 'Press', 'Soundcloud');
});
$('#ga-vimeo').on('click', function() {
    ga('send', 'event', 'Social', 'Press', 'Vimeo');
});
$('#ga-book').on('click', function() {
    ga('send', 'event', 'Social', 'Press', 'Books');
});

/** Next Section Pagination */
$('.next-action').on('click', function() {
    var nextSection = $(this).data('next');
    $('html, body').animate({
        scrollTop: $(nextSection).offset().top
    }, 500);
});
