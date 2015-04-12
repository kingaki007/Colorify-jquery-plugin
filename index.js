(function($){
$.fn.colorify = function(options){

	var settings = $.extend({}, $.fn.colorify.defaults, options);

	this.css({
		color:settings.color,
		backgroundColor : settings.backgroundColor
	});
	return this;
};
})(jQuery);

$.fn.colorify.defaults = {
		color:"white",
		backgroundColor : "red"	
}