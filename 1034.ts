/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */

function colorBorder(grid: number[][], row: number, col: number, color: number): any {
    const rows = grid.length, cloumn = grid[0].length
    // visited 设置一个状态管理标识该项目有没有被遍历过
    // empty 无法被遍历 所以用fill暂时填充了一下
    console.log(rows, cloumn, '??/')
    const visited: boolean[][] = new Array(rows).fill(false).map(() => new Array(cloumn).fill(false))
    console.log(visited, 'visited')
    const originColor = grid[row][col]
    const border: number[][] = []
    visited[row][col] = true
    DFS(grid,row,col, originColor, visited, border)
    for(let j = 0; j < border.length;j++) {
        const x =  border[j][0]
        const y = border[j][1]
        grid[x][y] = color
    }
    return grid          
};
function DFS(grid: number[][], row: number, col: number, color: number, visited: boolean[][], border: number[][]) {
    const rows = grid.length, cloumn = grid[0].length
    let isBorder = false
    const direction: number[][] = [[-1,0], [0, 1], [1,0],[0, -1]]
    for(let i= 0; i < 4; i++) {
        const x = direction[i][0] + row
        const y = direction[i][1] + col
        if (!(x >= 0 && y >= 0 && x < rows && y < cloumn && grid[x][y] === color)) {
            isBorder = true
        } else if (!visited[x][y]) {
            visited[x][y] = true
            DFS(grid, x, y,color, visited, border)
        }
    }

    if(isBorder) {
        border.push([row,col])
    }

}

console.log(colorBorder([[1,1],[1,2]], 0, 0,3))