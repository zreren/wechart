//深拷贝
export default  function deepClone(o) {
    if(o === null) return o
    if (Array.isArray(o)) { 
        let _arr = []
        o.forEach(item => {
            if(typeof(item) === 'object')
            _arr.push(deepClone(item))
            else
            _arr.push(item) 
        })
        return _arr
    } 
    if (typeof(o) === 'object') {
        let _o = {}
        for (let key in o) {
            _o[key] = deepClone(o[key])
        }
        return _o
    }
    return o
  }