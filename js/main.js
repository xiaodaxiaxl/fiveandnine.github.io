
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

// function tobottom()
// 		{
// 			// $('html,body').animate({scrollTop:$('#collapse1').offset().top}, 800);
// 			// alert($('#collapse1').offset().top);	
// 			$('html,body').animate({scrollTop:0, 800);

// 		}
	
// 主程序
$(function(){
	setInterval('autoScroll(".express")',3000);
	// $('.detail-link').click(tobottom());
	//$('.detail-link').click(function(){$('html,body').animate({scrollTop:$('.copyright').offset().top}, 800);});
	$('.detail-link').click(function(){$('html,body').animate({scrollTop: '2500px'}, 800);});
})


