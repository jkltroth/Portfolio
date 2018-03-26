// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {

    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown({
        hover: false
    });
    
});