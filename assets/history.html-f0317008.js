import{_ as c,r as e,o as u,c as i,a as n,b as s,d as a,w as o,e as t}from"./app-7d64ee8a.js";const d={},r=t(`<h1 id="历史弹幕" tabindex="-1"><a class="header-anchor" href="#历史弹幕" aria-hidden="true">#</a> 历史弹幕</h1><p><strong>注：历史弹幕的xml接口已经失效，现已改为protobuf接口</strong></p><h2 id="查询历史弹幕日期" tabindex="-1"><a class="header-anchor" href="#查询历史弹幕日期" aria-hidden="true">#</a> 查询历史弹幕日期</h2><blockquote><p>https://api.bilibili.com/x/v2/dm/history/index</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>注：查询历史弹幕需要登录</strong></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>1</td><td>必要</td><td></td></tr><tr><td>oid</td><td>num</td><td>视频cid</td><td>必要</td><td></td></tr><tr><td>month</td><td>str</td><td>查询目标年月</td><td>必要</td><td>YYYY-MM</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>有弹幕：array<br>无弹幕：null</td><td>日期列表</td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>存在弹幕的日期1</td><td>YYYY-MM-DD</td></tr><tr><td>n</td><td>str</td><td>存在弹幕的日期(n+1)</td><td>YYYY-MM-DD</td></tr><tr><td>……</td><td>str</td><td>……</td><td>……</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询了cid为144541892的视频位于2020年1月中有历史弹幕记录的日期</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/dm/history/index&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid=144541892&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;month=2020-01&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;2020-01-21&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2020-01-22&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2020-01-23&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2020-01-24&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2020-01-25&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2020-01-26&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2020-01-27&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2020-01-28&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2020-01-29&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2020-01-30&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;2020-01-31&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>返回结果的 <code>data</code> 项说明这些日期有弹幕发送。若查询的月份中视频无弹幕，则 <code>data</code> 项为 <code>null</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/dm/history/index&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid=144541892&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;month=2019-12&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取历史弹幕protobuf接口" tabindex="-1"><a class="header-anchor" href="#获取历史弹幕protobuf接口" aria-hidden="true">#</a> 获取历史弹幕protobuf接口</h2><blockquote><p>https://api.bilibili.com/x/v2/dm/web/history/seg.so</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>弹幕类</td><td>必要</td><td>1：视频弹幕</td></tr><tr><td>oid</td><td>num</td><td>视频cid</td><td>必要</td><td></td></tr><tr><td>date</td><td>str</td><td>弹幕日期</td><td>必要</td><td>YYYY-MM-DD</td></tr></tbody></table><p><strong>proto回复：</strong></p>`,28),k={href:"https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/grpc_api/bilibili/community/service/dm/v1/dm.proto",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>获取视频<code>av84271171(cid=144541892)</code>2020-01-21的历史弹幕</p><p><strong>注：proto定义需要编译</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> google<span class="token punctuation">.</span>protobuf<span class="token punctuation">.</span>text_format <span class="token keyword">as</span> text_format
<span class="token keyword">import</span> bilibili<span class="token punctuation">.</span>community<span class="token punctuation">.</span>service<span class="token punctuation">.</span>dm<span class="token punctuation">.</span>v1_pb2 <span class="token keyword">as</span> Danmaku

url <span class="token operator">=</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/dm/web/history/seg.so&#39;</span>
params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;type&#39;</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>           <span class="token comment">#弹幕类型</span>
    <span class="token string">&#39;oid&#39;</span><span class="token punctuation">:</span><span class="token number">144541892</span><span class="token punctuation">,</span>    <span class="token comment">#cid</span>
    <span class="token string">&#39;date&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;2020-01-21&#39;</span> <span class="token comment">#弹幕日期</span>
<span class="token punctuation">}</span>
cookies <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;SESSDATA&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;xxx&#39;</span>
<span class="token punctuation">}</span>
resp <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span>params<span class="token punctuation">,</span>cookies<span class="token operator">=</span>cookies<span class="token punctuation">)</span>
data <span class="token operator">=</span> resp<span class="token punctuation">.</span>content

