const reverseString = function(str) {
    //split string into a new array
    let newStr = ""
    let chArr = str.split("");
    //loop the array in reverse
    for (let i = chArr.length-1; i >= 0; i--) {
        newStr += chArr[i];
    }
    
    return newStr;
}

module.exports = reverseString
