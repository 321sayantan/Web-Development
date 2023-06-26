console.log("This is module");

function average(arr)
{
    let sum=0;
    arr.forEach(element => {
       sum=sum+element; 
    });

    return sum/arr.length;
}

// module.exports = average;

module.exports = {
    avg: average,
    name: "sayantan",
    sub: "computer"
}

module.exports.name= "sayantan das";