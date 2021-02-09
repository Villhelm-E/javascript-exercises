const sumAll = function(start, end) {
    let sum = 0;

    if (start < 0 || end < 0) {
        sum = "ERROR";
    } else if (typeof start != "number" || typeof end != "number") {
        sum = "ERROR";
    } else if (end > start) {
        for (i = start; i <= end; i++) {
            sum += i;
        }
    } else {
        for (i = end; i <= start; i++) {
            sum += i;
        }
    }

    return sum;
}

module.exports = sumAll
