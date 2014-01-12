/* https://github.com/benpaobenpao/dialog */
(function($) { 
    $.Dialog = {
        init: function(options) {
            var _this = this,
                defaults = {
                    width: "400",
                    height: "100",
                    title: "",
                    html: "",
                    type: "default", //  default   conform   alert
                    closed: null,
                    conform: {
                        name: "确定",
                        callback: null
                    },
                    cancel: {
                        name: "取消",
                        callback: null
                    }
                };
            options.isIE6 = !! window.ActiveXObject && !window.XMLHttpRequest;
            _this.options = $.extend({}, defaults, options);
            _this.creatHtml();
            _this.show();
            _this.events();
            if (_this.options.isIE6) {
                _this.ie6fixed();
            }
        },
        creatHtml: function() {
            var _this = this;
            var interText = doT.template($("#dialogtmpl")[0].text);
            $("body").append(interText(_this.options));
        },
        show: function() {
            var _this = this;
            _this.dialogbg = $("#dialogbg");
            _this.dialogbox = $("#dialogbox");

            _this.dialogbg.css({
                "height": $(document).height()
            });

            _this.dialogbox.css({
                "margin-top": (-_this.options.height / 2) + "px",
                "margin-left": (-_this.options.width / 2) + "px",
                "width": _this.options.width + "px",
                "height": _this.options.height + "px"
            });

            _this.dialogbox.addClass("dialogboxrunstart");
        },
        events: function() {
            var _this = this;
            _this.dialogclosed = _this.dialogbox.find(".dialogclosed");
            _this.dialogconform = _this.dialogbox.find(".dialogconform");
            _this.dialogcancel = _this.dialogbox.find(".dialogcancel");

            _this.dialogclosed.on("click", function() {
                _this.removeCallback(_this.options.closed);
            });

            _this.dialogconform.on("click", function() {
                _this.removeCallback(_this.options.conform.callback);
            });

            _this.dialogcancel.on("click", function() {
                _this.removeCallback(_this.options.cancel.callback);
            });
        },
        removeCallback: function(call) {
            var _this = this;
            _this.dialogbg.remove();
            _this.dialogbox.remove(); !! call && call();
        },
        ie6fixed: function() {
            var _this = this;
            $(window).scroll(function() {
                _this.dialogbox.css({
                    "top": (($(window).height() - _this.options.height) / 2 + $(document).scrollTop()) + "px"
                });
            });
        }
    }
})(jQuery);