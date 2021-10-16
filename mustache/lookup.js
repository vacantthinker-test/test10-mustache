/**
 * 根据 keyName 从 dataObj 中 获取值
 * @param dataObj
 * @param keyName a.b.c
 * @returns {*}
 */
export default function lookup(dataObj, keyName) {
    // 如果keyName 不等于 . 并且 keyName中存在. 操作符
    if (keyName !== '.' && keyName.indexOf('.') !== -1) {
        let obj = dataObj;
        let keys = keyName.split('.');
        keys.forEach(key => {
            obj = obj[key]
        })
        
        return obj;
    }
    
    return dataObj[keyName];
    
}
