$(".newShortCreditTab").click(function() {
	$(".newShortCreditTab").removeClass("active").eq($(this).index()).addClass("active");
	$(".newShortItem").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".longCreditTab").click(function() {
	$(".longCreditTab").removeClass("active").eq($(this).index()).addClass("active");
	$(".longCreditItem").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");