function repeatedStringMatch(a: string, b: string): number {
    const wordMap:boolean [] = new Array(26).fill(false)
    const startIndex: number = 'a'.charCodeAt(0)
    for(let i:number = 0; i < a.length; i++) {
        const index = a[i].charCodeAt(0)
        wordMap[index - startIndex] = true
    }
    console.log(wordMap)
     for(let i:number = 0; i < b.length; i++) {
        const index = b[i].charCodeAt(0)
        if (!wordMap[index - startIndex]) {
            return -1
        }
    }
    let num = 1
    let str = a
    while(str.length < b.length) {
        str += a
        num++
    }
    console.log(str.length, "???", b.length, str)
    for (let i: number = 0 ; i < 2 ;i++) {
        if ( str.indexOf(b) !== -1) {
            return num
        }
        num++
        str += a
        console.log(i, str)

    }
    console.log(wordMap)
    return -1
};

// repeatedStringMatch("abcd", "cdabcdab")
console.log(repeatedStringMatch("aa","a"))
console.log(repeatedStringMatch("a","aa"))
// console.log(repeatedStringMatch("abcd","cdabcdab"))
// console.log(repeatedStringMatch("abcd","bc"))
