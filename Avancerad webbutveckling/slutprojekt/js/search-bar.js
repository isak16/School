/**
 * Created by isak16 on 2017-02-24.
 */

$( document ).ready(function() {
    var searchbarText = $('.search-bar input');
    var coffeeElements = $('.coffee-elements div');

    searchbarText.keyup(function() {
        var tempSearchbarText = searchbarText[0].value.toString().toLocaleLowerCase();
        coffeeElements.each(function() {
            var elementText = $(this).text().trim().toString().toLocaleLowerCase();

            if(elementText.indexOf(tempSearchbarText) >= 0){
                $(this).css("display", "inline-block");
            }else{
                $(this).css("display", "none");
            }
        });
    });


});
