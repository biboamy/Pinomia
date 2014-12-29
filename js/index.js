var device_width;
var device_height;
var home_display;
var display_list;

$(document).ready(function () {
    display_list = 0; //It is used to determine whether the list of small window is displayed or not.
    home_display = 0; //It is used to determine whether the home page is displayed or not.
	min_left_bar = $('.logo').width()+10; //For handle the left_bar exception.
	
	//initialize  the page. 
	$(window).ready(function(){
		ResponsiveWeb();
	});
	
	// When window resize, the function handle all exception.
	$(window).resize(function(){
		ResponsiveWeb();
		//Handle the room slide exception: room image may overlap the text.
		if($('.blue').css('display') == 'block'){
			$('.room_slide').load('room_slide.html .blue_room_slide',function(responseTxt, statusTxt, xhr){
				if (statusTxt == "success") {
					$(".blue").css('display','block');
					$('.blue_room_slide').cycle();
				}
			});
		}
		if($('.green').css('display') == 'block'){
			$('.room_slide').load('room_slide.html .green_room_slide',function(responseTxt, statusTxt, xhr){
				if (statusTxt == "success") {
					$(".green").css('display','block');
					$('.green_room_slide').cycle();
				}
			});
		}
		if($('.purple').css('display') == 'block'){
			$('.room_slide').load('room_slide.html .purple_room_slide',function(responseTxt, statusTxt, xhr){
				if (statusTxt == "success") {
					$(".purple").css('display','block');
					$('.purple_room_slide').cycle();
				}
			});
		}
	});

 	$(".intro").mouseover(function(){
    	$(".intro").css({"font-weight":"900"});
    }).mouseout(function() {
    	$(".intro").css({"font-weight":"100"});
  	});
  	$(".room_info").mouseover(function(){
    	$(".room_info").css({"font-weight":"900"});
    }).mouseout(function() {
    	$(".room_info").css({"font-weight":"100"});
  	});
  	$(".room_qa").mouseover(function(){
    	$(".room_qa").css({"font-weight":"900"});
    }).mouseout(function() {
    	$(".room_qa").css({"font-weight":"100"});
  	});
  	$(".travel").mouseover(function(){
    	$(".travel").css({"font-weight":"900"});
    }).mouseout(function() {
    	$(".travel").css({"font-weight":"100"});
  	});
  	$(".food").mouseover(function(){
    	$(".food").css({"font-weight":"900"});
    }).mouseout(function() {
    	$(".food").css({"font-weight":"100"});
  	});
  	$(".traffic").mouseover(function(){
    	$(".traffic").css({"font-weight":"900"});
    }).mouseout(function() {
    	$(".traffic").css({"font-weight":"100"});
  	});
  	$(".contact").mouseover(function(){
    	$(".contact").css({"font-weight":"900"});
    }).mouseout(function() {
    	$(".contact").css({"font-weight":"100"});
  	});
  	$(".message").mouseover(function(){
    	$(".message").css({"font-weight":"900"});
    }).mouseout(function() {
    	$(".message").css({"font-weight":"100"});
    });

	//The function is used to display the list of small window.
  	$("#display_list").click(function () {
  	    if (device_width < 540) {
			$(".menu").slideToggle("slow");
			$('#left_bar .left_bar_footer').slideToggle();
			display_list = 1;
		}
  	});
	
	$('.logo').click(function(){
		if (device_width > 540){
			$('.left_bar').toggleClass("hide_list");
			
		}
	});

	
	/*
	The following code is used to display page when user click the menu. 
	*/
	
  	$(".intro").click(function () {
  	    
		changePage();
  	    $("#main_content").load("about.html", function (responseTxt, statusTxt, xhr) {
  	        if (statusTxt == "success") {
  	            //alert("External content loaded successfully!");
  	            $('.menu_bar .active').removeClass("active");
  	            $('#about_content').fadeIn("slow");
  	            $('.intro').addClass("active");
  	        }
  	        if (statusTxt == "error") {
  	            //alert("Error: " + xhr.status + ": " + xhr.statusText);
  	        }
  	    });
       
  	});
	$(".contact").click(function () {
  	    
		changePage();
  	    $("#main_content").load("contact.html", function (responseTxt, statusTxt, xhr) {
  	        if (statusTxt == "success") {
  	            //alert("External content loaded successfully!");
  	            $('.menu_bar .active').removeClass("active");
  	            $('#contact_content').fadeIn("slow");
  	            $('.contact').addClass("active");
  	        }
  	        if (statusTxt == "error") {
  	            //alert("Error: " + xhr.status + ": " + xhr.statusText);
  	        }
  	    });
       
  	});
	$(".room_info").click(function () {

		changePage();
  	    $("#main_content").load("room.html", function (responseTxt, statusTxt, xhr) {
  	        if (statusTxt == "success") {
  	            
				//Handle the room slide may overlap the text.
				$('.room_slide').load('room_slide.html .blue_room_slide',function(responseTxt, statusTxt, xhr){
					if (statusTxt == "success") {
						$(".blue").css('display','block');
						if (home_display == 1 && device_width < 540){
							$('.blue_room_slide').css('min-height',device_width*0.73);
						}
						$('.blue_room_slide').cycle();
					}
				});
  	            $('.menu_bar .active').removeClass("active");
  	            $('#info_content').fadeIn("slow");
  	            $(".room_info").addClass("active");
				ResponsiveWeb();

  	            $(".attention_menu").click(function () {
  	                $(".room_info > li").removeClass('active');
  	                $(".attention_menu").addClass('active');
  	                $(".price_info").hide();
  	                $(".settings_info").hide();
  	                $(".attention_info").show();
  	            });
				
				$(".settings_menu").click(function () {
  	                $(".room_info > li").removeClass('active');
  	                $(".settings_menu").addClass('active');
  	                $(".price_info").hide();
  	                $(".attention_info").hide();
  	                $(".settings_info").show();
  	            });

  	            $(".price_menu").click(function () {
  	                $(".room_info > li").removeClass('active');
  	                $(".price_menu").addClass('active');
  	                $(".attention_info").hide();
  	                $(".settings_info").hide();
  	                $(".price_info").show();
  	            });
				
				$(".r1").click(function(){
					//Handle the room slide may overlap the text.
					$('.room_slide').load('room_slide.html .blue_room_slide',function(responseTxt, statusTxt, xhr){
						if (statusTxt == "success") {
							
							$(".blue").css('display','block');
							$('.blue_room_slide').cycle();
						}
					});
					$('#room_content').fadeOut(50);
					$(".room_list .active").removeClass("active");
					$(".green").css('display','none');
					$(".purple").css('display','none');
					$(".r1").addClass("active");
					$('#room_content').fadeIn();
				});
				
				$(".r2").click(function(){
					//Handle the room slide may overlap the text.
					$('.room_slide').load('room_slide.html .green_room_slide',function(responseTxt, statusTxt, xhr){
						if (statusTxt == "success") {
							$(".green").css('display','block');
							$('.green_room_slide').cycle();
						}
					});
					$('#room_content').fadeOut(50);
					$(".purple").css('display','none');
					$(".blue").css('display','none');
					$(".room_list .active").removeClass("active");
					$(".r2").addClass("active");
					$('#room_content').fadeIn();
				});

				$(".r3").click(function(){
					//Handle the room slide may overlap the text.
					$('.room_slide').load('room_slide.html .purple_room_slide',function(responseTxt, statusTxt, xhr){
						if (statusTxt == "success") {
							$(".purple").css('display','block');
							$('.purple_room_slide').cycle();
						}
					});
					$('#room_content').fadeOut(50);
					$(".room_list .active").removeClass("active");
					$(".green").css('display','none');
					$(".blue").css('display','none');
					$(".r3").addClass("active");
					$('#room_content').fadeIn();
				});
  	        }
  	        if (statusTxt == "error") {
  	            //alert("Error: " + xhr.status + ": " + xhr.statusText);
  	        }
  	    });
       
	});

	//Fix me!!! The travel page may display garbage code.
	$(".l1").click(function () {
	    $(".travel_list .active").removeClass("active");
	    $(".l1").addClass("active");
	    $(".travel_list > li > a > span").removeClass("pull-right glyphicon glyphicon-chevron-right");
	    $(".l1 span").addClass("pull-right glyphicon glyphicon-chevron-right");
	    $(".travel_word > div").removeClass("active");
	    $(".l1_content").addClass("active");
	    $(".map_content > div").removeClass("active");
	    $(".map_1").addClass("active");
	});
	$(".l2").click(function () {
	    $(".travel_list .active").removeClass("active");
	    $(".l2").addClass("active");
	    $(".travel_list > li > a > span").removeClass("pull-right glyphicon glyphicon-chevron-right");
	    $(".l2 span").addClass("pull-right glyphicon glyphicon-chevron-right");
	    $(".travel_word > div").removeClass("active");
	    $(".l2_content").addClass("active");
	    $(".map_content > div").removeClass("active");
	    $(".map_2").addClass("active");
	});
	$(".l3").click(function () {
	    $(".travel_list .active").removeClass("active");
	    $(".l3").addClass("active");
	    $(".travel_list > li > a > span").removeClass("pull-right glyphicon glyphicon-chevron-right");
	    $(".l3 span").addClass("pull-right glyphicon glyphicon-chevron-right");
	    $(".travel_word > div").removeClass("active");
	    $(".l3_content").addClass("active");
	    $(".map_content > div").removeClass("active");
		if (device_width > 540){
			$(".display_large").addClass("active");
		}
		else{
			$(".display_small").addClass("active");
		}
	});
    /*
	$(".travel_title").mouseover(function () {
	    $(this).animate({ "left": "+=475px" }, 500);
	}).mouseout(function () {
	    $(this).animate({ "left": "-=475px" }, 500);
	});
    */
  	$(".travel").click(function () {
  	    
  	    home_display = 1;
  	    hideMenu();
  	    $("#vertical_bg").fadeOut("slow");
  	    $("#bg").fadeOut("slow");
  	    $("#main_content").fadeOut("slow");

  	    $('.menu_bar .active').removeClass("active");
  	    $('#sub_main').fadeIn("slow");
  	    $('.travel').addClass("active");
        //Fix me!!! The travel page may display garbage code.
		/*
  	    $("#main_content").load("travel.html", function (responseTxt, statusTxt, xhr) {
  	        if (statusTxt == "success") {
  	            //alert("External content loaded successfully!");
  	            $('.menu_bar .active').removeClass("active");
  	            $('#travel_content').fadeIn("slow");
  	            $('.travel').addClass("active");
				
				$(".l1").click(function(){
				$(".travel_list .active").removeClass("active");
				$(".l1").addClass("active");
				$(".travel_list > li > a > span").removeClass("pull-right glyphicon glyphicon-chevron-right");
				$(".l1 span").addClass("pull-right glyphicon glyphicon-chevron-right");
				$(".travel_word > div").removeClass("active");
				$(".l1_content").addClass("active");
				$(".map_content > div").removeClass("active");
				$(".map_1").addClass("active");
				});
				$(".l2").click(function(){
				$(".travel_list .active").removeClass("active");
				$(".l2").addClass("active");
				$(".travel_list > li > a > span").removeClass("pull-right glyphicon glyphicon-chevron-right");
				$(".l2 span").addClass("pull-right glyphicon glyphicon-chevron-right");
				$(".travel_word > div").removeClass("active");
				$(".l2_content").addClass("active");
				$(".map_content > div").removeClass("active");
				$(".map_2").addClass("active");
				});
				$(".l3").click(function(){
				$(".travel_list .active").removeClass("active");
				$(".l3").addClass("active");
				$(".travel_list > li > a > span").removeClass("pull-right glyphicon glyphicon-chevron-right");
				$(".l3 span").addClass("pull-right glyphicon glyphicon-chevron-right");
				$(".travel_word > div").removeClass("active");
				$(".l3_content").addClass("active");
				$(".map_content > div").removeClass("active");
				$(".map_3").addClass("active");
				});

				$(".travel_title").mouseover(function(){
				$(this).animate({"left": "+=475px"}, 500 );
				}).mouseout(function() {
				$(this).animate({"left": "-=475px"}, 500 );
				});
  	        }
  	        if (statusTxt == "error") {
  	            //alert("Error: " + xhr.status + ": " + xhr.statusText);
  	        }
  	    });
       */
  	});
	$(".food").click(function () {
		changePage();
  	    $("#main_content").load("food.html", function (responseTxt, statusTxt, xhr) {
  	        if (statusTxt == "success") {
  	            //alert("External content loaded successfully!");
  	            $('.menu_bar .active').removeClass("active");
  	            $('#food_content').fadeIn("slow");
  	            $('#left_bar').addClass("opacityDark");
  	            $(".food").addClass("active");
				
				$(".img_bar").mouseover(function(){
				$(this).css({"background":"rgba(0,0,0,0.6)"});
				}).mouseout(function() {
				$(this).css({"background":"rgba(205,165,83,0.6)"});
				});
  	        }
  	        if (statusTxt == "error") {
  	            //alert("Error: " + xhr.status + ": " + xhr.statusText);
  	        }
  	    });
  	    
  	    
	});


	$(".traffic").click(function () {
		changePage();
  	    $("#main_content").load("traffic.html", function (responseTxt, statusTxt, xhr) {
  	        if (statusTxt == "success") {
  	            //alert("External content loaded successfully!");
  	            $('.menu_bar .active').removeClass("active");
  	            $('#traffic_content').fadeIn("slow");
  	            $('.traffic').addClass("active");
  	        }
  	        if (statusTxt == "error") {
  	            //alert("Error: " + xhr.status + ": " + xhr.statusText);
  	        }
  	    });
	});

	
	
});

