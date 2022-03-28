function numWaterBottles(numBottles: number, numExchange: number): number {
    let result:number = numBottles;
    let num:number = numBottles
    // while(num >= numExchange) {
    //     const count = Math.floor(num / numExchange)
    //     const remainder = num % numExchange
    //     console.log(count, remainder)
    //     num = count + remainder
    //     result += count
    // }
    // return result
    const count = Math.floor(numBottles / (numExchange - 1))
    console.log(numBottles % (numExchange - 1))
    return (numBottles % (numExchange - 1)) === 0 ? count + numBottles - 1 :count + numBottles
}
console.log(numWaterBottles(9, 3))