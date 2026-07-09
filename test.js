// String

// Reverse each word
function reverseEachWord(s) {
    let temp = "";
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if(char != " ")
            temp = char+temp;

        if((char == " " || i == s.length-1) && temp.length > 0) {
            result = `${result} ${temp}`;
            temp = "";
        }
    }

    return result.trimStart();
}

// Reverse sequence of words
function reverseSequence(s) {
    let temp = "";
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if(char != " ")
            temp = temp+char;

        if((char == " " || i == s.length-1) && temp.length > 0) {
            result = `${temp} ${result}`;
            temp = "";
        }
    }

    return result.trimStart();
}

// get the biggest word
function getBiggestWord(s) {
    let temp = "";
    let biggest = "";

    for (let i = 0; i<s.length; i++) {
        let c = s[i];

        if(c != " ")
            temp = temp + c;

        if(c == " " || i == s.length - 1) {
            if(temp.length > biggest.length)
                biggest = temp
        
        temp = ""
        }
    }

    return biggest;
}

// get the length of biggest word
function getBiggestWordLength(s) {
    let count = 0;
    let maxLength = 0;

    for (let i = 0; i<s.length; i++) {
        let c = s[i];

        if(c != " ")
            count++;

        if(c == " " || i == s.length - 1) {
            maxLength = Math.max(maxLength, count);
            count = 0;
        }
    }

    return maxLength;
}

// console.log(getBiggestWordLength("we are the biggest"));

function checkIsPasswordValid(pwd) {
    if(pwd.length < 8) return false;

    let uppercase = false, lowercase = false, digit = false, specialChar = false;
    for (let i = 0; i<pwd.length; i++) {
        const char = pwd[i];

        if(char >= 'A' && char <= 'Z')
            uppercase = true;
        else if(char >= 'a' && char <= 'z')
            lowercase = true;
        else if (char >= '0' && char <= '9')
            digit = true;
        else
            specialChar = true
    }

    return uppercase && lowercase && digit && specialChar;
}

checkIsPasswordValid("Man@123");