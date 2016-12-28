$(document).ready(function(){

	var m = ''
	var m2 = ''
	function animation1()
	{
		if (m==''){
		$(this).animate({left:"550px",opacity:"0.5"}, 1000) ;
        $('#availability').animate({left:'550px'},1000).slideToggle(1000); m = 'moved';}
        
        else if(m=='moved'){
        $(this).animate({left:"1000px",opacity:"1"},1000) ;
        $('#availability').animate({left:'1000px'},1000).slideToggle(10); m = '';}

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
	    	$(this).animate({left:"150px",top:"300px",opacity:"1", width: "60",height:"20px"}, 1000 );
	    	$(".review").toggle()
    	
	    	
			}

    	}

	$("#dropav").on('click', animation1);
    $("#revclick").on('click',animation2);

    $(".day").on('click',function(){    	
  		var t = $(this).attr('data-did');
        $("#"+t).toggle('1000');
    });
    
    $(".dropdown").on('click',function(){
    	var d = $(this).attr('data-dropid')
        $("#"+d).slideToggle("slow");
      });
    

    });

