$(function() {
	var swiper1 = new Swiper('.slider', {
		autoplay: {
		  delay: 3000,
			disableOnInteraction: false,
		 },
		centeredSlides: true,
		  pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
			type: 'inline',
			showCloseBtn: true,
			zoom: {
				enabled: true,
				duration: 300 
		}		
	});
	$(".gitems__item").each(function(i){
		$(this).find("a").attr("href", "#g1_" + i);
		$(this).find(".popup_descr").attr("id", "g1_" + i);
	});

});
