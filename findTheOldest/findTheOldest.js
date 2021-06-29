let findTheOldest = function(people) {
    //Variables
    d = new Date();

    //sorts people by years lived so far
    const oldest = people.sort(function(a, b) {
        let lastGuy = [];
        !a.yearOfDeath ? (lastGuy = d.getFullYear(Date.now()) - a.yearOfBirth) : (lastGuy = a.yearOfDeath - a.yearOfBirth);
        !b.yearOfDeath ? (nextGuy = d.getFullYear(Date.now()) - b.yearOfBirth) : (nextGuy = b.yearOfDeath - b.yearOfBirth);
        return lastGuy > nextGuy ? -1 : 1;
    });

    //return first item in the list of sorted people to get the oldest
    return oldest[0];
}

module.exports = findTheOldest