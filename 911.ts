class TopVotedCandidate {
    personsTarget: number []
    timesTarget: number []
    constructor(persons: number[], times: number[]) {
        this.personsTarget = persons;
        this.timesTarget = times;
    }
    q(t: number): any {
        let index: number =  this.timesTarget.length - 1
        for(let i: number = 0; i < this.timesTarget.length; i ++ ) {
            if ( this.timesTarget[i] > t) {
                // console.log( this.timesTarget[i], t, 'diff')
                index = i - 1;
                break
            }  if (this.timesTarget[i] === t) {
                index = i;
                break
            }
        }
        // console.log(index, 'index')
        const maps = new Map()
        let max: number [] = [0, 0]
        for (let j: number = 0; j <= index; j ++ ) {
            let item = this.personsTarget[j]
            // console.log(item)
            if(maps.has(item)) {
                maps.set(item, maps.get(item) + 1)
            } else {
                maps.set(item, 1)
            }

            if(maps.get(item) > max[1]) {
                max[0] = item
                max[1] = maps.get(item)
            }
        }
        // console.log(maps, 'Map')
        let result: number [] = []
        for (let items of maps) {
            // console.log(items, 'MAP')
            if (items[1] === max[1]) {
                result.push(items[0])
            }
        }
        // console.log(result,'result')
        if (result.length > 1) {
            for(let k: number = index; k >= 0; k-- ) {
                // console.log(this.personsTarget[k],'dnmd')
               let person = this.personsTarget[k]
                result.includes(person)
                if (result.includes(person)) return person
            }
        } else if (result.length === 1) {
            return result[0]
        }

    }
}

const topVotedCandidate = new TopVotedCandidate([0,1,0,1,1], [24,29,31,76,81]);
 // 返回 0 ，在时刻 3 ，票数分布为 [0] ，编号为 0 的候选人领先。
 // 返回 1 ，在时刻 12 ，票数分布为 [0,1,1] ，编号为 1 的候选人领先。
 
// console.log(topVotedCandidate.q(30),'RES');
// console.log(topVotedCandidate.q(28),'RES');
// console.log(topVotedCandidate.q(99), 'RES');
// console.log(topVotedCandidate.q(25), 'RES');
// console.log(topVotedCandidate.q(15),'RES');
// console.log(topVotedCandidate.q(24), 'RES');
// console.log(topVotedCandidate.q(8), 'RES');

let dsb  =  [[28],[24],[29],[77],[30],[25],[76],[75],[81],[80]]
// let dsb  = [[[0,0,0,0,1],[0,6,39,52,75]],[45],[49],[59],[68],[42],[37],[99],[26],[78],[43]]
// for(let dnmd = 0; dnmd < dsb.length; dnmd++) {
//     let num = dsb[dnmd][0]
//     // console.log(num)
//     console.log(topVotedCandidate.q(num), 'RES');
// }


// [null,0,0,1,1,1,0,1,0,1,1]
/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

/**
 * 执行用时：
    7440 ms
    , 在所有 TypeScript 提交中击败了
    100.00%
    的用户
    内存消耗：
    57.1 MB
    , 在所有 TypeScript 提交中击败了
    100.00%
    的用户
 */
class TopVotedCandidates {
    personsTarget: number []
    timesTarget: number []
    constructor(persons: number[], times: number[]) {
        this.personsTarget = persons;
        this.timesTarget = times;
    }
    q(t: number): any {
        const resultArray = this.TopVotedCandidate()
        console.log(resultArray, 'resultArray')
        let left: number = 0, right: number = resultArray.length - 1
        let count = 0
        while (right > left) {
            // console.log( left,'left', right, 'right')
            const mid = left +  Math.floor((right - left + 1) / 2)
            if (resultArray[mid][1] <= t) {
                left = mid
            } else {
                right = mid - 1
            }
        }
        return resultArray[left][0]
    }
    protected TopVotedCandidate () : number[][]{
        let val: number = 0
        let result : number[][] = new Array()
        const valMap : Map <number, number> = new Map()
        for(let i : number = 0; i < this.timesTarget.length; i ++) {
            let item = this.personsTarget[i]
            if(valMap.has(item)) {
                valMap.set(item, valMap.get(item) as number + 1)
            } else {
                valMap.set(item, 1)
            }
            if(valMap.get(item) as number >= val) {
                val = valMap.get(item) as number
                result.push([item, this.timesTarget[i]])
            }
        }
        return result
    }
}
    
const topVotedCandidates = new TopVotedCandidates([0,0,0,0,1], [0,6,39,52,75]);

for(let dnmd = 0; dnmd < dsb.length; dnmd++) {
    let num = dsb[dnmd][0]
    // console.log(num)
    console.log(topVotedCandidates.q(num), 'RES');
}
// console.log(topVotedCandidates.q(30),'RES');
const dnmd = [[45],[49],[59],[68],[42],[37],[99],[26],[78],[43]]
// [[[0,0,0,0,1],[0,6,39,52,75]],[45],[49],[59],[68],[42],[37],[99],[26],[78],[43]]
// const dnmd = 
