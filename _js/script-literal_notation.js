//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
/*
1. document.ready
2. tabs
3. geometry
*/



//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

$(document).ready(function() {
	
	// activate tabs
	tabs.init();	

	// form submit event
	$("#form-geometry").on("submit", function() {
		// set variables
	    var l;
	    var target;

		// since the resulting area/circumference would be dependent on the shape chosen, you need a conditional statement to check it
	    // you can check what shape is chosen by investigating what tab is "active" in the form 

	    return false;
	});

});



//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
// "tabs" object
// 2 methods: "init()" & "changeTabs()"

var tabs = {
	
	init : function() {	
		// load the tabbing functionalities, then simulate a click on the first tab
		tabs.changeTabs();
		$("#form-geometry ul li:first a").click();
	},

	changeTabs : function() {
		// when the user clicks a tab,
		$("#form-geometry ul li a").on("click", function() {
			var self = $(this);
			var target = self.attr("href");

			// change the "active" tab
			self.parent().siblings(".active").removeClass("active");
			self.parent().addClass("active");

			// then show the "active" tab content
			$("#form-geometry .form-section").hide();
			$(target).show();
			return false;
		});
	}
	
}



//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
// "geometry" object 
// 2 methods: "calculateArea()" & "calculateCircumference()"

var geometry = {

	// set up 2 methods, one for calculating area and another for calculating circumference
	// at minimum, the methods should take a "length" argument, so they can calculate the area & circumference

	// method for calculating area
	calculateArea : function() {
		// calculate it differently depending on the shape chosen
	},

	// method: calculate circumference
	calculateCircumference : function(length, type, target) {
		// calculate it differently depending on the shape chosen
 	}

}