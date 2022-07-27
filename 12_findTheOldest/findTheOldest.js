const findTheOldest = function(objects) {
    let currYear = new Date().getFullYear();
    let maxPerson = null;
    let maxPersonAge = null;
    objects.forEach((obj) => {
        let age = null;
        if(!("yearOfDeath" in obj)) {
            age = currYear - obj.yearOfBirth;
        } else {
            age = obj.yearOfDeath - obj.yearOfBirth;
        }
        if (maxPersonAge === null || age > maxPersonAge) {
            maxPersonAge = age;
            maxPerson = obj;
        }
    });
    return maxPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
