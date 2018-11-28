$(function() {

	$(':submit').on('click', function()

	{
    	var usr_query = document.getElementById('usr_question').value;
    	if (usr_query !== "") {
    	    console.log("Vous avez saisi :" + usr_query);
    	    display_message(usr_query);
    	    loading();
    	    setTimeout("remove_loading()", 3000);
    	    setTimeout("bot_answer()", 3100)
    	}
	});

});


function display_message(usr_query)

{
	var chat = document.getElementById('chat_box');
	var newDiv = document.createElement('div');
	newDiv.setAttribute("class", "chat_answer");
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
		newDiv1.setAttribute("class", "chat_answer");
		var mapDiv = document.createElement('div');
		mapDiv.setAttribute("class", "map");
		newDiv1.appendChild(mapDiv);
		chat.appendChild(newDiv1);
		var map;
   		map = new google.maps.Map(document.getElementsByClassName('map'), {
        	center: {lat: 48.6843900, lng:  6.1849600},
        	zoom: 15
    	});



	}


}


function bot_answerv2 () {

	var div = document.createElement('div');
	div.classList.add("map");
	div.innerHTML = "abc";
	var latlng = new google.maps.LatLng(39.305, -76.617);
	map1 = new google.maps.Map(document.getElementsByClassName('map'), {
        	center: latlng,
        	zoom: 15
    	});
	div.appendChild(map1);


}


function loading() {

	var chat = document.getElementById('chat_box');
	var newDiv = document.createElement('div');
	newDiv.setAttribute("id", "loading");
	var rep = document.createElement('p');
	rep.innerHTML = " A ta question, je réfléchis."
	newDiv.appendChild(rep);
	chat.appendChild(newDiv);



}

function remove_loading() {

	var loader = document.getElementById('loading');
	loader.remove();


}