var soundId;
// var swc = 0; //0 = stop, 1 = play
var mySound;
var soundUrl;
var amplitude = 0.5;
var file;




function setup() {

	SC.initialize({
		client_id:'f8d01220cc0357129af3ed02a2aececb'
	});

	// createCanvas(1200, 400).parent('canvas');
	noCanvas();
	var playBtn = select('#play');
	var stopBtn = select('#stop');

	playBtn.mousePressed(playSounds);
	stopBtn.mousePressed(stopSounds);
  	amplitude = new p5.Amplitude(); 
}


function playSounds(){
	//get track----------------------------------
	SC.get('/tracks').then(function(tracks){
	var random = Math.floor(Math.random()*49)
	console.log('tracks', tracks[random]);
	soundUrl = tracks[random].permalink_url;
	soundId = "/tracks/"+tracks[random].id;
	$("#user").html("Author : "+tracks[random].user.username);
	$("#title").html("Title : "+tracks[random].title);
	$("#url").html("Url : "+soundUrl);

	// loadJSON(soundUrl,gotData());
	// get stream----------------------------
	SC.stream(soundId).then(function(player){
 	  mySound = player;
 	  // console.log("player:: ",player);
 	  //   loadJSON(player);
 	 	player.play(); 	 	
 	 	
 	});	

});

}

function gotData(data){	
	mySound = data;
	mySound.play();
	console.log("data");
}

function stopSounds(){
	if(mySound.isPlaying()==true){
		mySound.pause();
		$("#stop").html("Play");
	}
	else{
		mySound.play();
		$("#stop").html("Pause");

	}

}

function draw() {
  
}


