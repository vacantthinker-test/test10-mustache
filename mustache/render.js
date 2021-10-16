import renderTemplate from "./renderTemplate";
import parseTemplate from "./parseTemplate";

export function render(template, data){
    let tokens = parseTemplate(template); // 解析模板 获取tokens
    let result = renderTemplate(tokens, data); // 结合tokens和data 返回html字符串
    console.log(`result`)
    console.log(result)
    console.log(`------------------`)
    return result;
}
