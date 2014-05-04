/**
 * GA code
 */

/** 404 button **/
$('#ga-404').on('click', function() {
    ga('send', 'event', 'Button', 'Press', '404');
});
/** Menu Links **/
$('#ga-pb').on('click', function() {
    ga('send', 'event', 'Menu', 'Press', 'Name');
});
$('#ga-top').on('click', function() {
    ga('send', 'event', 'Menu', 'Press', 'Home');
});
$('#ga-intro').on('click', function() {
    ga('send', 'event', 'Menu', 'Press', 'About');
});

$('#ga-contact').on('click', function() {
    ga('send', 'event', 'Menu', 'Press', 'Contact');
});

/** Section 1 **/
$('#intro').on('click', function() {
    ga('send', 'event', 'Intro', 'Press', 'About');
});

/** Projects **/
$('#ga-opensource').on('click', function() {
    ga('send', 'event', 'Interests', 'Press', 'Open Source');
    window.location.href = 'https://github.com/pbojinov';
});
$('#ga-write').on('click', function() {
    ga('send', 'event', 'Interests', 'Press', 'Writing');
    console.log('click on write')
    window.location.href = 'https://medium.com/@pbojinov';
});
$('#ga-perf').on('click', function() {
    ga('send', 'event', 'Interests', 'Press', 'Performance');
    window.location.href = 'https://twitter.com/hashtag/perfmatters';
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

/** Menu Specific Code **/
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    ga('send', 'event', 'Menu', 'Press', 'Toggle');
});

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
