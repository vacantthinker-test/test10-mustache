import lookup from "./lookup";
import renderTemplate from "./renderTemplate";

export default function renderTemplateArray(token, data) {
    let result = ''
    let keyName = token[1];
    let scopeToken = token[2];
    let scopeDataArray = lookup(data, keyName);
    scopeDataArray.forEach(data => {
        let scopeData = {
            ...data,
            '.':data
        }
        result += renderTemplate(scopeToken, scopeData);
    })
    
    return result;
}
