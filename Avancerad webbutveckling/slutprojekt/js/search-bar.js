/**
 * Created by isak16 on 2017-02-24.
 */

$(document).ready(function () {
    var searchbarText = $('.search-bar input');
    var coffeeElements = $('.coffee-elements div');

    //On keypress in the searchbar
    searchbarText.keyup(function () {
        //The search query, trimmed and lowercase
        var tempSearchbarText = searchbarText[0].value.toString().toLocaleLowerCase();

        //Loops through each "coffeElement" and matches the name to the search query
        coffeeElements.each(function () {
            var elementText = $(this).text().trim().toString().toLocaleLowerCase();
            if (elementText.indexOf(tempSearchbarText) >= 0) {
                $(this).css("display", "inline-block");
            } else {
                $(this).css("display", "none");
            }
        });
    });
});
