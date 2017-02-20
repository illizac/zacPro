$(function(){
	$.get("proList.json", function(data){
		var html = $("#categoryrow").html();
		$.each(data[0], function(i){			
			html += "<li><a href = " + data[0][i].href + ">" + data[0][i].name + "</ a></ li>";			
		})
		$("#categoryrow").html(html);


		html = "";
		$.each(data[1], function(i){
			var str = "";
			$.each(data[1][i].trumb, function(index){
				str += "<li><img src=" + data[1][i].trumb[index].imgUrl + "></li>";
			})
			html += "<li class='prolistli' id=" + data[1][i].id + "><a class='toScar'><i class='iconfont icon-gouwuchekong01'></i></a><div class='prolistimg'><a href='proMsg.html?id=" + data[1][i].id + "'><img src=" + data[1][i].firImgUrl + "></a></div><div class='protrumb'><ul>" + str + "</ul></div><p>" + data[1][i].name + "</p><p>" + data[1][i].price + "</p></li>";
		})
		$("#prolistbox").html(html);

		$(".protrumb").find("img").on("mouseover", function(){
			$(this).closest("ul").find("li").css("border-color", "#ebebeb");
			$(this).closest(".prolistli").find(".prolistimg img").attr("src", $(this).attr("src"));
			$(this).closest("li").css("border-color", "#F34A92");
		})


		$(".toScar").on("click", function(){
			var arr = [];
			if(!$.cookie("product")){
				var obj = {
					id: $(this).closest(".prolistli").attr("id"),
					num: 1
				}
				arr.push(obj);
				$.cookie("product", JSON.stringify(arr));
			}else{
				var isSame = false;
				arr = $.parseJSON($.cookie("product"));
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == $(this).closest(".prolistli").attr("id")){
						isSame = true;
						arr[i].num += 1;
					}
				}
				if(!isSame){
					var obj = {
						id: $(this).closest(".prolistli").attr("id"),
						num: 1
					}
					arr.push(obj);
					$.cookie("product", JSON.stringify(arr));
				}else{
					$.cookie("product", JSON.stringify(arr));
				}
			}
			allNum(arr);
		})
	})

})