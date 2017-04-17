<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="../common.jsp"%>

<body>

	<button id="ddd">button</button>




	<script type="text/javascript">
		$("#ddd").click(function() {
			alert("dd");
			var dataUrl = "http://accountcmb.frontpay.cn/serviceapi/osService.do";
			$.ajax({
		        url: dataUrl,
		        dataType: 'json',
		        data: {"ticket" : "1384ed0621094bb5b4162b5b510938bfXptRLLZF"},
		        type: 'post',
		        xhrFields: {
		            withCredentials: true
		        },
		        crossDomain: true,
		        beforeSend: function (data) {
		  
		 
		        },
		        success: function (data) {
		       
		        },
		        complete: function (data) {
		         
		 
		        },
		        error: function (data) {
		           
		 
		        }
		    });
		});
		/* $("#ddd").click(function() {
			alert("dd");
			$.ajax({
				type : "get",
				url : "http://accountcmb.frontpay.cn/serviceapi/osService.do",
				data : {
					"ticket" : "16fa7ac333214de286bbb9455373a45d5uGkzQok"
				},
				dataType : "jsonp",
				jsonp : "callback", //传递给请求处理程序或页面的，标识jsonp回调函数名(一般为:callback).
				jsonpCallback : function() {
				}, //callback的function名称.
				success : function(msg) {
					alert("msg: " + msg);
				}
			});
		}); */

		/* 	$("#ddd").click(function() {
				alert("dd");
				$.ajax({
					type : "post",
					data : {
						"ticket" : "16fa7ac333214de286bbb9455373a45d5uGkzQok"
					},
					url : "${ctx}/osService.do",
					success : function(msg) {
						alert("msg: " + msg);
					}
				});
			}); */
	</script>

</body>
</html>
