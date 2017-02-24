/**
 * Created by isak16 on 2017-02-23.
 */
$( document ).ready(function() {
    var mainContent = $('.main-content');
    var startPage = $('.start-page');

    $('.logo').click(function(){
        mainContent.children().hide();
        startPage.show();
    });

    $('.start-button').click(function(){
        mainContent.children().hide();
        startPage.show();
    });

    $('.coffee-button').click(function(){
        mainContent.children().hide();
       $('.coffee-page').show();
    });

    $('.fairtrade-button').click(function(){
        mainContent.children().hide();
       $('.fairtrade-page').show();
    });

});