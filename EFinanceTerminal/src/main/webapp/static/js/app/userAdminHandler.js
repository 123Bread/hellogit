/*! financing_clearing_system v1.0.0
*  by [object Object]
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-11-14
*  Licensed under Apache-2.0
*/
 !function($,exports){var UserHandler={init:function(el,templateId,ready){return this.el=$(el),this.id="#j-modal-addcomp",this.templateId=templateId,"function"==typeof ready&&ready.call(this,this.el),this},add:function(){this.el&&this.showModal()},showModal:function(){var content=template(this.templateId,{});$(this.id).modal({title:"添加企业",content:content})},hideMoal:function(){$(this.id).modal("hide")},update:function(item){this.el.append('<option value="'+item.value+'" selected>'+item.text+"</option>"),this.hideMoal()}};exports.UserAdminHandler=function(){var args=[].slice.call(arguments);UserHandler.init.apply(UserHandler,args)}}(jQuery,window);