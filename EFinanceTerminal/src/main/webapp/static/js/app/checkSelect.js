/*! financing_clearing_system v1.0.0
*  by [object Object]
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-11-14
*  Licensed under Apache-2.0
*/
 +function($){$.fn.checkSelect=function(fn){_this=this;var checkbox=_this.find("input:checkbox"),radio=_this.find("input:radio"),firstRadio=$(this).find("input:radio:first"),judge=function(){checkbox.is(":checked")?(radio.prop("disabled",!1),firstRadio.prop("checked","true")):(radio.prop("disabled",!0),radio.removeAttr("checked"))};judge(),checkbox.on("click",function(){judge()})}}(jQuery);