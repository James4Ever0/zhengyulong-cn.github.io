import{_ as s,o as n,c as a,b as l}from"./app.79da0fb4.js";const i=JSON.parse('{"title":"\u94FE\u8868\u3001\u6808\u548C\u961F\u5217","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5355\u94FE\u8868","slug":"\u5355\u94FE\u8868","link":"#\u5355\u94FE\u8868","children":[{"level":3,"title":"\u5B9A\u4E49\u7ED3\u6784","slug":"\u5B9A\u4E49\u7ED3\u6784","link":"#\u5B9A\u4E49\u7ED3\u6784","children":[]},{"level":3,"title":"\u63D2\u5165\u5143\u7D20","slug":"\u63D2\u5165\u5143\u7D20","link":"#\u63D2\u5165\u5143\u7D20","children":[]}]}],"relativePath":"algorithms/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u94FE\u8868\u3001\u6808\u548C\u961F\u5217.md"}'),p={name:"algorithms/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u94FE\u8868\u3001\u6808\u548C\u961F\u5217.md"},o=l(`<h1 id="\u94FE\u8868\u3001\u6808\u548C\u961F\u5217" tabindex="-1">\u94FE\u8868\u3001\u6808\u548C\u961F\u5217 <a class="header-anchor" href="#\u94FE\u8868\u3001\u6808\u548C\u961F\u5217" aria-hidden="true">#</a></h1><h2 id="\u5355\u94FE\u8868" tabindex="-1">\u5355\u94FE\u8868 <a class="header-anchor" href="#\u5355\u94FE\u8868" aria-hidden="true">#</a></h2><p>\u5355\u94FE\u8868\u57FA\u4E8E\u6307\u9488\uFF0C\u53EF\u4EE5\u52A8\u6001\u7684\u4E3A\u65B0\u5143\u7D20\u5206\u914D\u5B58\u50A8\u7A7A\u95F4\u3002</p><h3 id="\u5B9A\u4E49\u7ED3\u6784" tabindex="-1">\u5B9A\u4E49\u7ED3\u6784 <a class="header-anchor" href="#\u5B9A\u4E49\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u63D2\u5165\u5143\u7D20" tabindex="-1">\u63D2\u5165\u5143\u7D20 <a class="header-anchor" href="#\u63D2\u5165\u5143\u7D20" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">insertNode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">pos</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#F78C6C;">debugger</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">pos</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pos</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6D4B\u8BD5\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">          )</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">insertNode</span><span style="color:#A6ACCD;">(node1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">888</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(node1))</span></span>
<span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">{&quot;val&quot;:1,&quot;next&quot;:{&quot;val&quot;:2,&quot;next&quot;:{&quot;val&quot;:888,&quot;next&quot;:{&quot;val&quot;:3,&quot;next&quot;:{&quot;val&quot;:4,&quot;next&quot;:{&quot;val&quot;:5,&quot;next&quot;:{&quot;val&quot;:6,&quot;next&quot;:{&quot;val&quot;:7,&quot;next&quot;:null}}}}}}}}</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,r,y,F,D,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
