"use strict";
function zipList(l1, l2) {
    if (l1.length === l2.length) {
        const retval = [];
        for (let i = 0; i < l1.length; i++) {
            retval.push(l1[i]);
            retval.push(l2[i]);
        }
        return retval;
    }
    return [];
}
function zipListTheFunctionalWay(l1, l2) {
    return l1.reduce((arr, item, index) => {
        arr.push(item, l2[index]);
        return arr;
    }, []);
}
console.log(zipList(['a', 'b', 'c'], ['1', '2', '3']));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], ['1', '2', '3']));
