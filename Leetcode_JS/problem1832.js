// 1832. Check if the Sentence Is Pangram
// time - O(n)
// space - O(26)
function checkIfPangram(sentence) {
    const hash = new Array(26).fill(0);

    for (let i = 0; i < sentence.length; i++) {
        hash[sentence.charCodeAt(i) - 97] = 1;
    }

    for (const freq of hash) {
        if(freq == 0)
            return false;
    }

    return true;
}

// Test Cases
// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true

// console.log(checkIfPangram("leetcode")); // false

// console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyz")); // true

// console.log(checkIfPangram("abcdefghijklmnopqrstuvwxy")); // false (missing 'z')

// console.log(checkIfPangram("bcdefghijklmnopqrstuvwxyza")); // true

// console.log(checkIfPangram("zabcdefghijklmnopqrstuvwxy")); // true

// console.log(checkIfPangram("aaaaaaaaaaaaaaaaaaaaaaaaaa")); // false

// console.log(checkIfPangram("qwertyuiopasdfghjklzxcvbnm")); // true

// console.log(checkIfPangram("mnbvcxzlkjhgfdsapoiuytrewq")); // true

// console.log(checkIfPangram("thequickbrownfox")); // false

// console.log(checkIfPangram("packmyboxwithfivedozenliquorjugs")); // true

// console.log(checkIfPangram("sphinxofblackquartzjudgemyvow")); // true

// console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz")); // true

// console.log(checkIfPangram("abcdefghijklmnopqrstuvwxzz")); // false (missing 'y')

// console.log(checkIfPangram("zzzzzzzzzzzzzzzzzzzzzzzzzz")); // false

// console.log(checkIfPangram("abcxyz")); // false

// console.log(checkIfPangram("")); // false

// console.log(checkIfPangram("a")); // false

// console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyzz")); // true

// console.log(checkIfPangram("xabcdefghijklmnopqrstuvwxyzx")); // true