// function canConstruct(ransomNote: string, magazine: string): boolean {
//     let result: boolean = true
//     function strInfo (word: string): Map<string, number> {
//         let store = new Map()
//         for (let i:number = 0; i < word.length; i++) {
//             if (store.has(word[i])) {
//                 store.set(word[i], store.get(word[i]) + 1)
//             } else {
//                 store.set(word[i], 1)
//             }
//         }
//         return store
//     }
//     let ransomNotes = strInfo(ransomNote)
//     let magazines =  strInfo(magazine)
//     if(magazines.size < ransomNotes.size) {
//         result = false
//         return result
//     }
//     console.log(ransomNotes, 'ransomNotes')
//     console.log(magazines, 'magazines')
//     ransomNotes.forEach((val, key) => {
//         console.log( val, '111',key)
//         if(magazines.has(key)) {
//             console.log(magazines.has(key), magazines.get(key), val)
//             if (val > magazines.get(key) ) {
//                 result = false
//             }
//         } else {
//             result = false
//         }
//     })
//     return result
// };

// console.log(canConstruct('aa','ab'))
function optimizeMethod (ransomNote: string, magazine: string) : boolean {
    if(ransomNote.length > magazine.length) return false
    let array: number [] = new Array(26).fill(0)
    let aunicode = 'a'.charCodeAt(0)
    for (let i:number = 0; i < magazine.length; i++ ) {
        // 返回Unicode 编码
        let unicode =  magazine.charCodeAt(i)
        array[unicode - aunicode]++
    }
    for (let j:number = 0; j < ransomNote.length; j++ ) {
        let unicode =  ransomNote.charCodeAt(j)
        array[unicode - aunicode]--
        if (array[unicode - aunicode] < 0) {
            return false
        }
    }
    return true
}


console.log(optimizeMethod('aa','ab'))
