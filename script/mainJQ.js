(function() {      //JQUERY METHOD
	$('nav li').on ('click', function() {
		$.getJSON('includes/getPokemon.php', {critter : this.id}, function(data){
			console.log(data);

			$('.click-header').text(data.pokeName);
			$('.hidden').removeClass('hidden');
			$('.pokemon-large').attr('src', 'images/' + data.pokeImage + '.png');
			$('.content-section').text(data.pokeDesc);
			$('.habitat-header').text(data.pokeName + "lives here!");
			$('.habitat').attr('src', 'images/' + data.bgImage + 'jpg');
		});
	});

})();

/*(function() {    //JAVASCRIPT METHOD
	var pokeImages = document.querySelectorAll('nav li'),
		critterHeader = document.querySelector('.click-header'),
		critterImage = document.querySelector('.pokemon-large'),
		critterDesc = document.querySelector('.content-section p'),
		habHeader = document.querySelector('.habitat-header'),
		critterHab = document.querySelector('.habitat'),
		httpRequest;


		
		function makeRequest(){
		httpRequest = new XMLHttpRequest();
		
		if (!httpRequest) {
		console.log('your browser sucks');
		return false;
	}
	

	httpRequest.onreadystatechange = showPokemonInfo;
	httpRequest.open('GET', 'includes/getPokemon.php' + '?critter=' + this.id);
	httpRequest.send();
}

function showPokemonInfo(){
	if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
		var pokeData = JSON.parse(httpRequest.responseText);
		
		critterHeader.firstChild.nodeValue = pokeData.pokeName;

		[].forEach.call(document.querySelectorAll('.hidden'), function(item) {
			item.classList.remove('hidden');
		}); //turns things on

		critterImage.src = "images/" + pokeData.pokeImage + '.png';

		critterDesc.firstChild.nodeValue = pokeData.pokeDesc;

		habHeader.firstChild.nodeValue = pokeData.pokeName + " lives here";

		critterHab.src = "images/" + pokeData.bgImage + '.jpg';
	}

}
//event handling
	[].forEach.call(pokeImages, function(img) {
	img.addEventListener('click', makeRequest, false);
	});

})();*/