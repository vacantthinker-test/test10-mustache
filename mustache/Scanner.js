export default class Scanner{
    constructor(template){
        this.template = template;
        this.position = 0; // 使用指针思想, 处理template字符串
        this.tail = this.template; // 尾巴, 指字符串没有处理的部分.
    }
    
    /**
     * 如果 "尾巴" 开头部分就是tag, 那么移动指针, 更新 "尾巴"
     * @param tag
     */
    scan(tag){
        if ( (!this.endOfString()) && this.tail.indexOf(tag) === 0){
            this.position+=tag.length;
            this.tail = this.template.substring(this.position)
        }
    }
    
    /**
     * 扫描 template 没有遇到tag, 那么移动指针, 更新 "尾巴"
     * @param tag  '{{' 或者 '}}'
     * @returns {string}
     */
    scanUntil(tag){
        const start = this.position;
        // 指针没有到末尾 并且 尾巴开头部分不是tag, 那么指针移动 更新尾巴
        while ( (!this.endOfString()) && this.tail.indexOf(tag) !== 0){
            this.position++;
            this.tail = this.template.substring(this.position)
        }
        // 返回 开始位置 到 '{{'之间的内容
        return this.template.substring(start, this.position);
    }
    
    /**
     * 指针移动到字符串末尾了?
     * @returns {boolean}
     */
    endOfString(){
        // 指针移动到字符串末尾了?
        return this.position >= this.template.length;
    }
}








