let findTheOldest = function(people) {
    //Variables
    var oldest = 0; //as index of people[]
    d = new Date();
    let ages = [];

    //loops through people[] and adds each item's age to ages[]
    for (i = 0; i < people.length; i++) {
        
        //check for death year
        if (people[i].yearOfDeath == undefined) {
            //calculate age from current year
            age = d.getFullYear(Date.now()) - people[i].yearOfBirth;
        }
        else {
            //calculate age from death year
            age = people[i].yearOfDeath - people[i].yearOfBirth
        }
        
        //add calculated age to ages[]
        ages.push(age);

    }

    //loop through ages to find the oldest
    for (i = 0; i < people.length; i++) {
        //only update oldest when loop finds a larger age
        if (ages[i] > ages[oldest]) {
            oldest = i;
        }
    }

    //return the correct element in people[] using 'oldest' as an index
    return people[oldest];
}

module.exports = findTheOldest
