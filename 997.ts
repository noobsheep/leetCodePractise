function findJudge(n: number, trust: number[][]): number {
    if (trust.length === 0 && n === 1) return 1
    const relationship: Map<number, Array<number>> = new Map()
    for(const item of trust) {
        if (!relationship.has(item[0])) {
            relationship.set(item[0], [item[1]])
        } else {
            const array =  relationship.get(item[0]) as number []
            array.push(item[1])
            relationship.set(item[0], array)
        }
        if (!relationship.has(item[1])) {
            relationship.set(item[1], [])
        }
    }
    let result = -1
    let num = 0
    console.log(relationship)
    for(const item of relationship) {
        if (!item[1].length) {
            result = item[0]
        }
    }

    for (const item of relationship) {
        if (item[1].includes(result)) {
            num++
        }
    }
    return num == n - 1 ? result : -1
};
const n = 3, trust = [[1,2],[2,3]]
console.log(findJudge(n, trust))