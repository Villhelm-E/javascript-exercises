const getTheTitles = function(arr) {
    //create an empty array
    var titles = [];
    
    //iterate through the array and add its book title to titles array
    for (i = 0; i < arr.length; i++) {
        titles.push(arr[i].title);
    }

    //return the titles array
    return titles;
}

module.exports = getTheTitles;
