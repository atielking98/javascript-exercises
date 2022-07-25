const sumAll = function(start, end) {
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }
    if (end < start) {
        let savedVal = end;
        end = start;
        start = savedVal;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
