$(function(){
	$("#loginbtn").on("click", function(){
		if($.cookie("json")){
			var arr = $.parseJSON($.cookie("json"));
			var isYes = false;
			$.each(arr, function(i){
				if($("#loguser").val() == arr[i].username){
					if($("#logpass").val() == arr[i].password){
						$(location).attr('href', 'index.html');
					}else{
						alert("密码错误");
					}
					isYes = true;
				}
			})
			if (!isYes) {
				alert("该用户未注册");
			}
		}else{
			alert("请注册");
		}
	})
})