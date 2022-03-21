$(document).ready(function(){


  $(".button1").click(function(){
	$(".button1").hide();
	location.href = "addPage.html";
  });

  $(".button1").mouseenter(function(){
	$(".button1").css("background-color","blue");
  });

  $(".button1").mouseleave(function(){
	$(".button1").css("background-color","lightblue");
  });


  $(".button2").click(function(){
	$(".button2").hide();
	location.href = "viewPage.html";
  });

  $(".button2").mouseenter(function(){
	$(".button2").css("background-color","blue");
  });

  $(".button2").mouseleave(function(){
	$(".button2").css("background-color","lightblue");
  });


});