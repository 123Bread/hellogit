/*! e_admin_shandong v1.0.0
*  by [object Object]
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-09-19
*  Licensed under Apache-2.0
*/
 /**
 * 输入文字自动计算
 * by tommyshao <jinhong.shao@frontpay.cn>
 *
 * 2016-09-19
 */
;(function($) {

  var TextCount = function(el, option) {
    this.el = $(el)
    this.option = $.extend({
      callback: $.noop,
      max: 300
    }, option)
    this.targetEl = $(el).closest("div").find(this.option.target)

    if(!this.targetEl.length) return;

    this.initEvent()
    this.countNum()
  }

  TextCount.prototype = {
    constructor: TextCount,
    initEvent: function() {
      // propertychange 兼容ie8
      this.el.on('input change propertychange', $.proxy(this.countNum, this))
    },
    countNum: function() {
      var elVal = this.el.val(), max = this.option.max
      var len = elVal.length;
      var num = parseInt(max - len);
      if(num < 0) { // 最大 max 字
        num = 0;
        this.el.val(elVal.substring(0, max))
      }
      this.targetEl.html(num)
      this.option.callback(num)
    }
  }


  $.fn.textCount = function(option) {
    return $(this).each(function() {
      var that = $(this),
          data = that.data('textcount')
      if(!data) that.data('textcount', (data = new TextCount(that, option)))
    })
  }

})(jQuery);
