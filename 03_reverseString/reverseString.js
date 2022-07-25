const reverseString = function(originalString) {
    let originalStringArr = originalString.split("");
    let newStr = "";
    for (let i = originalStringArr.length - 1; i >= 0; i--) {
        newStr += originalStringArr[i];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
