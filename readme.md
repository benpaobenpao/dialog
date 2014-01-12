基于jquery和dot.js弹出框插件，兼容IE6+等其他浏览器。

参数使用说明： 
<pre>
width：定义弹出框的宽度，默认值是400。
height：定义弹出框的高度，默认值是100.
title：定义弹出框的标题，默认值是空。
html：定义弹出框的内容，默认值是空。
type：定义弹出框的类型，默认值是default，其他conform和alert。
closed: 标题栏中的关闭按钮，回调方法，默认为null。
conform：包含name指按钮的名称，默认值为确定，callback回调方法，默认值为null。
cancel：包含name指按钮的名称，默认值为取消，callback回调方法，默认值为null。
备注：如果使用conform或alert时，不设置type类型是不起作用。
<pre>

放在公用页面底部 
<pre>
&lt;script id="dialogtmpl" type="text/x-dot-template"&gt;
    {{? it.isIE6===false }} 
    &lt;div id="dialogbg" class="dialogbg"&gt;&lt;/div&gt;
    {{??  }}
    <iframe id="dialogbg" class="dialogbg"&gt;&lt;/iframe&gt;
    {{?}}
    &lt;div id="dialogbox" class="dialogbox"&gt;
        &lt;div class="dialogcont"&gt;
            &lt;div class="dialogtit clearfix"&gt;
                &lt;a class="dialogclosed" title="关闭"&gt;&otimes;&lt;/a&gt;
                &lt;div class="dialogtxt"&gt;{{=it.title}}&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="dialogmain"&gt;{{=it.html}}&lt;/div&gt;
            {{? it.type === "conform"}}
            &lt;div class="dialogBtns"&gt;&lt;a class="dialogconform"&gt;{{=it.conform.name||"确定"}}&lt;/a&gt;&lt;/div&gt;
            {{?? it.type === "alert"}}
            &lt;div class="dialogBtns"&gt;&lt;a class="dialogconform"&gt;{{=it.conform.name||"确定"}}&lt;/a&gt;&lt;a class="dialogcancel"&gt;{{=it.cancel.name||"取消"}}&lt;/a&gt;&lt;/div&gt;
            {{?}} 
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/script&gt;
</pre>

例如：
<pre>
$.Dialog.init({
    height: 180,
    title: "弹出框",
    html: "亲，默认弹出框哦",
    closed: function() {
        alert("关闭");
    }
});
</pre>