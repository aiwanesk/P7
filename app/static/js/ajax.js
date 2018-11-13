$(function() {

	$(':submit').on('click', function()

	{
    	var usr_query = document.getElementById('usr_question').value;
    	if (usr_query !== "") {
    	    console.log("Vous avez saisi :" + usr_query);
    	}
	});

});

