// function getCombinations(i, temp, n, k, list) {
//     if (temp.length == k) {
//         list.push([...temp]);
//         return;
//     } else if (i >= n) {
//         return;
//     }

//     temp.push(i + 1);
//     getCombinations(i + 1, temp, n, k, list);
//     temp.pop();
//     getCombinations(i + 1, temp, n, k, list);

//     return list;
// }

function getCombinations(i, temp, n, k, list) {
    if (temp.length == k) {
        list.push([...temp]);
        return list;
    } else if (i >= n) return;


    temp.push(i + 1);
    getCombinations(i + 1, temp, n, k, list);
    temp.pop();
    getCombinations(i + 1, temp, n, k, list);

    return list;
}

console.log(getCombinations(0, [], 4, 2, []));
