/**
 * Created by isak16 on 2017-02-23.
 */
$( document ).ready(function() {
    var mainContent = $('.main-content');
    var startPage = $('.start-page');

    $('.logo').click(function(){
        mainContent.children().hide();
        startPage.show();
        removeOtherActiveInHeader();
        $('.start-button').addClass("active");
    });

    $('.start-button').click(function(){
        mainContent.children().hide();
        startPage.show();
        removeOtherActiveInHeader();
        $(this).addClass("active");
    });

    $('.coffee-button').click(function(){
        mainContent.children().hide();
       $('.coffee-page').show();
        removeOtherActiveInHeader();
        $(this).addClass("active");

    });

    $('.location-button').click(function(){
        mainContent.children().hide();
       $('.location-page').show();
        removeOtherActiveInHeader();
        $(this).addClass("active");
    });

});



function removeOtherActiveInHeader(){
    $('header a').each(function() {
        $(this).removeClass("active");
    });
}