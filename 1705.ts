function eatenApples(apples: number[], days: number[]): number {
    interface applesPile {
        endTime: number;
        count: number;
    }
    let eatNum : number = 0;
    let store: applesPile [] = new Array()
    for(let i: number = 0; i < apples.length; i++) {
        if (apples[i]) {
            console.log(apples[i], days[i], '??')
            store.push({
                endTime : i + days[i],
                count: apples[i]
            })
        }
        const minIndex = eatApples(i + 1)
        if (store[minIndex] && store[minIndex].count > 0) {
            
            store[minIndex].count = store[minIndex].count as number - 1
            console.log(store[minIndex],i + 1,'天')
            eatNum++
        }
    }
    let remainingTime = apples.length
    console.log("=======", store)
    while(store.length) {
        remainingTime += 1
        // console.log(remainingTime)
        const minIndex = eatApples(remainingTime)
        if (store[minIndex] && store[minIndex].count > 0) {
            store[minIndex].count = store[minIndex].count as number - 1
            eatNum++
        }
    }

    function eatApples(i: number) {
        console.log(i, '天')
        // let min = 0
        console.log(store.length, 'length')

        for (let j: number = 0; j < store.length; j++) {
            if (store[j].endTime < i  || store[j].count === 0) {
                store.splice(j, 1)
                j--
            }
        }
        // store = store.filter((item) => {
        //     return item.endTime >= i  && item.count !== 0
        // })
        store.sort((a,b) => {
            return a.endTime - b.endTime
        })
        console.log(store, 'store')
        // console.log(store[min], 'eat', i, min, store)
        // // !
        // if (!store[min] && min !== 0 ) {
        //     min--
        // }
        return 0
    }
    return eatNum

};

// console.log(eatenApples([9,2],[3,5]))
// console.log(eatenApples( [3,0,0,0,0,2],[3,0,0,0,0,2]))
// console.log(eatenApples( [1,2,3,5,2], [3,2,1,4,2]))
console.log(eatenApples([3,1,1,0,0,2],[3,1,1,0,0,2]))