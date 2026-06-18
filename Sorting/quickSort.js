function swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function getPivotIndex(a, low, high) {
    const pivot = a[high];
    let i = low - 1;
    let j = low;

    while (j < high) {
        if (a[j] <= pivot) {
            i++;
            swap(a, i, j);
        }
        j++;
    }

    swap(a, i + 1, high);
    return i + 1;
}

function quickSort(a, low, high) {
    if (low < high) {
        let pivotIndex = getPivotIndex(a, low, high);
        quickSort(a, low, pivotIndex - 1);
        quickSort(a, pivotIndex + 1, high);
    }
}

const a = [12, 10, 8, 6, 23, 32, 40, 28];
quickSort(a, 0, a.length-1);
console.log(a);
