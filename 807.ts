function maxIncreaseKeepingSkyline(grid: number[][]): number {
    const size = grid.length
    let num:number = 0
    let rowMax:number [] = new Array(size).fill(0)
    let columnMax:number [] = new Array(size).fill(0)
    for(let  x: number = 0; x < size; x++) {
        if (!rowMax[x]) {
            rowMax[x] = Math.max(...grid[x])
        }
        for(let y: number = 0; y < size; y++) {
            if (!columnMax[y]) {
                let array = new Array(size).fill(0)
                for(let i: number = 0; i < size; i++) { 
                    array[i] = grid[i][y]
                }
                columnMax[y] = Math.max(...array)
            }
            const height = rowMax[x] > columnMax[y] ? columnMax[y] : rowMax[x]
            num += (height - grid[x][y])
        }
    }
    console.log(num, 'dnmd')
    return num
};
maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])