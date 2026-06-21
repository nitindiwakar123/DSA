function getCombinations(idx, temp, list, candidates, target) {
    if (target == 0) {
        list.push([...temp]);
        return;
    }

    for (let i = idx; i < candidates.length; i++) {
        if (i > idx && candidates[i] == candidates[i - 1]) continue;
        if (candidates[i] > target) break;

        temp.push(candidates[i]);
        getCombinations(i + 1, temp, list, candidates, target - candidates[i]);
        temp.pop();
    }

    return list;
}

function combinationSum2() {
    const candidates = [10, 1, 2, 7, 6, 1, 5];
    candidates.sort((a, b) => a - b);
    console.log(candidates);
    // const candidates = [1, 1, 1, 2, 2];
    const list = getCombinations(0, [], [], candidates, 8);

    return list;
}

// console.time();
console.log(combinationSum2());
// console.timeEnd();
