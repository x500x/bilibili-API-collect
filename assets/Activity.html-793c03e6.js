import{_ as t,o as a,c as n,e as s}from"./app-7d64ee8a.js";const e={},d=s(`<h1 id="漫画任务操作" tabindex="-1"><a class="header-anchor" href="#漫画任务操作" aria-hidden="true">#</a> 漫画任务操作</h1><h2 id="分享漫画" tabindex="-1"><a class="header-anchor" href="#分享漫画" aria-hidden="true">#</a> 分享漫画</h2><blockquote><p>https://manga.bilibili.com/twirp/activity.v1.Activity/ShareComic</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）/ APP</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>platform</td><td>str</td><td>平台</td><td>必要</td><td>android</td></tr></tbody></table><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num / str</td><td>返回值</td><td>见对应表格</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td></td></tr><tr><td>meta</td><td>obj</td><td>错误信息</td><td>invalid_argument 时存在，例如 <code>{&quot;argument&quot;:&quot;platform&quot;}</code></td></tr><tr><td>data</td><td>obj</td><td></td><td><code>code</code> 为 0，<code>msg</code> 为空时存在</td></tr></tbody></table><p><code>code</code> - <code>msg</code> 对应表：</p><table><thead><tr><th>code</th><th>code 类型</th><th>msg</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>num</td><td>空</td><td>分享成功，<code>data</code> 存在</td></tr><tr><td>0</td><td>num</td><td>今日已分享</td><td></td></tr><tr><td>invalid_argument</td><td>str</td><td>xxxx must be valid</td><td>xxxx 字段为必须，<code>meta</code>存在</td></tr><tr><td>unauthenticated</td><td>str</td><td>must login</td><td>必须登录才能分享</td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>point</td><td>num</td><td>获取积分</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST https://manga.bilibili.com/twirp/activity.v1.Activity/ShareComic <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&quot;SESSDATA=xxxxx&quot;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=android&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>分享成功：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;point&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details><summary>今日已分享：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;今日已分享&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,18),o=[d];function r(i,p){return a(),n("div",null,o)}const l=t(e,[["render",r],["__file","Activity.html.vue"]]);export{l as default};
