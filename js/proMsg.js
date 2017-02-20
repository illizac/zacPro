$(function(){
	var str = window.location.href;
	var last = str.lastIndexOf("=");
	var id = parseInt(str.substring(last + 1));

	$.get("proList.json", function(data){
		var index = 0;
		for(var i in data[1]){
			if(data[1][i].id == id){
				index = parseInt(i);
			}
		}
		$("#msgthis").html(data[1][index].name);
		$("title").html(data[1][index].name + "_美图官网");

		var typehtml = "";
		$.each(data[1][index].msg.type, function(i){
			typehtml += "<li><a><img src=" + data[1][index].msg.type[i].imgUrl + "></a></li>"
		})
		var trumbhtml = "";
		$.each(data[1][index].msg.minimg, function(i){
			trumbhtml += "<li><a><img src=" + data[1][index].msg.minimg[i].leftimg + " class=" + i + "></a></li>";
		})
		var html = "";
		html = "<div id='prodetail'><h1 id='meta_title'>" + data[1][index].name + "</h1><p id='meta_desc'></p><div id='meta_price'><span>价格</span><span>" + data[1][index].price + "</span></div><div id='protypes'><span>型号</span><ul>" + typehtml + "</ul></div><div id='meta_num'><span>数量</span><div id='changenum'><span id='numdown'><i class='iconfont icon-jianhao'></i></span><span id='finalnum'>1</span><span id='numup'><i class='iconfont icon-jiahao'></i></span></div></div><ul id='meta_extra'><li><i></i>正品保障</li><li><i></i>全国联保</li><li><i></i>无忧退换货</li></ul><div id='meta_action'><a id='msgscbtn'>加入购物车</a><a>立即购买</a></div></div><div id='protrumb'><img src='images/promsg0" + (index + 1) + "01.jpg' id='msgmini'><ul id='trumb-nav'>" + trumbhtml + "</ul><div id='procloseimg'><img src=''></div></div>";
		$("#msgpro").html(html);

		if(data[1][index].msg.trait){
			$("#meta_desc").html(data[1][index].msg.trait);
		}

		$("#trumb-nav").find("img").mouseover(function(){
			$("#trumb-nav").find("li").attr("class", "");
			$(this).closest("li").attr("class", "trumbact");
			$("#msgmini").attr("src", data[1][index].msg.minimg[$(this).attr("class")].imgUrl);
		})
		changenum($("#numup"), 1, 0);
		changenum($("#numdown"), -1, 1);


		$("#msgscbtn").click(function(){
			var arr = [];
			if(!$.cookie("product")){
				var obj = {
					id: id,
					num: parseInt($("#finalnum").html())
				}
				arr.push(obj);
				$.cookie("product", JSON.stringify(arr));
			}else{
				var isSame = false;
				arr = $.parseJSON($.cookie("product"));
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						isSame = true;
						arr[i].num += parseInt($("#finalnum").html());
					}
				}
				if(!isSame){
					var obj = {
						id: id,
						num: parseInt($("#finalnum").html())
					}
					arr.push(obj);
					$.cookie("product", JSON.stringify(arr));
				}else{
					$.cookie("product", JSON.stringify(arr));
				}
			}
			allNum(arr);
		})

		$("#msgmini").hover(function(){
			$("#procloseimg").find("img").attr("src", $(this).attr("src"));
			$("#procloseimg").css("display", "block");
			$("#procloseimg").animate({
				opacity: 1
			}, 100, "linear");
		},function(){
			$("#procloseimg").animate({
				opacity: 0
			}, 100, "linear", function(){
				$("#procloseimg").css("display", "none");
			})
		})

		$("#msgmini").on("mousemove", function(e){
			// $("#procloseimg").find("img").attr("src", $(this).attr("src"));
			var mouseX = e.pageX - $("#msgmini").offset().left;
			var mouseY = e.pageY - $("#msgmini").offset().top;
			var fileft = -mouseX * 800 / 480 + 240;
			if(fileft > 0){fileft = 0;}else if(fileft < -320){fileft = -320;}
			var fitop = -mouseY * 800 / 480 + 240;
			if(fitop > 0){fitop = 0;}else if(fitop < -320){fitop = -320;}
			console.log(fileft + "+" + fitop);
			$("#procloseimg").find("img").css("left", fileft);
			$("#procloseimg").find("img").css("top", fitop);
		})

	})
})

function changenum(node, change, num){
	node.click(function(){
		if($("#finalnum").html() > num){
			$("#finalnum").html(parseInt($("#finalnum").html()) + 1 * change);
		}		
	})
}