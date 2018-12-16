$(function() {

	$(':submit').on('click', function()

	{
    	var usr_query = document.getElementById('usr_question').value;
    	if (usr_query !== "") {
    	    console.log("Vous avez saisi :" + usr_query);
    	    display_message(usr_query);
    	    loading();
    	    ajaxPost(usr_query, data_treat);
    	    remove_loading();
    	    //loading();
    	    //setTimeout("remove_loading()", 3000);
    	    //setTimeout("bot_answer()", 3100)
    	}
	});

});

function initMap(coord, div1)
{
    var mapZone = document.createElement('div');
    mapZone.classList.add('map');
    div1.appendChild(mapZone);
    var map = new google.maps.Map(mapZone, {
        zoom: 16,
        center: coord,
        /* Google Maps Retro Style */
        styles: [
            {"elementType": "geometry", "stylers": [{"color": "#ebe3cd"}]},
            {"elementType": "labels.text.fill", "stylers": [{"color": "#523735"}]},
            {"elementType": "labels.text.stroke","stylers": [{"color": "#f5f1e6"}]},
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#c9b2a6"}]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#dcd2be"}]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#ae9e90"}]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [{"color": "#dfd2ae"}]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{"color": "#dfd2ae"}]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#93817c"}]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#a5b076"}]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#447530"}]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{"color": "#f5f1e6"}]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [{"color": "#fdfcf8"}]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [{"color": "#f8c967"}]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#e9bc62"}]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [{"color": "#e98d58"}]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#db8555"}]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#806b63"}]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [{"color": "#dfd2ae"}]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#8f7d77"}]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.stroke",
              "stylers": [{"color": "#ebe3cd"}]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [{"color": "#dfd2ae"}]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#b9d3c2"}]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#92998d"}]
            }
          ]
        });
        var marker = new google.maps.Marker({
            position: coord,
            map: map
        });
      }



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
		var mapDiv = document.createElement('div');
		mapDiv.setAttribute("class", "chat_answer");
		var latlng = new google.maps.LatLng(39.305, -76.617);
		initMap(latlng, mapDiv);
		chat.appendChild(mapDiv);
	}

	else {
		display_message("Désolé, je n'ai rien trouvé");


	}

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

function ajaxPost(data, callback)
// Display gif loader, prepare and send ajax 'POST' request
{
    var req = new XMLHttpRequest();
    req.open('POST', "/result");
    req.addEventListener('load', function() {
        if ((req.status >= 200 && req.status < 400)) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + "/result");
        }
    });
    req.addEventListener('error', function() {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(data);
}



function data_treat(json_data) {

    var tab = JSON.parse(json_data);
    dict = tab[0];
    console.log(dict["lat"]);
    display_message(tab[1]);


    //if (tab[1] == "1") {
    //    display_message("Désolé, je ne me rappelle plus où se situe ce lieu");
    //}
    //else {
    //    var mapDiv = document.createElement('div');
	//    mapDiv.setAttribute("class", "chat_answer");
    //    initMap(tab[1], mapDiv);
    //}
    //display_message(tab[2]);

}