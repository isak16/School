/**
 * Created by isak16 on 2017-02-23.
 */
$( document ).ready(function() {

    var mainContent = $('.all-content');
    $(mainContent).load('html/home.html');

    $('.navbar-brand').click(function(){
        $(".nav li").removeClass("active-custom");
        $('.home-button').addClass("active-custom");
        mainContent.empty();
        $(mainContent).load('html/home.html');
    });

    $('.home-button').click(function(){
        mainContent.empty();
        $(mainContent).load('html/home.html');
    });

    $('.coffee-button').click(function(){
        mainContent.empty();
        $(mainContent).load('html/coffee.html');
    });

    $('.recipes-button').click(function(){
        mainContent.empty();
        $(mainContent).load('html/recipes.html');
    });

    $('.contact-button').click(function(){
        mainContent.empty();
        $(mainContent).load('html/contact.html');
    });

    $(".nav li").on("click", function() {
        $(".nav li").removeClass("active-custom");
        $(this).addClass("active-custom");
    });

});

