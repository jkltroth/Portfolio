// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown({
        coverTrigger: false,
        constrainWidth: false
    });
    $('.carousel').carousel({
        shift: 50,
        padding: 150
    });
    
});