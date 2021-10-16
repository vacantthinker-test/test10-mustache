# mustache 模板编译 手写代码

---

```html
<ul>
  {{#arr}}
  <li>
    <p>{{name}}</p>
    <ul>
      {{#loves}}
      <li>{{.}}</li>
      {{/loves}}
    </ul>
  </li>
  {{/arr}}
</ul>
```

### 传入参数 template 和 data

### 步骤一：获取tokens

### 步骤二：tokens结合 data 生成字符串


---

end
finished.




















