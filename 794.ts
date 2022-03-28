function validTicTacToe(board: string[]): boolean {
    let O: number = 0
    let X: number = 0
    let x: number = 0
    let y: number = 0
    let step: string [] = new Array()
    let win: boolean = false
    function DFS (board: string[], O: number, X: number, x:number, y:number, step: string []): boolean {
        const direction: number[][] = [[0, 1], [1, 1], [1, 0], [ 1, -1], [0, -1], [-1,-1],[-1,0],[-1,1] ]
        const val: string = board[x][y]
        if (val !== ' ') {
            if (end) return false
            if (val === 'O') {
                O++
            } else if (val === 'X'){
                X++
            }
            if (X - O !== 1) {
                return false
            }
            step.push(val)
            if (step.length === 3) {
                if(step[1] === step[0] && step[0] === step[3]) {
                    end = true
                }
            } else {
                for(let j:number = 0; j < direction.length; j++) {
                    x = direction[j][0] + x
                    y = direction[j][1] + y
                    if (x < 3 && y < 3 && x >= 0 && y >= 0) {
                        return DFS(board, O, X, x, y, step)
                    } else {
                        continue
                    }
                    
                }
            }
 
        } else {
            x += 1
            if (x>= 3) {
                x = 0
                y+=1
            }
            if (y>= 3) {
                return false
            }
            return DFS(board, O, X, x, y, step)
        }
    }
    DFS(board, O, X, x, y, step) 
};