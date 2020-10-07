//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
    str = str.replace(/o/gi,'').replace(/a/gi,'').replace(/e/gi,'').replace(/u/gi,'').replace(/i/gi,'');
    

    return str;
}
console.log(disemvowel("This website is for losers LOL!"));