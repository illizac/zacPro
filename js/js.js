$(function(){
	$.get("data.json", function(data){

		$.each(data[0], function(index){
			var navLi = $("<li></ li>");
			var navA = $("<a></a>");
			$(navA).html(data[0][index].name);
			$(navA).attr("href", data[0][index].href)
			$(navLi).append(navA);
			$("#headul").append(navLi);


			
			if(data[0][index].subdata){
				var pinkSpan = $("<span></ span>");
				$(pinkSpan).attr("class", "pinkspan");
				$(navLi).append(pinkSpan);
				$(pinkSpan).css("width", $(navA).css("width"));
				$(navLi).mouseenter(function(){
					$("#headsubul").html("");				
					$("#headsub").stop(true);
					$.each(data[0][index].subdata, function(i){						
						var subLi = $("<li></ li>");
						var subA = $("<a></ a>");
						$(subA).attr("href", data[0][index].subdata[i].href);
						$(subA).html(data[0][index].subdata[i].name);
						var subImg = $("<img />");
						$(subImg).attr("src", data[0][index].subdata[i].imgUrl);
						$(subA).prepend(subImg);
						$(subLi).append(subA);
						$("#headsubul").append(subLi);
					})
					$("#headsub").css("display", "block");	
					$("#headsub").delay(500).animate({
						height: 200
					}, 200, "linear");				
				});
				$(navLi).mouseleave(function(){
					$("#headsub").stop(true);
					$("#headsub").delay(500).animate({
						height: 0
					}, 200, "linear", function(){						
						$("#headsub").css("display", "none");						
					});					
				});
			}
		})

		$.each(data[1], function(index){
			var guideDl = $("<dl></ dl>");
			var guideDt = $("<dt></ dt>");
			$(guideDt).html(data[1][index].title);
			$(guideDl).append(guideDt);
			$.each(data[1][index].data, function(guiIndex){
				var guiDd = $("<dd></ dd>");
				var guiDdA = $("<a></ a>");
				$(guiDdA).html(data[1][index].data[guiIndex].name);
				$(guiDdA).attr("href", data[1][index].data[guiIndex].href);
				$(guiDd).append(guiDdA);
				$(guideDl).append(guiDd);
			})			
			$("#guide-right").before(guideDl);
		})

		createList(data[2], "#partnermid");
		createList(data[3], "#copymidul");

		$.each(data[4], function(index){
			var banavLi = $("<li></ li>");
			var banavH3 = $("<h3></ h3>");
			var banH3A = $("<a></ a>");
			$(banH3A).html(data[4][index].title);
			$(banH3A).attr("href", data[4][index].href);
			$(banavH3).append(banH3A);
			$(banavLi).append(banavH3);
			if (data[4][index].data) {
				$.each(data[4][index].data, function(i){
					var banavA = $("<a></ a>");
					$(banavA).html(data[4][index].data[i].name);
					$(banavA).attr("href", data[4][index].data[i].href);
					$(banavLi).append(banavA);
				})
			}		


			$("#banav").append(banavLi);
			if (data[4][index].subdata) {
				$(banavLi).mouseenter(function(){
					$("#bansubul").html("");
					$("#bansub").css("display", "block");					
					$("#bansub").stop();
					$.each(data[4][index].subdata, function(i){
						var subLi = $("<li></ li>");
						var subA = $("<a></ a>");
						$(subA).attr("href", data[4][index].subdata[i].href);
						var subImg = $("<img />");
						$(subImg).attr("src", data[4][index].subdata[i].imgUrl);
						$(subA).append(subImg);
						var subSpan = $("<span></ span>");
						$(subSpan).html(data[4][index].subdata[i].name);
						$(subA).append(subSpan);
						$(subLi).append(subA);
						$("#bansubul").append(subLi);
					})
					$("#bansub").animate({
						opacity: 1
					}, 200, "linear");
				})
				$(banavLi).mouseleave(function(){
					$("#bansub").stop();
					$("#bansub").animate({
						opacity: 0
					}, 200, "linear", function(){						
						$("#bansub").css("display", "none");						
					});
				});
			}
		})

		$.each(data[5], function(index){
			var banimgLi = $("<li></ li>");
			var banimgA = $("<a></ a>");
			$(banimgA).attr("href", data[5][index].href);
			var banImg = $("<img />");
			$(banImg).attr("src", data[5][index].imgUrl);
			$(banimgA).append(banImg);
			$(banimgLi).append(banimgA);
			$("#banimgul").append(banimgLi);
			var banindexLi = $("<li></ li>");
			var banindexA = $("<a></ a>");
			if(index == 0){
				$(banindexA).attr("class", "act");
			}
			$(banindexLi).append(banindexA);
			$("#banimgindex").append(banindexLi);
		})

		$.each(data[6], function(index){
			var maintopLi = $("<li></ li>");
			var maintopA = $("<a></ a>");
			$(maintopA).attr("href", data[6][index].href);
			var maintopImg = $("<img />");
			$(maintopImg).attr("src", data[6][index].imgUrl);
			$(maintopA).append(maintopImg);
			$(maintopLi).append(maintopA);
			$("#maintop").append(maintopLi);
		})


		$.each(data[7], function(index){
			var mainboxDiv = createMainTitle("#boxwrap", data[7][index]);

			var boxleftDiv = $("<div></ div>");
			$(boxleftDiv).attr("class", "boxleft");
			$.each(data[7][index].max, function(maxi){
				var maxA = $("<a></ a>");
				$(maxA).attr("href", data[7][index].max[maxi].href);
				var maxImg = $("<img />");
				$(maxImg).attr("src", data[7][index].max[maxi].imgUrl);
				$(maxA).append(maxImg);
				$(boxleftDiv).append(maxA);
			})			
			$(mainboxDiv).append(boxleftDiv);
			var boxrightUl = $("<ul></ ul>");
			$(boxrightUl).attr("class", "boxright");
			$.each(data[7][index].data, function(datai){
				var boxrightLi = $("<li></ li>");
				var boxrightA = $("<a></ a>");
				$(boxrightA).attr("href", data[7][index].data[datai].href);

				var boxrightImg = $("<img />");
				$(boxrightImg).attr("src", data[7][index].data[datai].imgUrl);
				$(boxrightA).append(boxrightImg);

				var boxrName = $("<span></ span>");
				$(boxrName).attr("class", "boxname");
				$(boxrName).html(data[7][index].data[datai].name);
				$(boxrightA).append(boxrName);

				var boxrTrait = $("<span></ span>");
				$(boxrTrait).attr("class", "boxtrait");
				$(boxrTrait).html(data[7][index].data[datai].trait);
				$(boxrightA).append(boxrTrait);

				var boxrPrice = $("<span></ span>");
				$(boxrPrice).attr("class", "boxprice");
				$(boxrPrice).html(data[7][index].data[datai].price);
				$(boxrightA).append(boxrPrice);

				$(boxrightLi).append(boxrightA);
				$(boxrightUl).append(boxrightLi);
			})
			$(mainboxDiv).append(boxrightUl);
		})


		var appObj = data[8];
		var appmainDiv = createMainTitle("#main", appObj);
		var cardAppBox = $("<div></ div>");
		$(cardAppBox).attr("id", "appwrap");
		$(appmainDiv).append(cardAppBox);
		var appleft = $("<a></ a>");
		$(appleft).attr("id", "appleft");
		var appLI = $("<i></ i>");
		$(appLI).attr("class", "iconfont icon-arrow-left");
		$(appleft).append(appLI);
		var appright = $("<a></ a>");
		$(appright).attr("id", "appright");
		var appRI = $("<i></ i>");
		$(appRI).attr("class", "iconfont icon-iconfontarrowright");
		$(appright).append(appRI);
		$(cardAppBox).append(appleft);
		$(cardAppBox).append(appright);
		var appmain = $("<div></ div>");
		$(appmain).attr("id", "appmain");
		$(appmain).appendTo(cardAppBox);
		var appUl = $("<ul></ ul>");
		$(appUl).css("width", data[8].data.length * 227);
		$(appmain).append(appUl);
		$.each(data[8].data,function(index){
			var appList = $("<li></ li>");
			var appListA = $("<a></ a>");
			$(appList).attr("href", data[8].data[index].href);
			var appListImg = $("<img></ img>");
			$(appListImg).attr("src", data[8].data[index].imgUrl);
			$(appListA).append(appListImg);
			var appFspan = $("<span></ span>");
			$(appFspan).html(data[8].data[index].name);
			$(appListA).append(appFspan);
			var appLspan = $("<span></ span>");
			$(appLspan).html(data[8].data[index].trait);
			$(appListA).append(appLspan);
			$(appList).append(appListA);
			$(appUl).append(appList);
		})

		appMove($(appleft), $(appUl), data[8].data.length);
		appMove($(appright), $(appUl), data[8].data.length);

		$.each(data[9], function(i){
			$("#top-left").find("li").each(function(index){
				var str = $("#top-left").find("li").eq(index).find("a").html();
				var end = str.indexOf("<") - 1;			
				if(end != -1){
					var str = $("#top-left").find("li").eq(index).find("a").html().substring(0, end);
				}				
				if(str == data[9][i].title){
					var topUl = $("<ul></ ul>");
					$(topUl).attr("class", "topload");
					$.each(data[9][i].data, function(loadi){
						var loadLi = $("<li></ li>");
						var loadA = $("<a></ a>");
						$(loadA).html(data[9][i].data[loadi].name);
						$(loadA).attr("href", data[9][i].data[loadi].href);
						$(loadLi).append(loadA);
						$(topUl).append(loadLi);
					})
					$("#top-left").find("li").eq(index).append(topUl);
					$("#top-left").find("li").eq(index).hover(function(){
						$(topUl).css("display", "block");
						$(topUl).animate({
							height: 34 * data[9][i].data.length + 30							
						}, 200, "linear");
					},function(){
						$(topUl).animate({
							height: 0
						}, 200, "linear", function(){
							$(topUl).css("display", "none");
						})
					})
				}
			})
		})


		
		var timer = (function(){
			var index = 0;
			$("#banimgindex").find("a").click(function(){
				var i = $(this).parent("li").index();
				clearInterval(timer);
				$("#banimgul").find("li").css("opacity", 0);
				$("#banimgul").find("li").css("z-index", 1);
				$("#banimgul").find("li").eq(i).animate({
					zIndex: 2,
					opacity: 1
				}, 400, "linear");
				$("#banimgindex").find("a").attr("class", "");
				$("#banimgindex").find("a").eq(i).attr("class", "act");
				index = i;
				timer = setInterval(function(){
					index++;
					ban(index, data);
				}, 10000);
			})
			return setInterval(function(){
				index++;
				ban(index, data);
			}, 10000);
		})();


		$("#sidetoolbar").css("top", $('html').scrollTop() + $(window).height() - 50 - 205);
		$(window).scroll(function(){
			if($('html').scrollTop() >= 500){
				$("#gototop").css("display", "block");
			}else{
				$("#gototop").css("display", "none");
			}
			$("#sidetoolbar").css("top", $('html').scrollTop() + $(window).height() - 50 - 205);
			
		})
		$("#gototop").click(function(){
			$('html').animate({scrollTop: 0}, 800, "linear");
		})

		if($.cookie("username")){
			$("#lilog").html("<a class = 'logafter'>" + $.cookie("username") + "</ a>");
		}

		$("#scLi").mouseenter(function(){
			$("#s_car").css("display", "block");
			$("#s_car").html("");
			if(!$.cookie("product") || $.cookie("product") == "[]"){
				$("#s_car").html("<div class='scnull'>购物车中还没有东西<a href='proList.html'>现在去挑选</a></div>");
				$("#s_car").animate({
					height: 144
				}, 200, "linear");
			}else{
				$.get("proList.json", function(data){
					var arr = $.parseJSON($.cookie("product"));
					var html = "";
					var scheight = 0;
					var allprice = 0;
					$.each(arr, function(i){
						var price = parseFloat(data[1][arr[i].id].price.substring(1)) * arr[i].num;
						html += "<div class='cartitem' id=" + i + "><a class='cartclose'><i class='iconfont icon-cha'></i></a><a class='cartleft'><img src=" + data[1][arr[i].id].firImgUrl + "></a><p class='catetrait'>" + data[1][arr[i].id].trait + "</p><p class='cartnum'> 数量: " + arr[i].num + "</p><p class='cartprice'>" + price + ".00</p></div>";
						scheight += 71;
						allprice += price;

					})
					html += "<div id='carfooter'><a id='checkoutbtn'>去购物车结算</a><p id='checkoutnum'>共" + $("#buynum").html() + "件商品</p><p id='checkoutprice'>" + allprice + ".00 元</p></div>";
					scheight += 65;
					$("#s_car").html(html);
					$("#s_car").animate({
						height: scheight
					}, 200, "linear");

					$(".cartclose").on("click", function(){
						var arr = $.parseJSON($.cookie("product"));
						arr.splice($(this).parents(".cartitem").attr("id"), 1);
						$.cookie("product", JSON.stringify(arr));
						$(this).parents(".cartitem").detach();
						allNum(arr);
					})
				})
			}		
		})

		$("#scLi").mouseleave(function(){
			$("#s_car").animate({
				height: 0
			}, 200, "linear", function(){
				$("#s_car").css("display", "none");
			})			
		})
});


	$("#headsub").hover(function(){
		$(this).stop(true);
		$(this).animate({
			height: 200
		}, 200, "linear");
	},function(){
		$(this).stop(true);
		$(this).delay(500).animate({
			height: 0
		}, 200, "linear", function(){						
			$(this).css("display", "none");						
		});
	})


	$("#bansub").hover(function(){
		$(this).stop(true);
		$(this).animate({
			opacity: 1
		}, 200, "linear");
	},function(){
		$(this).stop(true);
		$(this).animate({
			opacity: 0
		}, 200, "linear", function(){						
			$(this).css("display", "none");						
		});
	})

	allNum();
})


