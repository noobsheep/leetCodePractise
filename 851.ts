

function loudAndRich(richer: number[][], quiet: number[]): number[] {
    const size: number = quiet.length
    const list: number[][] = new Array(size)
    for (let index = 0; index < list.length; index++) {
        list[index] = new Array()
    }
    for (let key = 0; key < richer.length; key++) {
        const item = richer[key];
        list[item[1]].push(item[0])
    }
    let result: number [] = new Array(size).fill(-1)
    function DFS (index: number ,list: number[][] ,quiet: number [], result: number []) {
        if (result[index] !== -1 ) return
        result[index] = index
        for (let i = 0; i < list[index].length; i++) {
            DFS(list[index][i], list, quiet, result)
            if (quiet[result[i]] < quiet[result[index]]) {
                result[index] = result[i]
            } 
            
        }
    }
    for (let i:number = 0; i < quiet.length; i++) {
        DFS(i, list, quiet, result)
    }
    console.log( list,'list')
    console.log(result, 'result')
    return [1]
};
const richers = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiets = [3,2,5,4,6,1,7,0]
loudAndRich(richers, quiets)