danmaku_seg <span class="token operator">=</span> Danmaku<span class="token punctuation">.</span>DmSegMobileReply<span class="token punctuation">(</span><span class="token punctuation">)</span>
danmaku_seg<span class="token punctuation">.</span>ParseFromString<span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>text_format<span class="token punctuation">.</span>MessageToString<span class="token punctuation">(</span>danmaku_seg<span class="token punctuation">.</span>elems<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>as_utf8<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>id: 27532611677585408
progress: 300507
mode: 1
fontsize: 25
color: 16777215
midHash: &quot;2a28d4a6&quot;
content: &quot;章北海的老爹&quot;
ctime: 1579621359
idStr: &quot;27532611677585408&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取历史弹幕xml接口" tabindex="-1"><a class="header-anchor" href="#获取历史弹幕xml接口" aria-hidden="true">#</a> 获取历史弹幕xml接口</h2>`,6),v=n("summary",null,"查看折叠内容：",-1),g=n("blockquote",null,[n("p",null,"https://api.bilibili.com/x/v2/dm/history")],-1),b=n("p",null,[n("em",null,"请求方式：GET")],-1),h=n("p",null,"认证方式：Cookie（SESSDATA）",-1),q=n("p",null,[n("strong",null,"注：查询历史弹幕需要登录")],-1),x=t(`<p><strong>使用deflate压缩，注意解码</strong></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>1</td><td>必要</td><td></td></tr><tr><td>oid</td><td>num</td><td>视频cid</td><td>必要</td><td></td></tr><tr><td>date</td><td>str</td><td>弹幕日期</td><td>必要</td><td>YYYY-MM-DD</td></tr></tbody></table><p><strong>示例：</strong></p><p>获取视频<code>av84271171(cid=144541892)</code>2020-01-21的历史弹幕</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/dm/history&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid=144541892&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;date=2020-01-21&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--compressed</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;danmaku.xml&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>chatserver</span><span class="token punctuation">&gt;</span></span>chat.bilibili.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>chatserver</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>chatid</span><span class="token punctuation">&gt;</span></span>144541892<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>chatid</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mission</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mission</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maxlimit</span><span class="token punctuation">&gt;</span></span>1500<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maxlimit</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>state</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>state</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>real_name</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>real_name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>473.43400,1,25,15138834,1579622380,0,ec16f2d,27532609919123456<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>敬礼<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3.10200,1,25,16777215,1579622362,0,a2bd7474,27532609920696320<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>悄默声的更新啊怎么<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>17.52300,1,25,16777215,1579622357,0,972c932b,27532609906016258<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>久等了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40.81800,1,25,16777215,1579622343,0,bbca6701,27532609906540546<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>不都是乱纪元才浸泡<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>243.39800,1,25,15138834,1579622336,0,77b00ed9,27532609924890624<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>已阅，狗屁不通。大字报在地上搞搞就行，别弄到天上去<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>559.80000,1,25,16777215,1579622334,0,9affc7f5,27532609909686274<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CSSC。。。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>398.29700,1,25,16777215,1579622331,0,18d4707,27532609926463488<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>看到了个寂寞<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>34.81000,1,25,38979,1579622327,0,319d7700,27532609926987776<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>有耳朵了!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18.65700,1,25,16777215,1579622321,0,bbca6701,27532609912307714<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>雪天不用浸泡吧<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>305.99800,1,25,16777215,1579622316,0,878c315b,27532609928560640<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>未来史学派<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>7.86200,1,25,16777215,1579622309,0,c5136613,27532609913880578<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>浸泡！！！！！！！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>368.95600,1,25,16777215,1579622302,0,18d4707,27532609914404866<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>章召忠<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25.19800,1,25,16777215,1579622286,0,4dab6898,27532609931706368<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>mi24av<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>41.10100,1,25,16777215,1579622274,0,33d31036,27532609932230656<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>泪奔<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>627.69800,1,25,16777215,1579622264,0,d79a826a,27532609933279232<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>组建太空军<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>310.58900,1,25,16777215,1579622243,0,18d4707,27532609918074882<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>是未来史学派？<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>723.34800,1,25,16777215,1579622239,0,844fa9e7,27532609919123458<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>刘培强还行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    …………
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,7);function y(_,f){const l=e("ExternalLinkIcon"),p=e("RouterLink");return u(),i("div",null,[r,n("p",null,[s("porto定义见："),n("a",k,[s("bilibili.community.service.dm.v1.DmSegMobileReply"),a(l)])]),n("p",null,[s("详细说明见"),a(p,{to:"/docs/danmaku/danmaku_proto.html"},{default:o(()=>[s("protobuf弹幕")]),_:1})]),m,n("details",null,[v,g,b,h,q,n("p",null,[s("结果为"),a(p,{to:"/docs/danmaku/danmaku_xml.html#%E5%BC%B9%E5%B9%95%E6%A0%BC%E5%BC%8F"},{default:o(()=>[s("标准xml格式弹幕")]),_:1})]),x])])}const Y=c(d,[["render",y],["__file","history.html.vue"]]);export{Y as default};
