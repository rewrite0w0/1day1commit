// https://www.codewars.com/kata/52597aa56021e91c93000cb0

var moveZeros = function (arr) {
    // TODO: Program me
    const array = [];
    const zero = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero.push(arr[i]);
        } else {
            array.push(arr[i])
        }
    }
    let result = array.concat(zero);
    return result;
}

//

var moveZeros = function (arr) {
    return arr.filter(function (x) {
        return x !== 0
    }).concat(arr.filter(function (x) {
        return x === 0;
    }));
}

var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num) {
        return num !== 0;
    });
    var zeroList = arr.filter(function (num) {
        return num === 0;
    });
    return filtedList.concat(zeroList);
}