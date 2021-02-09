const removeFromArray = function(array, num) {

    //loop through args
    for (i = 1; i < arguments.length; i++) {
        for (ii = 0; ii < array.length; ii++) {
            if (array[ii] === arguments[i]) {
                array.splice(ii, 1);
            }
        }
    }

    return array;
}

module.exports = removeFromArray