//Execute the change page process. 
function changePage(){
	home_display = 1;
	hideMenu();
	$('.cal_width').css('height',0);
	$("#vertical_bg").fadeOut("slow");
	$("#bg").fadeOut("slow");
	$('#sub_main').fadeOut("slow");
  	$("#main_content div").fadeOut("slow");
    $("#main_content").fadeIn("slow");
	$('#left_bar').addClass('opacityDark');
}

//Hide the menu of small window.
function hideMenu() {
    if (device_width < 540) {
        $(".menu").slideUp("slow");
        $('#left_bar .left_bar_footer').slideUp();
    }
}


function initialize() {
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
          center: new google.maps.LatLng(22.971399, 120.233389),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
		
}


//This function enable the web site to be responsive.
function ResponsiveWeb(){
	
	//Measure the width and height of window.
	device_width = $(document).width();
    device_height = $(document).height();
	
	//Handle the left_bar exception : left_bar may overlap the menu.
	if($('.left_bar_footer').position().top > ($('.back_home').position().top)){
		$('.left_bar_footer').css('display','block');
	}
	else{
		$('.left_bar_footer').css('display','none');
	}
	
	//Handle room content exception: room list is too long.
	if(device_width > 540 && device_width < device_height){
		$('.glyphicon-chevron-right').css('display','none');
	}
	else{
		$('.active > .glyphicon-chevron-right').css('display','block');
	}
	
	//For large and vertical window.
	if (home_display == 0 && device_width > 540 && device_width < device_height){
		$('#vertical_bg img').css('width',$('.cal_width').width());
		$('.cal_width').css('height',device_height);
		$('#bg').css('display','none');
		$('#vertical_bg').css('display','block');
		$('#vertical_bg').cycle();
	}
	//For large and horizontal window.
	else if (home_display == 0 && device_width > 540 && device_width > device_height){
		$('#bg img').css('width',$('.cal_width').width());
		$('.cal_width').css('height',device_height);
		$('#vertical_bg').css('display','none');
		$('#bg').css('display','block');
		$('#bg').cycle();
	}
	//For small window. ex: smart phone.
	else if (home_display == 0 && device_width < 540){
		$('#vertical_bg img').css('width',$('.cal_width').width());
		$('#vertical_bg img').css('height',$('.cal_width').width()*1.25);
		$('#bg').css('display','none');
		$('#vertical_bg').css('display','block');
		$('#vertical_bg').cycle();
	}
	
	if(home_display == 0 && device_width > 540 && device_height < 450){
		alert('請將手機直放以利於瀏覽網頁');
	}
	
	//Handle the left_bar exception: left_bar may become too large when user resize the window.
	if (device_width > 540){
		$('#left_bar').css('width',min_left_bar);
	}
	else{
		$('#left_bar').css('width',device_width);
		$('.left_bar_footer').css('display','none');
	}
}


$(document).ready(function () {


$('#submit').click(function(){
					if($('.name ').val() == ''){
						$('.name').addClass("error");
					}
					if($('.email ').val() == ''){
						$('.email').addClass("error");
					}
					if($('.password ').val() == ''){
						$('.password').addClass("error");
					}
					if($('.message ').val() == ''){
						$('.message').addClass("error");
					}
				});
$('#submit').mouseover(function(){
	$('#submit').addClass("hover");
	});
$('#submit').mouseout(function(){
	$('#submit').removeClass("hover");
	});

});