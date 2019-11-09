$(function () { // wait for document ready


  
      var max = 2000; 
      $(window).scroll(function(){
    
        var scrollPX = $(this).scrollTop();
        if(  scrollPX < max ) {
          $(".motion_section").css({"opacity":  1 - (max - scrollPX) / max});
          $(".motion_section").css('transform', 'scale(' + ( 1 - (max - scrollPX) / max )+ ')');
        }else{  
          $(".motion_section").css({"opacity": 1 });
        }	
        

  });

  $(window).scroll(function(){
    $(".motion_section").sticky({ topSpacing: 100 });
  });


    var max02 = 4000;
    $(window).scroll(function(){
    var scrollPX02 = $(this).scrollTop();
      if (scrollPX02 < max02){
        $("#sidebar").addClass('motion_section');
      }else{
        $("#sidebar").removeClass('motion_section');  
        $("#sidebar").css({'opacity':'0','position':'relative'})
      }
  });



  // 가로슬라이드 화면

  var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  .to("#js-slideContainer", 1,   {x: "-16.7%"})	
  .to("#js-slideContainer", 1,   {x: "-33.4%"})	
  .to("#js-slideContainer", 1,   {x: "-50.1%"})	
  .to("#js-slideContainer", 1,   {x: "-66.8%"})	
  .to("#js-slideContainer", 1,   {x: "-82.5%"})		

  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    // triggerElement: "#js-wrapper02",
    triggerHook: "onLeave",
    duration: "500%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    .addTo(controller);
  
    $('.section_plan02_01').mouseover(function(){
        $('.section_plan02_02').css({'opacity':'0','transition':'1s'});
        $('.text_88').css({'opacity':'1','visibility':'visible'});
    });

     
    $('.section_plan02_01').mouseout(function(){
      $('.section_plan02_02').css({'opacity':'1','transition':'1s'});
      $('.text_88').css({'opacity':'0','visibility':'hidden'});
  });

  $('.section_plan02_02').mouseover(function(){
    $('.section_plan02_01').css({'opacity':'0','transition':'1s'});
    $('.text_67').css({'opacity':'1','visibility': 'visible'});
});

 
$('.section_plan02_02').mouseout(function(){
  $('.section_plan02_01').css({'opacity':'1','transition':'1s'});
  $('.text_67').css({'opacity':'0','visibility': 'hidden'});
});


$('.section_plan04').mouseover(function(){
  $('.section_plan04_03').css({'opacity':'1','transition':'1s'});
  $('.section_plan04_02').css({'opacity':'0',});
});


$('.section_plan04').mouseout(function(){
  $('.section_plan04_03').css({'opacity':'0','transition':'1s'});
  $('.section_plan04_02').css({'opacity':'1',});
});

// var $box1 = $('.purple_box').width(); 
// $('.purple_box').height($box1);
// console.log($box1);

$('.purple_box02').click(function(){
  $('.purple_box02').css({'opacity':'0','visibility': 'hidden','transition':'1s'});
  $('.purple_box').css({'opacity':'1','visibility': 'visible','transition':'1s'});
  $('.check_box1').css({'color':'white','transition':'1s'})

  $('.white_box').css({'opacity':'0','visibility': 'hidden','transition':'1s'});
  $('.white_box02').css({'opacity':'1','visibility': 'visible','transition':'1s'});
  $('.check_box2').css({'color':'#731AED','transition':'1s'})

  $('.check_text01').css({'opacity':'0','transition':'0.5s'})
  $('.check_text02').css({'opacity':'1','transition':'0.5s'})
});


$('.white_box02').click(function(){
  $('.white_box02').css({'opacity':'0','visibility': 'hidden','transition':'1s'});
  $('.white_box').css({'opacity':'1','visibility': 'visible','transition':'1s'});
  $('.check_box2').css({'color':'white','transition':'1s'})

  $('.purple_box').css({'opacity':'0','visibility': 'hidden','transition':'1s'});
  $('.purple_box02').css({'opacity':'1','visibility': 'visible','transition':'1s'});
  $('.check_box1').css({'color':'#731AED','transition':'1s'})
  
  $('.check_text01').css({'opacity':'1','transition':'0.5s'})
  $('.check_text02').css({'opacity':'0','transition':'0.5s'})
  
});

$('.CellU_proto01').click(function(){
    $('.CellU_proto02').toggle();
    $('.CellU_proto03').toggle();
});

$('.Funlife_proto01').click(function(){
  $('.Funlife_proto02').toggle();
  $('.Funlife_proto03').toggle();
});



$('.process01_01_right_text').mouseover(function(){
  $('.process01_01_left').css({'opacity':'0'});
  $('.process01_01_right').css({'opacity':'1'});
  $('.process01_02_02').css({'opacity':'0'});
  $('.process01_03_02').css({'opacity':'0'});
  $('.page03_section01_01').css({'opacity':'0'});
  $('.page03_section01_02').css({'opacity':'1'});
  $('.page03_section01_03').css({'opacity':'0'});
  $('.page03_section01_04').css({'opacity':'0'});
  
  $('.process01_01_left_text').css({'z-index':'4'})
});



$('.process01_01_left_text').mouseover(function(){
  $('.process01_01_right').css({'opacity':'0'});
  $('.process01_01_left').css({'opacity':'1'});
  $('.process01_02_02').css({'opacity':'0'});
  $('.process01_03_02').css({'opacity':'0'});
  $('.page03_section01_01').css({'opacity':'1'});
  $('.page03_section01_02').css({'opacity':'0'});
  $('.page03_section01_03').css({'opacity':'0'});
  $('.page03_section01_04').css({'opacity':'0'});
});



$('.process01_02').mouseover(function(){
  $('.process01_01_left').css({'opacity':'0'});
  $('.process01_01_right').css({'opacity':'0'});
  $('.process01_02_02').css({'opacity':'1'});
  $('.process01_03_02').css({'opacity':'0'});
  $('.page03_section01_01').css({'opacity':'0'});
  $('.page03_section01_02').css({'opacity':'0'});
  $('.page03_section01_03').css({'opacity':'1'});
  $('.page03_section01_04').css({'opacity':'0'});
});



$('.process01_03').mouseover(function(){
  $('.process01_01_left').css({'opacity':'0'});
  $('.process01_01_right').css({'opacity':'0'});
  $('.process01_02_02').css({'opacity':'0'});
  $('.process01_03_02').css({'opacity':'1'});
  $('.page03_section01_01').css({'opacity':'0'});
  $('.page03_section01_02').css({'opacity':'0'});
  $('.page03_section01_03').css({'opacity':'0'});
  $('.page03_section01_04').css({'opacity':'1'});
});











});

// 빵빵