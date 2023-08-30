$(document).ready(function() { 

//Tabs -------------------
$('.tab-content').hide();
$('.tab-content:first').show();
$('.tabs-nav li').click(function(){
    var t = $(this).find('a').attr('id'); 
	$('.tabs-nav li').removeClass('active');           
    $(this).addClass('active');
	  if($(this).hasClass('active')){ 
		$('.tab-content').hide();
		$('#'+ t + '_tab').fadeIn('slow');
	 }
});

//Post Action Buttons-----------------------------------
$('.post_action_icons .like_btn').click(function() {
	$(this).toggleClass('active');	
});
//Dropdown -----------------------------------
$('.dropdown-button').click(function() {
	$(this).next('.dropdown-menu').addClass('show');
});
$(document).click(function() {
	$('.dropdown-menu').removeClass('show');
});
$('.dropdown-wrapper').click(function(e) {
	e.stopPropagation();
});

});