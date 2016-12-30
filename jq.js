$(document).ready(function(){

/* Set some variables to be used later when setting the states of animations*/
	var m = ''
	var m2 = ''

		/* animation1 is for the reviews section, it moves up and right and expands. Use of rgba to decrease opacitiy of box without 
	decreasing opacity of the reviews. */
	function animation1()
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
	/* animation2 is for the availability dropdown, it moves it to the left while decreasing opacity and toggles the 'days' menu.
	The if statement is needed to set the state of the element so that it can be moved back again. Some of the times are set to 1 millisecond
	this is to try to avoid what would look like 'lagging'*/
	function animation2()
	{
		if (m==''){
		$('#dropav').animate({left:"690px",opacity:"0.5"}, 1000) ;
        $('#availability').animate({left:"690px"},1000, function() {$('#times').show(1000)}).toggle(1); m = 'moved';}
        
        else if(m=='moved'){
        $('#availability').toggle(1); m = '';
        $('#dropav').animate({left:"1070px",opacity:"1"},1000); 
    	$('#times').hide(1)}
        
	}

	  /* animation3 is for the keeping a selected day selected and to show the available times for that day  */
    function animation3()
    {
    	daynum = $(this).attr('data-did')
    	$('#times#'+daynum).toggle(1)
    	$(this).toggleClass('dayclicked')
 	}

 

    /* toggle prices table*/
    $("#prices").on('click', function(){
    	$("#tabprices").toggle()})

     /* do respective animations when the following are clicked*/
    $("#revclick").on('click',animation1);
	$("#dropav").on('click', animation2);
	$(".day").on('click', animation3);
    

    

    /* toggles the available times for corresponding days by sharing name of attribute*/
    $(".day").on('click',function(){    	
  		var t = $(this).attr('data-did');
        $("#"+t).toggle('1000');
    });

    /* Toggles dropdown text for about me, etc. section*/
    $(".dropdown").on('click',function(){
    	var d = $(this).attr('data-dropid')
        $("#"+d).slideToggle("slow");
      });
    
    /* This swaps round the iframe source depending on the subject one clicks, can change other stuff with similar attribute swapping if necessary*/
   $("#subjects").children().on('click', function() {

   		subj = $(this).attr('id')
   		if (subj == 'sub1')
   			{$('iframe').attr('src','https://www.youtube.com/embed/Gcby6WYAVKg/')}
   		else if (subj == "sub2")
   			{$('iframe').attr('src','https://www.youtube.com/embed/2vsAY-tp9js?list=PL5D99A319E129A5B7/')}
   		
   	});



})

