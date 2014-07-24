基于jquery和dot.js弹出框插件，兼容IE6+等其他浏览器。

参数使用说明： 

	width：定义弹出框的宽度，默认值是400。
	height：定义弹出框的高度，默认值是100.
	title：定义弹出框的标题，默认值是空。
	html：定义弹出框的内容，默认值是空。
	type：定义弹出框的类型，默认值是default，其他conform和alert。
	closed: 标题栏中的关闭按钮，回调方法，默认为null。
	conform：包含name指按钮的名称，默认值为确定，callback回调方法，默认值为null。
	cancel：包含name指按钮的名称，默认值为取消，callback回调方法，默认值为null。
	备注：如果使用conform或alert时，不设置type类型是不起作用。
	


放在公用页面底部 

	<script id="dialogtmpl" type="text/x-dot-template">
    {{? it.isIE6===false }} 
    <div id="dialogbg" class="dialogbg"></div>
    {{??  }}
    <iframe id="dialogbg" class="dialogbg"></iframe>
    {{?}}
    <div id="dialogbox" class="dialogbox">
        <div class="dialogcont">
            <div class="dialogtit clearfix">
                <a class="dialogclosed" title="关闭">&otimes;</a>
                <div class="dialogtxt">{{=it.title}}</div>
            </div>
            <div class="dialogmain">{{=it.html}}</div>
            {{? it.type === "conform"}}
            <div class="dialogBtns">
                <a class="dialogconform">{{=it.conform.name||"确定"}}</a>
            </div>
            {{?? it.type === "alert"}}
            <div class="dialogBtns">
                <a class="dialogconform">{{=it.conform.name||"确定"}}</a>
                <a class="dialogcancel">{{=it.cancel.name||"取消"}}</a>
            </div>
            {{?}} 
        </div>
    </div>
</script>

例如：

	$.Dialog.init({
	    height: 180,
	    title: "弹出框",
	    html: "亲，默认弹出框哦",
	    closed: function() {
	        alert("关闭");
	    }
	});


