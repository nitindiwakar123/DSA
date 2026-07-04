// optimal
function backtrack(start, temp, list, candidates, remain) {
    if(remain == 0) list.push([...temp]);

    for (let i = start; i < candidates.length; i++) {
        if(i > start && candidates[i] == candidates[i-1]) continue;
        if(candidates[i] > remain) break;

        temp.push(candidates[i]);
        backtrack(i+1, temp, list, candidates, remain-candidates[i]);
        temp.pop();
    }
}

function combinationSum2() {
    const candidates = [10, 1, 2, 7, 6, 1, 5];
    candidates.sort((a, b) => a - b);
    const list = [];
    backtrack(0, [], list, candidates, 8);

    return list;
}

// console.time();
console.log(combinationSum2());
// console.timeEnd();
