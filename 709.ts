function toLowerCase(s: string): string {
    let result: string = ''
    for(let i: number = 0; i < s.length; i++) {
        let word = s.charCodeAt(i)
        console.log(word)
        if (word >= 65 && word <= 90) {
            console.log(String.fromCharCode(word + 32), 'words')
            result += String.fromCharCode(word + 32)
            console.log(result, 'result')
        } else {
            result += s[i]
        }
    }
    return result
};
toLowerCase("Hello")
console.log(toLowerCase("Hello"), 'result')