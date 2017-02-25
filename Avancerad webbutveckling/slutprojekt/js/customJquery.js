/**
 * Created by isak16 on 2017-02-23.
 */



$( document ).ready(function() {
    $('.slider img:gt(0)').hide();

    setInterval(function(){
            $('.slider :first-child').fadeOut('slow', function(){
                $('.slider :first-child').next('img').fadeIn('slow').end().appendTo('.slider');
            });

        },3000);
});