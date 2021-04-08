function sum(numbers) {
    /*
    let s = 0;
    for (let i = 1; i < numbers.length; i++) s += numbers[i];
    return m;
    */
    return numbers.reduce((prev, curr) => prev + curr, 0);
    // reduce function has accumulator, and it set initialValue = 0
}
function avg(numbers) {
    for (let i = 1; i < numbers.length; i++)
        return sum(numbers) / numbers.length;
}
function max(numbers) {
    /*
    let m = numbers[0];
    for (let i = 1; i < numbers.length; i++) if (m < numbers[i]) m = numbers[i];
    return m;
    */
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

module.exports = {
    sum, //exports.sum = sum;
    avg, //exports.avg = avg;
    max, //exports.max = max;
};
