/*! financing_clearing_system v1.0.0
*  by [object Object]
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-11-14
*  Licensed under Apache-2.0
*/
 !function($){var auditor,Auditor=Spine.extend({EVENTS:{},template:$("#j-template-add").html(),initialize:function(){this.modalId=this.get("id"),this.set("canSubmit",!1),this.show()},show:function(){var self=this;$(this.modalId).modal({title:"添加审核方",content:self.template,callback:function(){$(self.modalId).on("show.ui.modal",function(){self.initModal()}),$(self.modalId).on("hide.ui.modal",function(){self.set("canSubmit",!1)})}})},initModal:function(){var self=this;$(this.modalId).find('[data-toggle="dropdown"]').dropdown(),$(this.get("btnSubmit")).on("click",$.proxy(this.submit,this)),$(this.modalId).find(".form-control").on("blur",function(){var thisVal=$.trim($(this).val());self.showError(this,""!==thisVal)})},hide:function(){$(this.modalId).modal("hide")},submit:function(){var self=this,$form=$(this.get("form")),data=$form.serializeArray(),url=$form.prop("action");this.get("canSubmit")?(self.setButton(!1),$.get(url,data,function(res){self.done(res)},"json")):this.validate()},done:function(res){var fn=this.get("callback");1==res.status?(fn(res.data),this.hide()):alert(res.msg),this.setButton(!0)},validate:function(){var isErr,thisVal,self=this,$form=$(this.get("form")),$inputs=$form.find(".form-control"),errors=0;$inputs.map(function(){thisVal=$.trim($(this).val()),isErr=""===thisVal,self.showError(this,!isErr),errors=isErr?errors++:errors}),!errors&&this.set("canSubmit",!0)},showError:function(el,rm){var obj=$(el).next(".form-notice");rm&&obj.length?(obj.hide(),$(el).parents(".form-group").removeClass("has-error")):obj.length?rm?(obj.hide(),$(el).parents(".form-group").removeClass("has-error")):(obj.show(),$(el).parents(".form-group").addClass("has-error")):rm||($(el).after('<div class="form-notice"><i></i>请选择该项</div>'),$(el).parents(".form-group").addClass("has-error"))},setButton:function(active){var $button=$(this.get("btnSubmit"));active?$button.addClass("primary").prop("disabled",!active).html("提交"):$button.removeClass("primary").prop("disabled",!active).html("提交中...")}}),AppController=Spine.extend({EVENTS:{".btn":{click:function(self,e){auditor=new Auditor({id:"#modal-check-auditor",btnSubmit:"#modal-submit-btn",form:"#modal-add-form",callback:function(){var args=[].slice.call(arguments);self.append.apply(self,args)}})}},".remove-item":{click:function(self,e){e.preventDefault();var mid=$(this).attr("data-mid"),url=$(this).attr("href");self.removeItem(url,mid)}}},template:$("#j-template-item").html(),initialize:function(){},append:function(data){data=data||[];var $list=this.get("list"),newItem=this._parseTemplate(this.template,{data:data,len:this._getLen()});newItem&&$list.append(newItem)},_getLen:function(){var container=this.get("list"),list=container.children("tr");return list.length||0},removeItem:function(url,mid){var self=this,callback=function(){$.getJSON(url).done(function(res){1==res.status?(mid>=0&&$("#auditor-item-"+mid).remove(),self.checkEmpty()):alert(res.msg)})};confirmModalLayer({title:"是否删除该记录?",callback:callback})},render:function(){var tbody=this._parseTemplate(this.template,{data:[]});$("#auditor-list").empty().append(tbody)},checkEmpty:function(){var container=this.get("list"),len=this._getLen();0===len?container.append('<tr id="table-empty"><td colspan="3">请先增加审核方!</td></tr>'):$("#table-empty").length>0&&$("#table-empty").remove()}});$(function(){new AppController({parentNode:$("#settingController"),list:$("#auditor-list")})})}(jQuery);