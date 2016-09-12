
// 滚动
function autoScroll(obj){
	var n=$(obj).find('li:first').height();
	$(obj).find('ul').animate({
		marginTop: -n,
		},
			1000, function() {
				/* stuff to do after animation is complete */
				$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
			});
}

// 主程序
$(function(){
	setInterval('autoScroll(".express")',3000)
})
