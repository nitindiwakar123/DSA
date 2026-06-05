function printMaxFrequency(a) {
    let freq = new Array(11).fill(0);
    for (const n of a) {
        freq[n]++;
    }
    
    let elem = a[0];
    let maxFreq = 1;
    for (let i = 0; i<freq.length; i++) {
        if(freq[i]>maxFreq) { 
            maxFreq = freq[i];
            elem = i;
        }
    }
    
    console.log("Max freq element is: ", elem);
    
}   

// printMaxFrequency([4, 6, 4, 4, 7, 8, 6, 6, 9, 4, 8, 8, 8, 7, 2, 8, 6, 4]);

// function getIndexOfFirstNonRepeating(a) {
//     const freq = new Array(11).fill(0);
//     for (const n of a) {
//         freq[n]++;
//     }

//     for (let i = 0; i<a.length; i++) {
//         if(freq[a[i]] === 1) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(getIndexOfFirstNonRepeating([4, 6, 4, 7, 8, 6, 6, 9, 4, 8, 8, 8, 7, 2, 8, 6, 4]));


function printFrequency(a) {
    let min = a[0];
    let max = a[0];

    for (const n of a) {
        if(n>max) {
            max = n;
        } else if(n<min) {
            min = n;
        }
    }

    const freq = new Array(max-min+1).fill(0);

    for (const n of a) {
        freq[n-min]++;
    }
    console.log(freq);
    

    for (let i = 0; i < freq.length; i++) {
        if(freq[i]>0) {
           console.log((1+min)+"is: ", freq[i]+"times");
            
        }
    }
}

printFrequency([2, 4, -3, 5, 2, 1, -2, 3, 4, -2])