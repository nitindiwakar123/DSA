function getCombination(i, temp, candidates, target, list) {
    if (i >= candidates.length || target <= 0) {
        if (target == 0) {             
            list.push([...temp]);
        }
        return;
    }

    temp.push(candidates[i]);
    getCombination(i, temp, candidates, target - candidates[i], list);
    temp.pop();
    getCombination(i + 1, temp, candidates, target, list);

    return list;
}

const candidates = [2,3,5];
const list = getCombination(0, [], candidates, 8, []);
console.log(list);
