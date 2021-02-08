const repeatString = function(message, repeats) {
    let modString = "";
    
    if (repeats < 0) {
        modString = "ERROR";
    } else {
        for (let i = 1; i <= repeats; i++) {
            modString += message;
        }
    }

    return modString;
}

module.exports = repeatString
