$(document).ready(function(){

	var m = ''
	var m2 = ''
	function animation1()
	{
		if (m==''){
		$('#wrapped').children().animate({left:"690px",opacity:"0.9"}, 1000) ;
        $('#availability').toggle(1); m = 'moved';}
        
        else if(m=='moved'){
        $('#availability').toggle(1); m = '';
        $('#wrapped').children().animate({left:"1000px",opacity:"1"},1000);}
        
	}

	function animation2()
	{
  		if (m2==''){
  		$(this).animate({left:"300px",top:"100px",opacity:"0.8", width: "400px",height:"500px"}, 1000 );
    	$(this).animate({fontSize:"2em"},1000); m2='moved';
    	$(".review").toggle()
    	}
    	else if(m2=='moved')
    	{
    		$(this).animate({fontSize:"1em"},1000); m2='';
	    	$(this).animate({left:"160px",top:"300px",opacity:"1", width: "60",height:"20px"}, 1000 );
	    	$(".review").toggle()
    	
	    	
			}

    	}

    
     		
	$("#dropav").on('click', animation1);
	$(".day").on('click', function(){ $(this).animate({right:'100px'})})
    $("#revclick").on('click',animation2);
    $("#prices").on('click', function(){
    	$("#tabprices").toggle()})

    $(".day").on('click',function(){    	
  		var t = $(this).attr('data-did');
        $("#"+t).toggle('1000');
    });
    
    $(".dropdown").on('click',function(){
    	var d = $(this).attr('data-dropid')
        $("#"+d).slideToggle("slow");
      });
    
   $("#subjects").children().on('click', function() {

   		subj = $(this).attr('id')
   		if (subj == 'sub1')
   			{$('iframe').attr('src','https://www.youtube.com/embed/Gcby6WYAVKg/')}
   		else if (subj == "sub2")
   			{$('iframe').attr('src','https://www.youtube.com/embed/2vsAY-tp9js?list=PL5D99A319E129A5B7/')}
   		
   	});



})

