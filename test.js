function getCommonFactors(aFactors, bFactors) {
    const commonFactors = [];
    const usedIndexes = [];

    for (let i = 0; i < aFactors.length; i++) {
        for (let j = 0; j < bFactors.length; j++) {

            if (
                aFactors[i] === bFactors[j] &&
                !usedIndexes.includes(j)
            ) {
                commonFactors.push(aFactors[i]);
                usedIndexes.push(j);
                break;
            }
        }
    }

    return commonFactors;
}