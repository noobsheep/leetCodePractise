var loudAndRichs = function(richer, quiet) {
    const n = quiet.length;
    const g = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        g[i] = [];
    }
    for (const r of richer) {
        g[r[1]].push(r[0]);
    }
    console.log(g)
    const ans = new Array(n).fill(-1);
    for (let i = 0; i < n; ++i) {
        dfs(i, quiet, g, ans);
    }
    return ans;
};

const dfs = (x, quiet, g, ans) => {
    if (ans[x] !== -1) {
        return;
    }
    ans[x] = x;
    for (const y of g[x]) {
        dfs(y, quiet, g, ans);
        if (quiet[ans[y]] < quiet[ans[x]]) {
            ans[x] = ans[y];
        }
    }
}
const richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]

console.log(loudAndRichs(richer, quiet))