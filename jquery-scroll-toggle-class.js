'use strict';

(function ($) {
	$.fn.scrollToggleClass = function(options) {
		var previousScroll = 0;
		var ele = this;

		var settings = $.extend({ 
			offset:  0,       
            scrollDownClass: 'scroll-down',
            scrollUpClass: 'scroll-up'
        }, options );

        return (function() {
			ele.data('type','broad');

	        $(window).on('scroll', function() {
				var currentScroll = $(this).scrollTop();  

		        if (currentScroll < previousScroll) {              
		            ele.data('type','broad').removeClass(settings.scrollDownClass).addClass(settings.scrollUpClass);
		        } else {
		            if ($(document).scrollTop() > settings.offset){                   
		                if(ele.data('type') === 'broad') {                
		                    ele.data('type','narrow').removeClass(settings.scrollUpClass).addClass(settings.scrollDownClass);
		                }
		            } else {
		                if (ele.data('type') === 'narrow') {
		                    ele.data('type','broad').removeClass(settings.scrollDownClass).addClass(settings.scrollUpClass);
		                }  
		            } 
		        }
		        previousScroll = currentScroll;
	        });
        })();
	};
})(jQuery);