function allNum(){
	var num = 0;
	if($.cookie("product")){
		var arr = $.parseJSON($.cookie("product"));
		$.each(arr, function(i){
			num += parseInt(arr[i].num);
		});
		$("#buynum").html(num);
	}	
}


function appMove(name, parent, data){
	name.click((function(){
		var page = 0;
		var speed = 1;
		return function(){	
			parent.stop(true);			
			if(page < parseInt(data / 5)){
				speed *= -1;
				page++;
				parent.animate({
					left: 1120 * speed
				}, 500, "linear");
			}else{
				page = 0;
				speed *= -1;
				parent.animate({
					left: 0
				}, 500, "linear");
			}
		}			
	})());
}

function createMainTitle(id, data){
	var mainboxDiv = $("<div></div>");
	$(mainboxDiv).attr("class", "main-box");
	var boxH2 = $("<h2></ h2>");
	$(boxH2).attr("class", "boxtitle");
	$(boxH2).html(data.title);
	var boxH2A = $("<a></ a>");
	$(boxH2A).html("更多");
	$(boxH2A).attr("href", data.href);
	var boxH2AI = $("<i></ i>");
	$(boxH2AI).attr("class", "iconfont icon-arrowright");
	$(boxH2A).append(boxH2AI);
	$(boxH2).append(boxH2A);
	$(mainboxDiv).append(boxH2);
	$(id).append(mainboxDiv);
	return mainboxDiv;
}


function ban(index, data){
	$("#banimgul").find("li").css("opacity", 0);
	$("#banimgul").find("li").css("z-index", 1);
	$("#banimgul").find("li").eq(index % data[5].length).animate({
		zIndex: 2,
		opacity: 1
	}, 400, "linear");
	$("#banimgindex").find("a").attr("class", "");
	$("#banimgindex").find("a").eq(index % data[5].length).attr("class", "act");
}

function createList(list, id){
	$.each(list, function(i){
		var liname = $("<li></ li>");
		$(liname).attr("class", "linkitem");
		var aname = $("<a></ a>");
		$(aname).html(list[i].name);
		$(aname).attr("href", list[i].href);
		$(liname).append(aname);
		$(id).append(liname);
		if(i > 0){
			var linename = $("<li></ li>");
			$(linename).attr("class", "line");
			$(liname).before(linename);
		}
	})
}