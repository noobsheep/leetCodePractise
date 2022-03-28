function truncateSentence(s: string, k: number): string {
    let words = s.split(' ')
    let result = words.slice(0, k)
    return result.join(' ')
};
// Boolean(' ') 结果为true nc了
function optimizeMethod (s: string, k: number): any {
    let counter: number = 0 
    for(let i:number = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            console.log(!!s[i])
            counter++
        }
        if(counter === k) {
            return s.slice(0, i) || ''
        }
    }
    return s
}

console.log(optimizeMethod("chopper is not a tanuki", 5))