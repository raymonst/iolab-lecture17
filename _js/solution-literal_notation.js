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
	    var target = $("#form-geometry .active a").attr("href");

	    // conditional statement to check shape type
	    if (target == "#form-geometry-square") {
	    	l = $("#square-length").val();
	    	geometry.calculateArea(l, "square", "#result-area");
	    	geometry.calculateCircumference(l, "square", "#result-circumference");
	    } else if (target == "#form-geometry-circle") {
	    	l = $("#circle-radius").val();
	    	geometry.calculateArea(l, "circle", "#result-area");
	    	geometry.calculateCircumference(l, "circle", "#result-circumference");
	    } else if (target == "#form-geometry-triangle") {
	    	l = $("#triangle-side").val();
	    	geometry.calculateArea(l, "triangle", "#result-area");
	    	geometry.calculateCircumference(l, "triangle", "#result-circumference");
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
// 2 methods: "calculateArea()" & "calculateCircumference()"

var geometry = {
		
	// method: calculate area
	// 3 arguments: "length" (length or radius of the shape chosen), "type" (shape chosen) & "target" (where the result would appear)
	calculateArea : function(length, type, target) {
		// set an "area" variable" then calculate it accordingly 
		var area;
		if (type == "square") {
			area = Math.pow(length, 2);
		} else if (type == "circle") {
			area = 22/7 * Math.pow(length, 2);
		} else if (type == "triangle") {
			area = Math.pow(length, 2) * Math.sqrt(3) / 4;
		};

		// take the variable and update the target with the new value
	 	$(target).text(Math.round(area*100)/100);
	},

	// method: calculate circumference
	// 3 arguments: "length" (length or radius of the shape chosen), "type" (shape chosen) & "target" (where the result would appear)
	calculateCircumference : function(length, type, target) {
		// set a "circ" variable" then calculate it accordingly 
		var circ;
		if (type == "square") {
			circ = 4 * length;
		} else if (type == "circle") {
			circ = 22/7 * 2 * length;
		} else if (type == "triangle") {
			circ = 3 * length;
		};

		// take the variable and update the target with the new value
	 	$(target).text(Math.round(circ*100)/100);
 	}

}