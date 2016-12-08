$(function() {
	//背景渐变
	var a = 0;
	timer = setInterval(function() {
			if(a == 0) {
				$("#imga").animate({
					"opacity": 0
				})
				$("#imgb").animate({
					"opacity": 1
				})
				a++;
			} else if(a != 0) {
				$("#imga").animate({
					"opacity": 1
				})
				$("#imgb").animate({
					"opacity": 0
				})
				a = 0;
			}
		}, 1800)
		//导航触碰变色
	$(".nav-ul li").on("mouseover", function() {
			$(this).css({
				"color": "yellow",
				"cursor": "pointer"
			})

		})
		//导航移除变色
	$(".nav-ul li").on("mouseout", function() {
			$(this).css("color", "")
		})
		//移入图片出现小图片
	$(".img").on("mouseenter", function() {
			$(this).parent().parent().children().eq(1).fadeIn();

		})
		//移除图片隐藏小图片
	$(".business-li").on("mouseleave", function() {
			$(this).children().eq(1).fadeOut();
			
		})
		//移入小图标360度旋转
	$(".Zhuan").on("mouseover", function() {
			$(this).css({
				"transform": "rotate(360deg)",
				"transition": "all 0.4s"
			})
		})
		//移除小图标
	$(".Zhuan").on("mouseout", function() {
		$(this).css({
			"transform": "rotate(0deg)",
			"transition": "all 0s"
		})
	})

var swiper1 = new Swiper('.e .swiper-container', {
        pagination: '.e .swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
    
        var swiper2 = new Swiper('.v .swiper-container', {
        pagination: '.v .swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2000,
        loop:true,
        autoplayDisableOnInteraction: false
    });

   $(".long").on("mouseover",function(){
   	$(".next1").fadeIn();
   })
      $(".long").on("mouseout",function(){
   	$(".next1").fadeOut();
   })
      
 var swiper3 = new Swiper('.S .swiper-container', {
        pagination: '.S .swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        loop:true,
        autoplayDisableOnInteraction: false
    });
//触碰执照变大
$("#zhi1").on("mouseover",function(){
	$("#zhizhao1").show();
})
$("#zhi2").on("mouseover",function(){
	$("#zhizhao2").show();
})
$("#zhi3").on("mouseover",function(){
	$("#zhizhao3").show();
})
//移除执照变小

$("#zhi1").on("mouseout",function(){
	$("#zhizhao1").hide();
})
$("#zhi2").on("mouseout",function(){
	$("#zhizhao2").hide();
})
$("#zhi3").on("mouseout",function(){
	$("#zhizhao3").hide();
})

  //	//点击小图片 切换
	$(".Zhuan").on("click",function(){

		$(".aaa").show();
		var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
  
	})
	$("#close").on("click",function(){
		$(".aaa").hide();
	})
	//回到顶部
	$(".ding").on("click",function(){
		$("html body").animate({scrollTop:0},200)
	})
	//滚轮事件
	$(document).scroll(function(){
		console.log("dfas")
	})
})