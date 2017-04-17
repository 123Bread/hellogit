<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="../common.jsp"%>
<body>

	<button id="ddd">button</button>




	<script type="text/javascript">
		$("#ddd").click(function() {
			alert("dd");
			$.ajax({
				type : "post",
				data : {
					"ticket" : "16fa7ac333214de286bbb9455373a45d5uGkzQok"
				},
				url : " http://accountcmb.frontpay.cn/serviceapi/osService.do"
			});
		});
	</script>

</body>
</html>
