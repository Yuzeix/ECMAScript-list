const fnAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("AsynC!!"), 2000)
            :reject (newError("Error!"));
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something)
    console.log("Hello!")
}


console.log("before");
anotherFn();
console.log("After");

