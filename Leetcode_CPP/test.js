let promise = new Promise((resolve, reject) => {
    if(false) {
        setTimeout(() => {
            resolve("Resolved");
        }, 1000);
    } else {
        reject("something went wrong")
    }
});

promise.then((value) => {
    console.log(value);
    
}).catch((reason) => {
    console.log(reason);
});
