/**
 * Created by isak16 on 2017-02-20.
 */



//Dagens datum i variabler som anv�nds i personummerutr�kningsfunktionerna
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
            "personnr": "950214-9157"
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

    //Formatera om till r�tt format
    var dateRightFromat = inputMonth+"/"+inputDay+"/"+inputYear;

    var dateOfBirth = new Date(dateRightFromat);
    var tempMonth = month - dateOfBirth.getMonth() - 1;
    var tempDay = day - dateOfBirth.getDate();

    //S�tter in boolean-uttrycket direkt in i return som retunerar true/false
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

    //Formatera om till r�tt format
    var dateRightFromat = inputMonth+"/"+inputDay+"/"+inputYear;


    var dateOfBirth = new Date(dateRightFromat);
    var tempAge = year - dateOfBirth.getFullYear();
    var tempMonth = month - dateOfBirth.getMonth() -1;
    //Tar bort ett �r ifall om dagen/m�naden ej �nnu har varit detta �r
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
 * Vilken �lder ska personerna j�mf�ras mot
 * @returns {Array}
 * Returnerar de objekt med �lder �ver "compareAge" och valdierade personnr
 */
function returnOlderThan(arr, comparAge){
    var tempArr = [];
    //Loopar igenom alla objekt och j�mf�r �ldern och validerar personnumret
    for(var i = 0; i < personObjects.persons.length; i++){
        if(howOld(arr.persons[i].personnr) >= comparAge && validatePersonnr(arr.persons[i].personnr)){
            tempArr.push(arr.persons[i]);
        }
    }

    return tempArr;
}


//
//

/**
 *
 * Personnumret �r uppbyggt efter luhn Algoritm, samma system som anv�nds f�r att validera kreditkort.
 * Jag h�mtade fram en f�rdig RegExp och utr�kning p� den fr�n github.
 * https://gist.github.com/DiegoSalazar/4075533
 *
 * @param value
 * Personnr
 * @returns {boolean}
 */
function validatePersonnr(value) {
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n);
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}