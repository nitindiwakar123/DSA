// brute
// time - O(n)+O(n)
// space - O(10)
// function sortSentence(s) {
//     const n = s.length;
//     const hash = new Array(10).fill(0);

//     let temp = "";
//     for (let i = 0; i <= n; i++) {
//         if (s[i] == " " || i == n) {
//             const position = temp[temp.length - 1];

//             hash[position] = temp.slice(0, temp.length - 1);
//             temp = "";
//         } else {
//             temp += s[i];
//         }
//     }

//     let res = "";
//     for (let i = 0; i < hash.length; i++) {
//         if (hash[i] != 0) {
//             res += " " + hash[i];
//         }
//     }

//     return res.trimStart();
// }

// optimal
// time - O(n+count)
// space - O(10)
function sortSentence(s) {
    const n = s.length;
    const hash = new Array(10).fill(0);
    let temp = "";
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] == " ") {
            const pos = temp[temp.length - 1];
            hash[pos] = temp.slice(0, temp.length - 1);
            temp = "";
            count++;
        } else temp += s[i];
    }

    const pos = temp[temp.length - 1];
    hash[pos] = temp.slice(0, temp.length - 1);
    temp = "";
    count++;

    for (let i = 0; i <= count; i++) {
        if (hash[i] != 0) {
            temp += " " + hash[i];
        }
    }

    return temp.trimStart();
}

// Test Cases
// console.log(sortSentence("is2 sentence4 This1 a3"));
