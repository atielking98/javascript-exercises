const repeatString = function(text, numRepetitions) {
    if (numRepetitions < 0) {
        return "ERROR";
    }
    let initVal = 0;
    let finalStr = "";
    while (initVal < numRepetitions) {
        finalStr += text;
        initVal++;
    }
    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
