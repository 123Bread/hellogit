/*! financing_clearing_system v1.0.0
*  by [object Object]
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-11-14
*  Licensed under Apache-2.0
*/
 ~function($){var itemHandler={init:function(config){config&&(this.$remove=config.remove,this.$add=$(config.add),this.$brother=$(config.brother),this.$container=$(config.container),this.item=config.item,this.tmpl=$(config.tmpl).html(),this.onEvent())},onEvent:function(){this.$container.on("click",this.$remove,this.remove(this.item)),this.$add.on("click",$.proxy(this.add,this))},remove:function(wrap){return function(){$(this).parent(wrap).remove()}},add:function(){var index=this.$container.find(this.item).length,html=this.compile(index++);this.$brother.before(html)},compile:function(i){return this.tmpl.replace(/<%=index%>/g,i)}},pageInit=function(){itemHandler.init({remove:".j-remove-item",add:"#j-add-item",brother:"#j-items-brother",container:"#j-items",item:".form-control-wrap",tmpl:"#j-item-tmpl"})};$(pageInit)}(jQuery);