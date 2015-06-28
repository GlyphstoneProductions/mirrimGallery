
var mirrimviz ;

function Mirrim() {

	this.initialize(true);
	animate() ;

} 

Mirrim.prototype.initialize = function(first) {
	
	var app = this ;
	console.log( "starting up Mirrim" );
	
	$("#page").tooltip( { position: { my: "left+4 bottom-4", at: "left top" } }  ) ;
	
	
    $("#about").click( 
    		function(){ 
    			app.toAboutUs();
    		}
    ) ; 
    
    $("#contact").click( 
    		function(){ 
    			app.toContactUs();
    		}
    ) ; 
    
    this.initGallery();
    
    this.getBlogPost() ;
    
    mirrimviz = new MirrimViz( "vizcanvas", "vizprogress", "models/kathy_constantine_web.js", "models/kathy_web_uvmap.png", "images/squareimage.png", 260, 260, 3.2);
    //mirrimviz = new MirrimViz( "vizcanvas", "vizprogress", "models/mahabo_final_flip.js", "models/mahaboweb_uvmap.png", "images/squareimage.png", 260, 260);
    
} ;


function animate() {
	mirrimviz.render() ;
	window.requestAnimationFrame( animate ) ;
}


Mirrim.prototype.toAboutUs = function() {
	console.log("Go to about us page") ;http://blog.mirrim3d.com/node/9
	window.location.href = "http://blog.mirrim3d.com/about" ;
} ;

Mirrim.prototype.toContactUs = function() {
	console.log("Go to contact us page") ;
	window.location.href = "http://blog.mirrim3d.com/contactus" ;
} ;


Mirrim.prototype.initGallery = function() {
	  jQuery('#slider').slippry({ 
		  "speed": 4000
		}) ;

}

Mirrim.prototype.getBlogPost = function() {
	
	var app = this ;
	var jqxhr = $.getJSON( "api/blog/latest")
		  .done(function( data ) {
			  console.log("Got blog");
		      console.log( data );
		      $('#blogtitle').html(data.title);
		      $('#blogbody').html(data.body);
		  }) ;

} ;

Mirrim.alert = function(text) {
	// We're wrapping `alert` so if we want to use a modal
	// or something later it will be easier to do so.
	window.alert(text);
} ;

$(document).ready(function () {
	var mirrim = new Mirrim('#page');
});
