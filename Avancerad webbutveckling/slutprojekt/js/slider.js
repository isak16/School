/**
 * Created by isak16 on 2017-02-23.
 */

$( document ).ready(function() {
    /**
     * Fades out the current image then fades in the next, loops every 3000ms
     */
    setInterval(function(){
            $('.slider :first-child').fadeOut('slow', function(){
                $('.slider :first-child').next('img').fadeIn('slow').end().appendTo('.slider');
            });
        },3000);
});