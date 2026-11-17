let promise = new Promise((resolve, reject) => {
    resolve("Data received!");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Task completed!");
    });