$(document).ready(function($){
	$('[data-toggle=tooltip]').tooltip()
//Togle Search Header
   if($.cookie("btnpal") =="show"){
	   $(".fastPalabra").show();
	   $(".fastAvanzada").hide();      
	}
	
	else{
		$(".fastPalabra").hide();
	    $(".fastAvanzada").show();
	}
   
   $(".showPalabra").click(function(){
      $(".fastPalabra").show();
	  $(".fastAvanzada").hide();
	  $.cookie("btnpal", "show");
      return false;
   });
  
   var btnpal = $.cookie("btnpal");
  
   if (btnpal == "show") {
	   $(".fastPalabra").show();
	   $(".fastAvanzada").hide();
   };
  
   $(".showAvanzada").click(function(){
	   $(".fastPalabra").hide();
	   $(".fastAvanzada").show();
	   $.cookie("btnpal", "hide");
      return false;
   });
  
   var btnavan = $.cookie("btnavan");
   
   if (btnavan == "hide") {
		$(".fastPalabra").hide();
		$(".fastAvanzada").show();
  };
// Barra superior Omniture
	$('.linkExterno').click(function(evento) { 
		evento.preventDefault(); 
		
		var link = $(this).attr('href'); 
		var pageName=$(this).attr('title'); 
		var channel=$(this).attr('channel');					
		generarPageView2(pageName, channel, link);
	});
// Mantiene el login onFocus
	$('#hd_lgnUser, #hd_lgnPass').focus(function() {
		$('#hd_lgnUser').parents('#hd_member').addClass('hd_viewLogin');
		$('#hd_linkLogin').addClass('hd_tabFocus');
		return false;
	});
// Mantiene el login onFocus
	$('#hd_lgnUser, #hd_lgnPass').blur(function() {
		$('#hd_lgnUser').parents('#hd_member').removeClass('hd_viewLogin');
		$('#hd_linkLogin').removeClass('hd_tabFocus');
		return false;
	});
	$('.carousel').carousel({
	 interval: false,
	})
// AFFIX
    $(".mtr-sinfo-proyecto").affix({
        offset: { 
            top: 120 
        }
    });
	
});
$(window).on('load', function () {
	 $('.selectpicker').selectpicker('show');
});