const removeFromArray = function(arr, ...toRemove) {
    var filteredArray = arr.filter(function(value){ 
        return !toRemove.includes(value);
    });
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
