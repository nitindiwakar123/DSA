let list = [];
function getCombination(i, temp, candidates, target) {
    if (i >= n || target <= 0) {
        if (target == 0) {
            list.push(temp);
        }
        return;
    }

    temp.push(candidates[i]);
    getCombination(i, temp, candidates, target - candidates[i]);
    temp.pop();
    getCombination(i + 1, temp, candidates, target);

}

console.log(temp);
