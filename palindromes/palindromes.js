const palindromes = function(str) {
    
    //uppercase all letters to take care of lower/upper matching
    str = str.toUpperCase();

    //get rid of all punctuation by creating a new string
    noPunc = '';
    for (i = 0; i < str.length; i++) {
        //add only letters to new string
        if (isLetter(str[i])) {
            noPunc += str[i];
        }
    }

    //compare one character at a time from the edges inward
    for (i = 0; i < (Math.ceil(noPunc.length/2)); i++) {
        if (noPunc[i] != noPunc.charAt(noPunc.length - i - 1)) {
            //if even one pair of characters don't match, it's not a palindrome
            return false;
        }
    }

    //if all pairs of characters matched, then it's a palindrome
    return true;

}

//checks to see if the input character is a letter, otherwise returns false
function isLetter(str) {
    //checks for single character and character in utf-8 between A and Z
    if (str.length == 1 && str.match(/[A-Z]/i)) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = palindromes
