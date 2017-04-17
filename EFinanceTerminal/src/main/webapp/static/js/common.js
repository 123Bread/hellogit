/*! financing_clearing_system v1.0.0
*  by [object Object]
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-11-14
*  Licensed under Apache-2.0
*/
 function autoHeight(){var oLoading=document.getElementById("j-iframe-loading");oLoading&&(oLoading.style.display="none")}function parentAutoHeight(){window.parent!=window&&window.parent&&window.parent.autoHeight&&window.parent.autoHeight()}function openPage(url){var iFrame=document.getElementById("j-mainContent"),oLoading=document.getElementById("j-iframe-loading");oLoading&&(oLoading.style.display="block"),iFrame.src=url}~function($){$.fn.mnToggle=function(fn,options){return options=$.extend({toggle:"",active:""},options),$(this).on("click",function(){var $this=$(this),target=$this.attr("data-toggle"),clsName=$this.attr("data-class"),$target=$this.parent();target&&($target=$(target)),options.toggle&&($target=$(options.toggle)),options.active&&(clsName=options.active),$target.toggleClass(clsName),$.isFunction(fn)&&fn($this,$target,clsName)}),$(this)},$.fn.checkAll=function(){var that=$(this);that.on("click",function(){var isChecked=$(this).is(":checked"),target=$(that.data("checkall"));target.prop("checked",isChecked)})}}(jQuery),window.console=window.console||{log:function(){}},function($){var bootstrap=function(){$("[data-checkall]").checkAll()};$(bootstrap)}(jQuery);var successModalLayer=function($){return function(config){var id=config.id?config.id:"#j-modal-status";$(id).modalLayer({icon:"success",title:config.title||"",content:config.content||"",buttons:[{text:"确认",ok:function(){config&&"string"==typeof config.link&&(location.href=config.link),config&&"function"==typeof config.callback&&config.callback()}}]})}}(jQuery),confirmModalLayer=function($){return function(config){var id=config.id?config.id:"#confirmModalLayer";$(id).modalLayer({icon:"info",title:config.title||"",content:config.content||"",buttons:[{text:"确定",ok:config.callback},{text:"取消",style:"btn secondary fn-ml-10"}]})}}(jQuery),alertModalLayer=function($){return function(config){var id=config.id?config.id:"#alertModalLayer";$(id).modalLayer({icon:config.icon||"info",title:config.title||"",content:config.content||""})}}(jQuery),closeModalLayer=function($){return function(id,fn){$(id).modal("hide").on("hide.ui.modal",function(){$(this).remove(),"function"==typeof fn&&fn()})}}(jQuery),detectBrowser=function(){function _testExternal(reg,type){var external=win.external||{};for(var i in external)if(reg.test(type?external[i]:i))return!0;return!1}function _getChromiumType(){if(isIe||"undefined"!=typeof win.scrollMaxX||REG_APPLE.test(nav.vendor||""))return"";var _track="track"in document.createElement("track"),webstoreKeysLength=win.chrome&&win.chrome.webstore?Object.keys(win.chrome.webstore).length:0;return _testExternal(/^sogou/i,0)?"sogou":_testExternal(/^liebao/i,0)?"liebao":win.clientInformation&&win.clientInformation.permissions?"chrome":_track?webstoreKeysLength>1?"360ee":"360se":""}function _getIeVersion(){for(var v=3,p=document.createElement("p"),all=p.getElementsByTagName("i");p.innerHTML="<!--[if gt IE "+ ++v+"]><i></i><![endif]-->",all[0];);return v>4?v:0}function Browser360EE(){var _={GetRunPath:function(){try{var path=external.GetRunPath(external.GetSID(window));return path.toLowerCase()}catch(e){return""}},Is360Chrome:function(){return this.GetRunPath().indexOf("360chrome.exe")>-1},is360chrome:function(){var _is360chrome=!1;try{_is360chrome="undefined"!=typeof chrome&&"undefined"!=typeof chrome.webstorePrivate&&"undefined"!=typeof chrome.webstorePrivate.beginInstallWithManifest3||navigator.userAgent.toLowerCase().indexOf("360ee")!=-1}catch(e){}return _is360chrome||this.Is360Chrome()}};return _.is360chrome()}var win=window,nav=win.navigator,ua=nav.userAgent,doc=win.document,ieAX=win.ActiveXObject,ieMode=doc.documentMode,REG_APPLE=/^Apple/,ieVer=_getIeVersion()||ieMode||0,isIe=ieAX||ieMode,chromiumType=_getChromiumType(),exports={isIE:function(){return!!ieVer}(),ieVersion:function(){return ieVer}(),isChrome:function(){return"chrome"===chromiumType}(),is360se:function(){return"360se"===chromiumType}(),is360ee:function(){return"360ee"===chromiumType||Browser360EE()}(),isLiebao:function(){return"liebao"===chromiumType||ua.indexOf("LBBROWSER")>-1}(),isSogou:function(){return"sogou"===chromiumType}(),isQQ:function(){return"qq"===chromiumType}()};return exports}();
 
 function guid() {
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	        return v.toString(16);
	    });
	}
 /*
  *功能： 模拟form表单的提交
  *参数： URL 跳转地址 PARAMTERS 参数
  */
  function Post(URL, PARAMTERS) {
      //创建form表单
      var temp_form = document.createElement("form");
      temp_form.action = URL;
      //如需打开新窗口，form的target属性要设置为'_blank'
      //temp_form.target = "_blank";
      temp_form.method = "post";
      temp_form.style.display = "none";
      //添加参数
      for (var item in PARAMTERS) {
          var opt = document.createElement("textarea");
          opt.name = PARAMTERS[item].name;
          opt.value = PARAMTERS[item].value;
          temp_form.appendChild(opt);
      }
      document.body.appendChild(temp_form);
      //提交数据
      temp_form.submit();
  }
  
  
  function limitLength(charLength, title, obj) {//限制输入框字数 
	  var value = obj.value;
      var newvalue = value.replace(/[^\x00-\xff]/g, "**"); 
      var length = newvalue.length; 
  
      //当填写的字节数小于设置的字节数 
     if (length * 1 <=charLength * 1){ 
           return; 
     } 
     var limitDate = newvalue.substr(0, charLength); 
     var count = 0; 
     var limitvalue = ""; 
    for (var i = 0; i < limitDate.length; i++) { 
            var flat = limitDate.substr(i, 1); 
           if (flat == "*") { 
                 count++; 
           } 
    } 
    var size = 0; 
    var istar = newvalue.substr(charLength * 1 - 1, 1);//校验点是否为“×” 
   
   //if 基点是×; 判断在基点内有×为偶数还是奇数   
    if (count % 2 == 0) { 
             //当为偶数时 
           size = count / 2 + (charLength * 1 - count); 
           limitvalue = value.substr(0, size); 
   } else { 
           //当为奇数时 
           size = (count - 1) / 2 + (charLength * 1 - count); 
           limitvalue = value.substr(0, size); 
   } 
    
 
  alert(title + "最大输入" + charLength + "个数字或英文（相当于"+charLength /2+"个汉字）！");
  obj.value = limitvalue; 
  $(obj).focus();
  return; 
}