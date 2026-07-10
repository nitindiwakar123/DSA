// brute
// time - O(n)+O(n)
// space - O(n)
function sortSentence(s) {
    const n = s.length;
    const hash = new Array(n).fill(0);

    let temp = "";
    for (let i = 0; i <= n; i++) {
        if (s[i] == " " || i == n) {
            const position = temp[temp.length - 1];

            hash[position] = temp.slice(0, temp.length - 1);
            temp = "";
        } else {
            temp += s[i];
        }
    }

    let res = "";
    for (let i = 0; i < hash.length; i++) {
        if (hash[i] != 0) {
            res += " " + hash[i];
        }
    }

    return res.trimStart();
}

console.log(sortSentence("is2 sentence4 This1 a3"));
