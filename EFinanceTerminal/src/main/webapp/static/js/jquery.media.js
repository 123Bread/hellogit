/*! financing_clearing_system v1.0.0
*  by [object Object]
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-11-14
*  Licensed under Apache-2.0
*/
 !function($){"undefined"!=typeof $.browser&&$.browser||($.browser={});var pluginList={flash:{activex:["ShockwaveFlash.ShockwaveFlash","ShockwaveFlash.ShockwaveFlash.3","ShockwaveFlash.ShockwaveFlash.4","ShockwaveFlash.ShockwaveFlash.5","ShockwaveFlash.ShockwaveFlash.6","ShockwaveFlash.ShockwaveFlash.7"],plugin:/flash/gim},sl:{activex:["AgControl.AgControl"],plugin:/silverlight/gim},pdf:{activex:["acroPDF.PDF.1","PDF.PdfCtrl.1","PDF.PdfCtrl.4","PDF.PdfCtrl.5","PDF.PdfCtrl.6"],plugin:/adobe\s?acrobat|Chrome PDF Viewer/gim},qtime:{activex:["QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","QuickTime.QuickTime.4"],plugin:/quicktime/gim},wmp:{activex:["WMPlayer.OCX","MediaPlayer.MediaPlayer.1"],plugin:/(windows\smedia)|(Microsoft)/gim},shk:{activex:["SWCtl.SWCtl","SWCt1.SWCt1.7","SWCt1.SWCt1.8","SWCt1.SWCt1.9","ShockwaveFlash.ShockwaveFlash.1"],plugin:/shockwave/gim},rp:{activex:["RealPlayer","rmocx.RealPlayer G2 Control.1"],plugin:/realplayer/gim}},isSupported=function(p){var UA=window.navigator.userAgent;if(window.ActiveXObject||/MSIE|Trident/g.test(UA)){$.browser[p]=!1;for(var i=0;i<pluginList[p].activex.length;i++)try{new ActiveXObject(pluginList[p].activex[i]),$.browser[p]=!0}catch(e){}}else $.each(navigator.plugins,function(){return this.name.match(pluginList[p].plugin)?($.browser[p]=!0,!1):void($.browser[p]=!1)})};$.each(pluginList,function(i,n){isSupported(i)})}(jQuery),function($){"use strict";function isFirefoxWMPPluginInstalled(){for(var plugs=navigator.plugins||[],i=0;i<plugs.length;i++){var plugin=plugs[i];if("np-mswmp.dll"==plugin.filename)return!0}return!1}function getTypesRegExp(){var types="";for(var player in $.fn.media.defaults.players)types.length&&(types+=","),types+=$.fn.media.defaults.players[player].types;return new RegExp("\\.("+types.replace(/,/gi,"|")+")\\b")}function getGenerator(player){return function(el,options){return generate(el,options,player)}}function isDigit(c){return"0123456789".indexOf(c)>-1}function getSettings(el,options){options=options||{};var a,n,$el=$(el),cls=el.className||"",meta=$.metadata?$el.metadata():$.meta?$el.data():{};meta=meta||{};var w=meta.width||parseInt((cls.match(/\bw:(\d+)/)||[])[1]||0,10)||parseInt((cls.match(/\bwidth:(\d+)/)||[])[1]||0,10),h=meta.height||parseInt((cls.match(/\bh:(\d+)/)||[])[1]||0,10)||parseInt((cls.match(/\bheight:(\d+)/)||[])[1]||0,10);w&&(meta.width=w),h&&(meta.height=h),cls&&(meta.cls=cls);for(var dataName="data-",i=0;i<el.attributes.length;i++){a=el.attributes[i],n=$.trim(a.name);var index=n.indexOf(dataName);0===index&&(n=n.substring(dataName.length),meta[n]=a.value)}a=$.fn.media.defaults;var b=options,c=meta,p={params:{bgColor:options.bgColor||$.fn.media.defaults.bgColor}},opts=$.extend({},a,b,c);return $.each(["attrs","params","flashvars","silverlight"],function(i,o){opts[o]=$.extend({},p[o]||{},a[o]||{},b[o]||{},c[o]||{})}),"undefined"==typeof opts.caption&&(opts.caption=$el.text()),opts.src=opts.src||$el.attr("href")||$el.attr("src")||"unknown",opts}function generate(el,opts,player){var a,key,v,$el=$(el),o=$.fn.media.defaults.players[player];if("iframe"==player)o=$('<iframe width="'+opts.width+'" height="'+opts.height+'" >'),o.attr("src",opts.src),o.css({backgroundColor:o.bgColor,overflow:"hidden"}).attr({scrolling:"no"});else if("img"==player)o=$("<img>"),o.attr("src",opts.src),opts.width&&o.attr("width",opts.width),opts.height&&o.attr("height",opts.height),o.css("backgroundColor",o.bgColor);else if(lameIE){a=['<object width="'+opts.width+'" height="'+opts.height+'" '];for(key in opts.attrs)a.push(key+'="'+opts.attrs[key]+'" ');for(key in o.ieAttrs||{})v=o.ieAttrs[key],"codebase"==key&&"https:"==window.location.protocol&&(v=v.replace("http","https")),a.push(key+'="'+v+'" ');a.push("></object>");var p=['<param name="'+(o.oUrl||"src")+'" value="'+opts.src+'">'];for(key in opts.params)p.push('<param name="'+key+'" value="'+opts.params[key]+'">');o=document.createElement(a.join(""));for(var i=0;i<p.length;i++)o.appendChild(document.createElement(p[i]))}else if(opts.standards){if(a=['<object type="'+o.mimetype+'" width="'+opts.width+'" height="'+opts.height+'"'],opts.src&&a.push(' data="'+opts.src+'" '),msie)for(key in o.ieAttrs||{})v=o.ieAttrs[key],"codebase"==key&&"https:"==window.location.protocol&&(v=v.replace("http","https")),a.push(key+'="'+v+'" ');a.push(">"),a.push('<param name="'+(o.oUrl||"src")+'" value="'+opts.src+'">');for(key in opts.params)"wmode"==key&&"flash"!=player||a.push('<param name="'+key+'" value="'+opts.params[key]+'">');a.push("<div><p><strong>"+o.title+" Required</strong></p><p>"+o.title+' is required to view this media. <a href="'+o.pluginspage+'">Download Here</a>.</p></div>'),a.push("</object>")}else{a=['<embed width="'+opts.width+'" height="'+opts.height+'" style="display:block"'],opts.src&&a.push(' src="'+opts.src+'" ');for(key in opts.attrs)a.push(key+'="'+opts.attrs[key]+'" ');for(key in o.eAttrs||{})a.push(key+'="'+o.eAttrs[key]+'" ');for(key in opts.params)"wmode"==key&&"flash"!=player||a.push(key+'="'+opts.params[key]+'" ');a.push("></embed>")}var id=el.id?' id="'+el.id+'"':"",cls=opts.cls?' class="'+opts.cls+'"':"",$div=$("<div"+id+cls+">");return $el.after($div).remove(),lameIE||"iframe"==player||"img"==player?$div.append(o):$div.html(a.join("")),opts.caption&&$("<div>").appendTo($div).html(opts.caption),$div}var mode=document.documentMode||0,msie=/MSIE/.test(navigator.userAgent),lameIE=msie&&(/MSIE (6|7|8)\.0/.test(navigator.userAgent)||mode<9);$.fn.media=function(options,f1,f2){return"undo"==options?this.each(function(){var $this=$(this),html=$this.data("media.origHTML");html&&$this.replaceWith(html)}):this.each(function(){"function"==typeof options&&(f2=f1,f1=options,options={});var o=getSettings(this,options);"function"==typeof f1&&f1(this,o);var fn,r=getTypesRegExp(),m=r.exec(o.src.toLowerCase())||[""];o.type?m[0]=o.type:m.shift();for(var i=0;i<m.length;i++)if(fn=m[i].toLowerCase(),isDigit(fn[0])&&(fn="fn"+fn),$.fn.media[fn]){var player=$.fn.media[fn+"_player"];if(o.params||(o.params={}),player){var num="autostart"==player.autoplayAttr;o.params[player.autoplayAttr||"autoplay"]=num?o.autoplay?1:0:!!o.autoplay}var $div=$.fn.media[fn](this,o);if($div.css("backgroundColor",o.bgColor).width(o.width),o.canUndo){var $temp=$("<div></div>").append(this);$div.data("media.origHTML",$temp.html())}"function"==typeof f2&&f2(this,$div[0],o,player.name);break}})},$.fn.media.mapFormat=function(format,player){format&&player&&$.fn.media.defaults.players[player]&&(format=format.toLowerCase(),isDigit(format[0])&&(format="fn"+format),$.fn.media[format]=$.fn.media[player],$.fn.media[format+"_player"]=$.fn.media.defaults.players[player])},$.fn.media.defaults={standards:!0,canUndo:!0,width:400,height:400,autoplay:0,bgColor:"#ffffff",params:{wmode:"transparent"},attrs:{},flvKeyName:"file",flashvars:{},flashVersion:"7",expressInstaller:null,flvPlayer:"mediaplayer.swf",mp3Player:"mediaplayer.swf",silverlight:{inplaceInstallPrompt:"true",isWindowless:"true",framerate:"24",version:"0.9",onError:null,onLoad:null,initParams:null,userContext:null}},$.fn.media.defaults.players={flash:{name:"flash",title:"Flash",types:"flv,mp3,swf",mimetype:"application/x-shockwave-flash",pluginspage:"http://www.adobe.com/go/getflashplayer",ieAttrs:{classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",type:"application/x-oleobject",codebase:"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+$.fn.media.defaults.flashVersion}},quicktime:{name:"quicktime",title:"QuickTime",mimetype:"video/quicktime",pluginspage:"http://www.apple.com/quicktime/download/",types:"aif,aiff,aac,au,bmp,gsm,mov,mid,midi,mpg,mpeg,mp4,m4a,psd,qt,qtif,qif,qti,snd,tif,tiff,wav,3g2,3gp",ieAttrs:{classid:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",codebase:"http://www.apple.com/qtactivex/qtplugin.cab"}},realplayer:{name:"real",title:"RealPlayer",types:"ra,ram,rm,rpm,rv,smi,smil",mimetype:"audio/x-pn-realaudio-plugin",pluginspage:"http://www.real.com/player/",autoplayAttr:"autostart",ieAttrs:{classid:"clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA"}},winmedia:{name:"winmedia",title:"Windows Media",types:"asx,asf,avi,wma,wmv",mimetype:isFirefoxWMPPluginInstalled()?"application/x-ms-wmp":"application/x-mplayer2",pluginspage:"http://www.microsoft.com/Windows/MediaPlayer/",autoplayAttr:"autostart",oUrl:"url",ieAttrs:{classid:"clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6",type:"application/x-oleobject"}},img:{name:"img",title:"Image",types:"gif,png,jpg"},iframe:{name:"iframe",types:"html,pdf"},silverlight:{name:"silverlight",types:"xaml"}};var counter=1;for(var player in $.fn.media.defaults.players){var types=$.fn.media.defaults.players[player].types;$.each(types.split(","),function(i,o){isDigit(o[0])&&(o="fn"+o),$.fn.media[o]=$.fn.media[player]=getGenerator(player),$.fn.media[o+"_player"]=$.fn.media.defaults.players[player]})}$.fn.media.swf=function(el,opts){var f,p;if(!window.SWFObject&&!window.swfobject){if(opts.flashvars){var a=[];for(f in opts.flashvars)a.push(f+"="+opts.flashvars[f]);opts.params||(opts.params={}),opts.params.flashvars=a.join("&")}return generate(el,opts,"flash")}var id=el.id?' id="'+el.id+'"':"",cls=opts.cls?' class="'+opts.cls+'"':"",$div=$("<div"+id+cls+">");if(window.swfobject)$(el).after($div).appendTo($div),el.id||(el.id="movie_player_"+counter++),window.swfobject.embedSWF(opts.src,el.id,opts.width,opts.height,opts.flashVersion,opts.expressInstaller,opts.flashvars,opts.params,opts.attrs);else{$(el).after($div).remove();var so=new SWFObject(opts.src,"movie_player_"+counter++,opts.width,opts.height,opts.flashVersion,opts.bgColor);opts.expressInstaller&&so.useExpressInstall(opts.expressInstaller);for(p in opts.params)"bgColor"!=p&&so.addParam(p,opts.params[p]);for(f in opts.flashvars)so.addVariable(f,opts.flashvars[f]);so.write($div[0])}return opts.caption&&$("<div>").appendTo($div).html(opts.caption),$div},$.fn.media.flv=$.fn.media.mp3=function(el,opts){var src=opts.src,player=/\.mp3\b/i.test(src)?opts.mp3Player:opts.flvPlayer,key=opts.flvKeyName;src=encodeURIComponent(src),opts.src=player,opts.src=opts.src+"?"+key+"="+src;var srcObj={};return srcObj[key]=src,opts.flashvars=$.extend({},srcObj,opts.flashvars),$.fn.media.swf(el,opts)},$.fn.media.xaml=function(el,opts){if(!window.Sys||!window.Sys.Silverlight){if($.fn.media.xaml.warning)return;return $.fn.media.xaml.warning=1,void alert("You must include the Silverlight.js script.")}var props={width:opts.width,height:opts.height,background:opts.bgColor,inplaceInstallPrompt:opts.silverlight.inplaceInstallPrompt,isWindowless:opts.silverlight.isWindowless,framerate:opts.silverlight.framerate,version:opts.silverlight.version},events={onError:opts.silverlight.onError,onLoad:opts.silverlight.onLoad},id1=el.id?' id="'+el.id+'"':"",id2=opts.id||"AG"+counter++,cls=opts.cls?' class="'+opts.cls+'"':"",$div=$("<div"+id1+cls+">");return $(el).after($div).remove(),Sys.Silverlight.createObjectEx({source:opts.src,initParams:opts.silverlight.initParams,userContext:opts.silverlight.userContext,id:id2,parentElement:$div[0],properties:props,events:events}),opts.caption&&$("<div>").appendTo($div).html(opts.caption),$div}}(jQuery);