import{_ as t,c as o,e as n,o as r}from"./app-BfYb0wWG.js";const a={};function c(s,e){return r(),o("div",null,[...e[0]||(e[0]=[n(`<h2 id="跨域解决方案" tabindex="-1"><a class="header-anchor" href="#跨域解决方案"><span>跨域解决方案：</span></a></h2><pre><code>- CORS（跨域资源共享）
- JSONP（JSON with Padding）
- nginx 反向代理
</code></pre><h2 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略"><span>同源策略：</span></a></h2><pre><code>- 协议相同
- 域名相同
- 端口号相同
</code></pre><h2 id="简单请求" tabindex="-1"><a class="header-anchor" href="#简单请求"><span>简单请求：</span></a></h2><pre><code>- 只允许 GET、HEAD、POST 三个请求方法
- 请求头中不能包含自定义的请求头
- Content-Type 只能是 application/x-www-form-urlencoded、multipart/form-data、text/plain

- 允许跨域请求的响应头中必须包含 Access-Control-Allow-Origin
- Access-Control-Allow-Origin：允许跨域请求的源
- Access-Control-Allow-Origin: *：允许所有源的跨域请求
- Access-Control-Allow-Origin: http://example.com：只允许 http://example.com 的跨域请求
</code></pre><h2 id="复杂请求" tabindex="-1"><a class="header-anchor" href="#复杂请求"><span>复杂请求：</span></a></h2><pre><code>- 除了简单请求以外的请求
- 需要预检请求（preflight request）  即 OPTIONS 请求
- 如果服务器允许跨域请求，则返回 200 OK，并在响应头中包含 Access-Control-Allow-Origin 和 Access-Control-Allow-Methods 等字段
- 如果有自定义Header, 则需要 Access-Control-Allow-Headers
- Access-Control-Allow-Origin：允许跨域请求的源
- Access-Control-Allow-Methods：允许的请求方法
- Access-Control-Allow-Headers：允许的请求头
- Access-Control-Max-Age：预检请求的有效期 预检请求的有效期内，浏览器不会再次发送预检请求
- Access-Control-Allow-Credentials：是否允许携带凭证
- Access-Control-Expose-Headers：允许浏览器访问的响应头
</code></pre><h2 id="携带cookie" tabindex="-1"><a class="header-anchor" href="#携带cookie"><span>携带Cookie：</span></a></h2><pre><code>- 同源请求会自动携带Cookie
- 跨域请求需要设置 withCredentials 为 true（XMLHttpRequest） || credentials: &#39;include&#39;（fetch）
    - 响应头中必须包含 Access-Control-Allow-Credentials: true
    - 允许跨域请求的响应头中必须包含 Access-Control-Allow-Origin，不能是 *
</code></pre>`,10)])])}const l=t(a,[["render",c]]),p=JSON.parse('{"path":"/blog/5c6mbcvj/","title":"跨域","lang":"zh-CN","frontmatter":{"title":"跨域","createTime":"2025/04/07 10:50:37","permalink":"/blog/5c6mbcvj/","tags":["浏览器","JavaScript"],"description":"跨域解决方案： 同源策略： 简单请求： 复杂请求： 携带Cookie：","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"跨域\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-11-05T13:41:36.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://zouwen528.github.io/blog/5c6mbcvj/"}],["meta",{"property":"og:site_name","content":"Explore The Unknown"}],["meta",{"property":"og:title","content":"跨域"}],["meta",{"property":"og:description","content":"跨域解决方案： 同源策略： 简单请求： 复杂请求： 携带Cookie："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-11-05T13:41:36.000Z"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"浏览器"}],["meta",{"property":"article:modified_time","content":"2025-11-05T13:41:36.000Z"}]]},"readingTime":{"minutes":1.31,"words":392},"git":{"createdTime":1762350096000,"updatedTime":1762350096000,"contributors":[{"name":"zouwen","username":"zouwen","email":"2871481934@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/zouwen?v=4","url":"https://github.com/zouwen"}]},"autoDesc":true,"filePathRelative":"blog/技术/跨域.md","headers":[],"categoryList":[{"id":"a95dd3","sort":10001,"name":"技术"}]}');export{l as comp,p as data};
