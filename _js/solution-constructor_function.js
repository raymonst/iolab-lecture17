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

	// create the objects
	var square = new geometry("square");
	var circle = new geometry("circle");
	var triangle = new geometry("triangle");

	// form submit event
	$("#form-geometry").on("submit", function() {
		// set variables
	    var l;
	    var target = $("#form-geometry .active a").attr("href");

	    // conditional statement to check shape type
	    if (target == "#form-geometry-square") {
	    	l = $("#square-length").val();
	    	square.calculateArea(l, "#result-area");
	    	square.calculateCircumference(l, "#result-circumference");
	    } else if (target == "#form-geometry-circle") {
	    	l = $("#circle-radius").val();
	    	circle.calculateArea(l, "#result-area");
	    	circle.calculateCircumference(l, "#result-circumference");
	    } else if (target == "#form-geometry-triangle") {
	    	l = $("#triangle-side").val();
	    	triangle.calculateArea(l, "#result-area");
	    	triangle.calculateCircumference(l, "#result-circumference");
	    };
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
// 1 argument: "shapeType"
// 2 methods: "calculateArea()" & "calculateCircumference()"

function geometry(shapeType) {

	// property: shape type
	this.type = shapeType;

	// method: calculate area
	// 2 arguments: "length" (length or radius of the shape chosen) & "target" (where the result would appear)
	this.calculateArea = function(length, target) {
		// set an "area" variable" then calculate it accordingly 
		var area;
		if (this.type == "square") {
			area = Math.pow(length, 2);
		} else if (this.type == "circle") {
			area = 22/7 * Math.pow(length, 2);
		} else if (this.type == "triangle") {
			area = Math.pow(length, 2) * Math.sqrt(3) / 4;
		};

		// take the variable and update the target with the new value
	 	$(target).text(Math.round(area*100)/100);
	};

	// method: calculate circumference
	// 2 arguments: "length" (length or radius of the shape chosen) & "target" (where the result would appear)
	this.calculateCircumference = function(length, target) {
		// set a "circ" variable" then calculate it accordingly 
		var circ;
		if (this.type == "square") {
			circ = 4 * length;
		} else if (this.type == "circle") {
			circ = 22/7 * 2 * length;
		} else if (this.type == "triangle") {
			circ = 3 * length;
		};

		// take the variable and update the target with the new value
	 	$(target).text(Math.round(circ*100)/100);
	};

}