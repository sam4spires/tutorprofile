$(document).ready(function(){

	var m = ''
	var m2 = ''
	function animation1()
	{
		if (m==''){
		$('#dropav').animate({left:"690px",opacity:"0.5"}, 1000) ;
        $('#availability').animate({left:"690px"},1000, function() {$('#times').show(1000)}).toggle(1); m = 'moved';}
        
        else if(m=='moved'){
        $('#availability').toggle(1); m = '';
        $('#dropav').animate({left:"1070px",opacity:"1"},1000); 
    	$('#times').hide(1)}
        
	}

	function animation2()
	{
  		if (m2==''){
  		$(this).animate({left:"300px",top:"100px",background:"rgba(173,216,230,0.5)", width: "400px",height:"500px"}, 1000 );
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
    function animation3()
    {
    	daynum = $(this).attr('data-did')
    	$('#times#'+daynum).toggle(1)
    	$(this).toggleClass('dayclicked')
    	
 	}
    	
    

    
     		
	$("#dropav").on('click', animation1);
	$(".day").on('click', animation3);
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

