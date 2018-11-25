$(function() {

	$(':submit').on('click', function()

	{
    	var usr_query = document.getElementById('usr_question').value;
    	if (usr_query !== "") {
    	    console.log("Vous avez saisi :" + usr_query);
    	    display_message(usr_query);
    	    setTimeout("bot_answer()", 2000)
    	}
	});

});


function display_message(usr_query)

{
	var chat = document.getElementById('chat_box');
	var newDiv = document.createElement('div');
	newDiv.setAttribute("id", "chat_answer");
	newDiv.textContent = usr_query;
	chat.appendChild(newDiv);
	console.log("Message affiché");

}

function bot_answer()

{
	var nb = 1
	if (nb == 1) {
		display_message("Voila ce que j'ai trouvé")
		var chat = document.getElementById('chat_box');
		var newDiv1 = document.createElement('div');
		newDiv1.setAttribute("id", "chat_answer");
		var mapDiv = document.createElement('div');
		mapDiv.setAttribute("id", "map");
		newDiv1.appendChild(mapDiv);
		chat.appendChild(newDiv1);
		var map;
   		map = new google.maps.Map(document.getElementById('map'), {
        	center: {lat: 48.6843900, lng:  6.1849600},
        	zoom: 15
    	});



	}


}


