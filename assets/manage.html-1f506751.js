import{_ as e,r as o,o as d,c as p,a as t,b as s,d as r,w as l,e as n}from"./app-7d64ee8a.js";const i={},c=n(`<h1 id="直播间管理" tabindex="-1"><a class="header-anchor" href="#直播间管理" aria-hidden="true">#</a> 直播间管理</h1><h2 id="开通直播间" tabindex="-1"><a class="header-anchor" href="#开通直播间" aria-hidden="true">#</a> 开通直播间</h2><blockquote><p>https://api.live.bilibili.com/xlive/app-blink/v1/preLive/CreateRoom</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>bili_jct</code>的值正确并与<code>csrf</code>相同</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>platform</td><td>str</td><td>客户端？</td><td>必要</td><td>默认值web</td></tr><tr><td>visit_id</td><td>str</td><td>未知</td><td></td><td>默认空</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr><tr><td>csrf_token</td><td>str</td><td>CSRF Token（位于 cookie）</td><td></td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>1531193016：已经创建直播间~<br>-400：请求错误</td></tr><tr><td>ttl</td><td>str</td><td>错误信息</td><td>默认为1</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>data</td><td>array</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>roomID</td><td>str</td><td>直播间房间号</td><td>创建成功返回直播间号</td></tr></tbody></table><p><strong>示例：</strong></p><p>开通直播间</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.live.bilibili.com/xlive/app-blink/v1/preLive/CreateRoom&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=web&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;visit_id=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx;bili_jct=xx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;roomID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">1531193016</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已经创建直播间~&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;roomID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="更新直播间标题" tabindex="-1"><a class="header-anchor" href="#更新直播间标题" aria-hidden="true">#</a> 更新直播间标题</h2><blockquote><p>https://api.live.bilibili.com/room/v1/Room/update</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>bili_jct</code>的值正确并与<code>csrf</code>相同</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>room_id</td><td>num</td><td>直播间id</td><td>必要</td><td>必须为自己的直播间id</td></tr><tr><td>title</td><td>str</td><td>直播间标题</td><td></td><td>最大20字符</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr><tr><td>csrf_token</td><td>str</td><td>CSRF Token（位于 cookie）</td><td></td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>65530：token错误（登录错误）<br>1：错误</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为ok</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为ok</td></tr><tr><td>data</td><td>array</td><td>空</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>修改直播间<code>10352053</code>标题为<code>测试</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.live.bilibili.com/room/v1/Room/update&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;room_id=10352053&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;title=测试&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx;bili_jct=xx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="开始直播" tabindex="-1"><a class="header-anchor" href="#开始直播" aria-hidden="true">#</a> 开始直播</h2><blockquote><p>https://api.live.bilibili.com/room/v1/Room/startLive</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>bili_jct</code>的值正确并与<code>csrf</code>相同</p><p>开播时必须有分区选择，开播后返回推流地址</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p>`,38),u=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),k=t("tr",null,[t("td",null,"room_id"),t("td",null,"num"),t("td",null,"直播间id"),t("td",null,"必要"),t("td",null,"必须为自己的直播间id")],-1),v=t("td",null,"area_v2",-1),b=t("td",null,"num",-1),m=t("td",null,"直播分区id（子分区id）",-1),h=t("td",null,"必要",-1),q=t("tr",null,[t("td",null,"platform"),t("td",null,"str"),t("td",null,"直播平台"),t("td",null,"必要"),t("td",null,[s("web端："),t("br"),s("bililink：android_link")])],-1),g=t("tr",null,[t("td",null,"csrf"),t("td",null,"str"),t("td",null,"CSRF Token（位于cookie）"),t("td",null,"必要"),t("td")],-1),y=n(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>65530：token错误（登录错误）<br>1：错误<br>60009：分区不存在<br>60013：非常抱歉，您所在的地区受实名认证限制无法开播<br><strong>（其他错误码有待补充）</strong></td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为空</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为空</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>change</td><td>num</td><td>是否改变状态</td><td>0：未改变<br>1：改变</td></tr><tr><td>status</td><td>str</td><td>LIVE</td><td></td></tr><tr><td>room_type</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>rtmp</td><td>obj</td><td>RTMP推流地址信息</td><td></td></tr><tr><td>protocols</td><td>array</td><td>？？？</td><td>作用尚不明确</td></tr><tr><td>try_time</td><td>str</td><td>？？？</td><td>作用尚不明确</td></tr><tr><td>live_key</td><td>str</td><td>？？？</td><td>作用尚不明确</td></tr><tr><td>notice</td><td>obj</td><td>？？？</td><td>作用尚不明确</td></tr></tbody></table><p><code>data</code>中的<code>rtmp</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>addr</td><td>str</td><td>RTMP推流（发送）地址</td><td><strong>重要</strong></td></tr><tr><td>code</td><td>str</td><td>RTMP推流参数（密钥）</td><td><strong>重要</strong></td></tr><tr><td>new_link</td><td>str</td><td>获取CDN推流ip地址重定向信息的url</td><td>没啥用</td></tr><tr><td>provider</td><td>str</td><td>？？？</td><td>作用尚不明确</td></tr></tbody></table><p><code>data</code>中的<code>protocols</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>？？？</td><td>作用尚不明确</td></tr></tbody></table><p><code>data</code>中的<code>protocols</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>protocol</td><td>str</td><td>rtmp</td><td>作用尚不明确</td></tr><tr><td>addr</td><td>str</td><td>RTMP推流（发送）地址</td><td></td></tr><tr><td>code</td><td>str</td><td>RTMP推流参数（密钥）</td><td></td></tr><tr><td>new_link</td><td>str</td><td>获取CDN推流ip地址重定向信息的url</td><td></td></tr><tr><td>provider</td><td>str</td><td>txy</td><td>作用尚不明确</td></tr></tbody></table><p><code>data</code>中的<code>notice</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>1</td><td>作用尚不明确</td></tr><tr><td>status</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>title</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>msg</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>button_text</td><td>str</td><td>空</td><td>作用尚不明确</td></tr><tr><td>button_url</td><td>str</td><td>空</td><td>作用尚不明确</td></tr></tbody></table><p><strong>示例：</strong></p><p>以<code>27</code>作为分区id开播直播间<code>10352053</code></p><p>其中<code>&quot;data&quot;.&quot;rtmp&quot;.&quot;addr&quot;</code>为推流地址</p><p><code>&quot;data&quot;.&quot;rtmp&quot;.&quot;code&quot;</code>为推流参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.live.bilibili.com/room/v1/Room/startLive&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;room_id=10352053&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;area_v2=27&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=pc&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx;bili_jct=xx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;change&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LIVE&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;room_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rtmp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;addr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp://txy.live-send.acg.tv/live-txy/&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;?streamname=live_293793435_1567354&amp;key=***&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;new_link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://tcdns.myqcloud.com:8086/bilibili_redirect?up_rtmp=txy.live-send.acg.tv%2Flive-txy%2F%3Fstreamname%3Dlive_293793435_1567354%26key%3D***&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;provider&quot;</span><span class="token operator">:</span> <span class="token string">&quot;txy&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocols&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;addr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp://txy.live-send.acg.tv/live-txy/&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;?streamname=live_293793435_1567354&amp;key=***&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;new_link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://tcdns.myqcloud.com:8086/bilibili_redirect?up_rtmp=txy.live-send.acg.tv%2Flive-txy%2F%3Fstreamname%3Dlive_293793435_1567354%26key%3D***&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;provider&quot;</span><span class="token operator">:</span> <span class="token string">&quot;txy&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;try_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000-00-00 00:00:00&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;live_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;l:one:live:record:10352053:1589344980&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;notice&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;button_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;button_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="关闭直播" tabindex="-1"><a class="header-anchor" href="#关闭直播" aria-hidden="true">#</a> 关闭直播</h2><blockquote><p>https://api.live.bilibili.com/room/v1/Room/stopLive</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>bili_jct</code>的值正确并与<code>csrf</code>相同</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>room_id</td><td>num</td><td>直播间id</td><td>必要</td><td>必须为自己的直播间id</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>65530：token错误（登录错误）<br>-400：没有权限<br><strong>（其他错误码有待补充）</strong></td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为空</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为空</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>change</td><td>num</td><td>是否改变状态</td><td>0：未改变<br>1：改变</td></tr><tr><td>status</td><td>str</td><td>PREPARING</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>关闭直播间<code>10352053</code>的直播</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.live.bilibili.com/room/v1/Room/stopLive&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;room_id=10352053&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx;bili_jct=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;change&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PREPARING&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="更新直播间公告" tabindex="-1"><a class="header-anchor" href="#更新直播间公告" aria-hidden="true">#</a> 更新直播间公告</h2><blockquote><p>https://api.live.bilibili.com/xlive/app-blink/v1/index/updateRoomNews</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>bili_jct</code>的值正确并与<code>csrf</code>相同</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>room_id</td><td>num</td><td>直播间id</td><td>必要</td><td>必须为自己的直播间id</td></tr><tr><td>uid</td><td>num</td><td>用户id</td><td>必要</td><td></td></tr><tr><td>content</td><td>str</td><td>公告内容</td><td>必要</td><td>最大60个字符,可以为空</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr><tr><td>csrf_token</td><td>str</td><td>CSRF Token（位于 cookie）</td><td></td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>65530：token错误（登录错误）<br>1：错误</td></tr><tr><td>data</td><td>array</td><td>空</td><td></td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为ok</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td>作用尚不明确</td></tr></tbody></table><p><strong>示例：</strong></p><p>修改直播间<code>11996900</code>公告为<code>测试修改公告</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.live.bilibili.com/xlive/app-blink/v1/index/updateRoomNews&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;room_id=11996900&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;uid=306903238&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;content=测试修改公告&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx;bili_jct=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="编辑直播间标签" tabindex="-1"><a class="header-anchor" href="#编辑直播间标签" aria-hidden="true">#</a> 编辑直播间标签</h2><blockquote><p>https://api.live.bilibili.com/room/v1/Room/update</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>bili_jct</code>的值正确并与<code>csrf</code>相同</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>room_id</td><td>num</td><td>直播间id</td><td>必要</td><td>必须为自己的直播间id</td></tr><tr><td>add_tag</td><td>str</td><td>要添加的标签</td><td>必要</td><td>最大10个字符</td></tr><tr><td>del_tag</td><td>str</td><td>要删除的标签</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr><tr><td>csrf_token</td><td>str</td><td>CSRF Token（位于 cookie）</td><td></td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>65530：token错误（登录错误）<br>1：错误</td></tr><tr><td>data</td><td>obj</td><td></td><td></td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为ok</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为ok</td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>audit_info</td><td>obj</td><td></td><td></td></tr><tr><td>sub_session_key</td><td>str</td><td></td><td></td></tr></tbody></table><p><code>data</code>中的<code>audit_info</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>audit_title_reason</td><td>str</td><td></td><td></td></tr><tr><td>audit_title_status</td><td>num</td><td>0</td><td></td></tr><tr><td>update_title</td><td>str</td><td></td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>给直播间<code>11996900</code>添加一个标签为<code>测试标签</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.live.bilibili.com/room/v1/Room/update&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;room_id=11996900&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;add_tag=测试标签&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx;bili_jct=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;sub_session_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;audit_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;audit_title_reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;update_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;audit_title_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>给直播间<code>11996900</code>删除内容为<code>测试标签</code>的标签</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.live.bilibili.com/room/v1/Room/update&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;room_id=11996900&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;del_tag=测试标签&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx;bili_jct=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;sub_session_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;audit_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;audit_title_reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;update_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;audit_title_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,70);function _(x,f){const a=o("RouterLink");return d(),p("div",null,[c,t("table",null,[u,t("tbody",null,[k,t("tr",null,[v,b,m,h,t("td",null,[s("详见"),r(a,{to:"/docs/live/live_area.html"},{default:l(()=>[s("直播分区")]),_:1})])]),q,g])]),y])}const j=e(i,[["render",_],["__file","manage.html.vue"]]);export{j as default};
