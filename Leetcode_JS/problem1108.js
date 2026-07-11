// 1108. Defanging an IP Address

// optimal
// time - O(n)
// space - O(n)
function defangIPaddr(address) {
    let ans = "";
    for (let i = 0; i < address.length; i++) {
        if(address[i] == ".") {
            ans += "[.]";
        } else ans += address[i];
    }

    return ans;
}

// Test Cases
// console.log(defangIPaddr("1.1.1.1"));
// console.log(defangIPaddr("255[.]100[.]50[.]0"));
