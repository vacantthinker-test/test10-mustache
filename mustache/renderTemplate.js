import lookup from "./lookup";
import renderTemplateArray from "./renderTemplateArray";

export default function renderTemplate(tokens, data) {
    let result = ''
    
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        let type = token[0];
        let value = token[1];
        switch (type) {
            case 'text':
                result += value;
                break;
            case 'name':
                result += lookup(data, value);
                break
            case '#':
                result += renderTemplateArray(token, data)
                break;
        }
    }
    
    return result;
}
