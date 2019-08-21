// 모바일메뉴영역 열기
$(".gnb_hambuger").click(function(){
	$(".gnb_side").stop().fadeIn(500);
	$(".gnb_list").stop().animate({right:"-90px"},500);
	return false;
});

// 모바일메뉴영역 닫기
$(".gnb_x").click(function(){
	$(".gnb_side").stop().fadeOut(500);
	$(".gnb_list").stop().animate({right:"-100px"},500);
	return false;
});

// 모바일메뉴-뎁스1메뉴 클릭했을 때
$(".gnb_list .gnb_menu").click(function(){
	// 현재 클릭한 대상의 형제관계로 사용되는 .sub영역 보이기/안보이기
	$(this).siblings(".intro_sub").stop().slideToggle(600);
	// 현재 클릭한 대상의 부모태그인 .d1에 on클래스 추가/삭제하기
	$(this).parent(".d1g1").toggleClass("on");
	// 클릭되는 영역의 a태그 무효화
	return false;
});

// 모바일메뉴-뎁스2메뉴 클릭했을 때
$(".intro_sub .sub_add").click(function(){
	$(this).siblings("dd").stop().slideToggle(600);
	$(this).toggleClass("on");
	return false;
});

//웹용 상단 메뉴바
$(".gnb_w-list .m1>a").mouseover(function()
	{
		var i = $(this).attr("data-index");
		$(".gnb_w-mi-con").hide();
    	$(".gnb_w-mi-con").eq(i).show();
    	$(".gnb_w-high").slideDown(400);
    });

//메인쪽으로 마우스가 가면 상단메뉴가 사라짐
$(".section").mouseover(function() 
    {
    	$(".gnb_w-high").slideUp(400);
    });

/*$(".m_mainwrap").mouseover(function() 
    {
    	$(".gnb_w-high").slideUp(400);
    });*/

//사업분야에 BUSINESS, PRODUCT, BSERVICE 눌렀을때 파란선 나오게
$(".sub_addwrap > dl").hover(function(){
	$(".picline").slideUp(200);
	$(this).children(".picline").slideDown(200);
	$(this).children(".pic").hide();
	$(this).children('.change').fadeIn(200);
}, function(){
	$(".picline").slideUp(200);
	$(this).children(".change").hide();
	$(this).children('.pic').fadeIn(200);
});
$(".m_mainwrap, .m_w-gnbwrap").mouseover(function() 
    {
    	$(".picline").slideUp(400);
    });

//픽토그램 이미지 변경
$(".sub_addwrap2 > dl").hover(function()
	{
		$(this).children(".pic").hide();
		$(this).children('.change').fadeIn(200);
	}, function(){
		$(this).children(".change").hide();
		$(this).children('.pic').fadeIn(200);
	});

$(".m_mainwrap, .m_w-gnbwrap").mouseover(function() 
    {
    	$(".change").hide();
    	$(".pic").show();
    });