// brute
// function getCombination(i, temp, candidates, target, list) {
//     if (i >= candidates.length || target <= 0) {
//         if (target == 0)
//             list.push([...temp]);

//         return list;
//     }

//     temp.push(candidates[i]);
//     getCombination(i, temp, candidates, target-candidates[i], list);
//     temp.pop();
//     getCombination(i+1, temp, candidates, target, list);

//     return list;
// }

// optimal
function getCombination(start, temp, candidates, remain, list) {
    if (remain < 0) return;

    if (remain == 0) list.push([...temp]);

    for (let i = start; i < candidates.length; i++) {
        temp.push(candidates[i]);
        getCombination(i, temp, candidates, remain - candidates[i], list);
        temp.pop();
    }
}

// const candidates = [2, 3, 5];
const candidates = [2, 3, 6, 7];
const list = getCombination(0, [], candidates, 7, []);
console.log(list);
