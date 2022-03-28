let params = process.argv;
console.log(params, 'params')
for(let key  in params) {
    if (params[key] === '--mode') {
        let keys = key + 1
        let aaa = Number(key)
        aaa += 1
        console.log(aaa, keys)
        console.log('key',params[aaa])
        console.log('keys',params[keys])
    }   
}