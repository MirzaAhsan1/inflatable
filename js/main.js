$(document).ready(function(){
    // menu click event
    $('#menu-bar').click(function() {
        $('#header-menu').toggleClass('active');
        $('body').toggleClass('active');
    });
});

