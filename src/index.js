import {render} from "mustache";

let template = `
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
`
let data = {
    arr: [
        {name: 'mr.Z', loves: ['work', 'study']},
        {name: 'mr.L', loves: ['read', 'walk']},
        {name: 'mr.K', loves: ['game']},
    ]
}

let renderHtml = render(template, data);
console.log(`render: ${renderHtml}`)

document.getElementById('app').innerHTML = renderHtml;












