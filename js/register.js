$(function(){
	var userYes = false;
	$("#user").find("input").on("blur", function(){
		userYes = $.proxy(test, $(this))(userYes, /^[a-zA-Z_]\w{5,17}$/, $("#user").find(".regtip"));
	})

	var passYes = false;
	$("#pass").find("input").on("blur", function(){
		passYes = $.proxy(test, $(this))(passYes, /^.{6,16}$/, $("#pass").find(".regtip"));
	}) 

	var repassYes = false;
	$("#repass").find("input").on("blur", function(){
		if(passYes){
			if($(this).val() == $("#pass").find("input").val()){
				repassYes = true;
				changetipY($("#repass").find(".regtip"));
			}else{
				changetipF($("#repass").find(".regtip"));
			}
		}else{
			changetipF($("#repass").find(".regtip"));
		}
	})

	var phoneYes = false;
	$("#phone").find("input").on("blur", function(){
		phoneYes = $.proxy(test, $(this))(phoneYes, /^1\d{10}$/, $("#phone").find(".regtip"));
	})

	var emailYes = false;
	$("#email").find("input").on("blur", function(){
		emailYes = $.proxy(test, $(this))(emailYes, /^\w+@\w+(\.[a-z]+)$/, $("#email").find(".regtip"));
	})

	$("#createcode").on("click", function(){				
		$(this).html(randomNum());
	})

	var codeYes = false;
	$("#regcode").on("blur", function(){
		if($(this).val() != "获取验证码" && $(this).val() == $("#createcode").html()){
			changetipY($("#code").find(".regtip"));
			codeYes = true;
		}else{
			changetipF($("#code").find(".regtip"));
			$("#createcode").html(randomNum());
		}
	})

	var arr = [];
	if($.cookie("json")){
		arr = $.parseJSON($.cookie("json"));
	}
	$("#regbtn").on("click", function(){
		if(userYes && repassYes && phoneYes && emailYes && codeYes && $("#regc").attr("checked")){
			$.cookie("username", $("#user").find("input").val());
			$.cookie("password", $("#pass").find("input").val());
			var obj = {
				username: $("#user").find("input").val(),
				password: $("#pass").find("input").val()
			}
			arr.push(obj);
			$.cookie("json", JSON.stringify(arr));
			$(location).attr('href', 'login.html');
		}else{
			alert("信息填写错误");
		}
	})

})


function randomNum(){
	var str = "";
	while(str.length < 4){
		var ranum = String.fromCharCode(Math.round(Math.random() * 127));
		if(ranum >= "0" && ranum <= "9" || ranum >= "a" && ranum <= "z" || ranum >= "A" && ranum <= "Z"){
			str += ranum;
		}
	}
	return str;
}

function changetipY(node){
	node.html("<i class = 'iconfont icon-iconfontduihao'></ i>");
	node.css("color", "#47bf26");
}
function changetipF(node){
	node.html("<i class = 'iconfont icon-cha'></ i>");
	node.css("color", "#fc4100");
}



function test(para, pattern, tipnode){
	var pattern = pattern;
	if(!pattern.test($(this).val())){
		changetipF(tipnode);
		para = false;
	}else{
		para = true;
		changetipY(tipnode);
	}
	return para;
}