

//Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
$(document).ready(function(){

	//listen for a click on Read More
	$('.readmore').click(function(event){

		//preven the anchor from returning to the top of the page
		event.preventDefault();

		//slide down the rest of the post
		$('#show-this-on-click').slideDown();
		//hide Read More button
		$('.readmore').hide();
		//make Read Less button appear
		$('.readless').show();

	});


	//listen for a click on Read Less
	$('.readless').click(function(event){

		//preven the anchor from returning to the top of the page
		event.preventDefault();

		//slide up the rest of the post
		$('#show-this-on-click').slideUp();
		//hide Read Less button
		$('.readless').hide();
		//show the Read More button
		$('.readmore').show();
	});

	//listen for a Learn More click
	$('.learnmore').click(function(event){

		//preven the anchor from returning to the top of the page
		event.preventDefault();

		//slide down the more info
		$('#learnmoretext').slideDown();
		//hide the Learn More button
		$('.learnmore').hide();
		//slide up/hide seems like extra credit?
		//$('.readless').show();
	});

});