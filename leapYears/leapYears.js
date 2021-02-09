const leapYears = function(year) {
    //if year is divisible by 4 and 100 and 400 or year is divisible by 4 and not 100 or 400, it's a leap year
    //tested combinations in an Excel sheet
    if ((year % 4 == 0 && year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0 && year % 400 != 0)) {
        return true;
    } else {
        return false;
    }
}

module.exports = leapYears
