
function printFrequency(nums) {
    const map = new Map();

    for (const n of nums) {
        const val = (map.get(n) ?? 0) + 1;
        map.set(n, val);
    }

    for (const key of map.keys()) {
        console.log(`${key} is ${map.get(key)} times`);
    }
}

// printFrequency(nums);

function printUniqueELements(nums) {
    const map = new Map();

    for (const n of nums) {
        const val = (map.get(n) ?? 0) + 1;
        map.set(n, val);
    }

    for (const key of map.keys()) {
        if (map.get(key) == 1)
            console.log(key);
    }
}

const nums = [5, 8, 12, 5, 5, 5, 5, 5, 12, 8];

function printMajorityElement(nums) {
    const map = new Map();
    const size = nums.length;

    for (const n of nums) {
        const val = (map.get(n) ?? 0) + 1;
        map.set(n, val);

        if (val > Math.floor(size / 2)) {
            return n;
        }
    }
    console.log("djf");
    
    console.log(map, Math.floor(size / 2));

    // throw new Error("No Such Element found!");
}

printMajorityElement(nums);