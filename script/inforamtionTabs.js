$(".inforationTab").click(function() {
	$(".inforationTab").removeClass("active").eq($(this).index()).addClass("active");
	$(".inforationItem").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");