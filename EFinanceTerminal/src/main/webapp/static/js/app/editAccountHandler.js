/*! financing_clearing_system v1.0.0
*  by [object Object]
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-11-14
*  Licensed under Apache-2.0
*/
 function myCallback(data){alert(data),hideEditModal()}function hideEditModal(){$("#edit-modal").modal("hide")}$(function(){$(document).on("click",'[data-toggle="removeItem"]',function(e){e.preventDefault();$(this).attr("href");confirmModalLayer({title:"确定删除该记录?",callback:function(){location.reload()}})}),$(document).on("click",'[data-toggle="editItem"]',function(e){e.preventDefault();var url=$(this).attr("href");$("#edit-modal").iframeModal({title:"编辑账户信息",url:url+"&callback=myCallback"})})});