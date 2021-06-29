let findTheOldest = function(people) {
    //Variables
    var oldest = 0; //as index of people[]
    d = new Date();

    //loops through people[] and adds each item's age to ages[]
    const ages = people.map(person => {
        if (!person.yearOfDeath) {
            return d.getFullYear(Date.now()) - person.yearOfBirth;
        }
        else {
            return person.yearOfDeath - person.yearOfBirth;
        }})

    //loop through ages to find the oldest
    for (i = 0; i < people.length; i++) {
        //only update oldest when loop finds a larger age
        (ages[i] > ages[oldest]) && (oldest = i);
    }

    //return the correct element in people[] using 'oldest' as an index
    return people[oldest];
}

module.exports = findTheOldest