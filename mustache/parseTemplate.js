/**
 * 解析template, 返回tokens
 * @param template
 * @returns {*[]}
 */
import Scanner from "./Scanner";
import nestedTokens from "./nestedTokens";

export default function parseTemplate(template) {
    let tokens = []
    
    let tagStart = '{{'
    let tagEnd = '}}'
    const scanner = new Scanner(template);
    while (!scanner.endOfString()) {
        let text = scanner.scanUntil(tagStart);
        if(text !== '') {
            tokens.push(['text', text])
        }
        scanner.scan(tagStart);
        
        let name = scanner.scanUntil(tagEnd);
        if(name !== '') {
            // name {{#arr}} name -> #arr
            let type = name[0];
            let value = name.substring(1);
            switch(type) {
                case '#':
                    tokens.push(['#', value])
                    break
                case '/':
                    tokens.push(['/', value])
                    break
                default:
                    tokens.push(['name', name])
                    break
            }
        }
        scanner.scan(tagEnd);
    }
    console.log(`tokens`)
    console.log(tokens)
    console.log('----------')
    
    
    return nestedTokens(tokens);
}















