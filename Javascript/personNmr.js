/**
 * Created by isak16 on 2017-02-20.
 */



//Dagens datum i variabler som används i personummeruträkningsfunktionerna
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

if (month < 10) {
    month = "0" + month;
}
if (day < 10) {
    day = "0" + month;
}

var personObjects = {
    "persons": [
        {
            "name": "David",
            "personnr": "950224-9257"
        }
        ,
        {
            "name": "Nadja",
            "personnr": "740630-8069"
        },
        {
            "name": "FejkLegg",
            "personnr": "920210-4016"
        },
        {
            "name": "Sebastian",
            "personnr": "990629-6994"
        },
        {
            "name": "Erik",
            "personnr": "890308-0466"
        },
        {
            "name": "Johan",
            "personnr": "700512-8421"
        },
        {
            "name": "Stina",
            "personnr": "840603-4978"
        },
        {
            "name": "Mathilda",
            "personnr": "080310-2888"
        }
    ]
};




console.log(returnOlderThan(personObjects, 18));
console.log(isBirthday("980221"));



/**
 *
 * @param personNr
 * @returns {boolean}
 */
function isBirthday(personNr){
    var inputYear = personNr.slice(0, 2);
    var inputMonth = personNr.slice(2, 4);
    var inputDay = personNr.slice(4, 6);

    //Formatera om till rätt format
    var dateRightFromat = inputMonth+"/"+inputDay+"/"+inputYear;

    var dateOfBirth = new Date(dateRightFromat);
    var tempMonth = month - dateOfBirth.getMonth() - 1;
    var tempDay = day - dateOfBirth.getDate();

    //Sätter in boolean-uttrycket direkt in i return som retunerar true/false
    return tempDay === 0 && tempMonth === 0;

}


/**
 *
 * @param personNr
 * @returns {number}
 */
function howOld(personNr){
    var inputYear = personNr.slice(0, 2);
    var inputMonth = personNr.slice(2, 4);
    var inputDay = personNr.slice(4, 6);

    //Formatera om till rätt format
    var dateRightFromat = inputMonth+"/"+inputDay+"/"+inputYear;


    var dateOfBirth = new Date(dateRightFromat);
    var tempAge = year - dateOfBirth.getFullYear();
    var tempMonth = month - dateOfBirth.getMonth() -1;
    //Tar bort ett år ifall om dagen/månaden ej ännu har varit detta år
    if ((tempMonth === 0 && day < dateOfBirth.getDate()) || tempMonth < 0) {
        tempAge--;
    }

    return tempAge;
}

/***
 *
 * @param arr
 * Array av personObjects
 * @param comparAge
 * Vilken ålder ska personerna jämföras mot
 * @returns {Array}
 * Returnerar de objekt med ålder över "compareAge" och valdierade personnr
 */
function returnOlderThan(arr, comparAge){
    var tempArr = [];
    //Loopar igenom alla objekt och jämför åldern och validerar personnumret
    for(var i = 0; i < personObjects.persons.length; i++){
        if(howOld(arr.persons[i].personnr) >= comparAge && validatePersonnr(arr.persons[i].personnr)){
            tempArr.push(arr.persons[i]);
        }
    }

    return tempArr;
}




/**
 *
 * @param value
 * @returns {boolean}
 * Ifall numret är validerat retuneras true
 */
function validatePersonnr(value) {
    var totalValue = 0;
    var cleanValue = value.replace(/\D/g, '');

    //Loopar igenom personnumret
    for(var i = 0; i < cleanValue.length-1; i++){
        var loopValue = cleanValue[i];

        //Enligt s.k. modulus-10-metoden

        if(i %2== 0){
            loopValue = loopValue*2;
            //Värden över 10 räknas som 1+0
            if(loopValue >= 10){
                loopValue = loopValue.toString();
                totalValue += 1 + parseInt(loopValue[1]);

            }else{
                totalValue += parseInt(loopValue);
            }

        }else{
            totalValue += parseInt(loopValue);

        }

    }

    //Tar sista siffran i totalvärdet minus 10, för att sedan jämföra med kontrollsiffran
    var lastNumberIntTotal = 10 - totalValue.toString().split('').pop();
    var lastNumberInInputValue = cleanValue.toString().split('').pop();

    return lastNumberInInputValue == lastNumberIntTotal;


}