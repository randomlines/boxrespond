/*
 * Box Respond for jQuery
 * http://therandomlines.com/responsive-boxes/
 * Copyright 2013, Ashim D'Silva
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function($){
    $.boxRespond = function(settings){
		'use strict';
        var config = {
			'lt'		: false
        };
        if (settings){$.extend(config, settings);}

		var sizes, $r;
		$(window).resize(function(){
			$('.r-box').each(function(){
				$r = $(this);
				$r.attr('data-r', $r.attr('data-r').split(' ').join(''));
				sizes = $r.attr('data-r').split(',');
				$.each(sizes, function(key, value){
					if ($r.width() > parseInt(value, 10))
					{
						if (!$r.hasClass('gt-'+value))
						{
							$r.addClass('gt-'+value);
						}
						if (config.lt && $r.hasClass('lt-'+value))
						{
							$r.removeClass('lt-'+value);
						}
					}
					else
					{
						if ($r.hasClass('gt-'+value))
						{
							$r.removeClass('gt-'+value);
						}
						if (config.lt && !$r.hasClass('lt-'+value))
						{
							$r.addClass('lt-'+value);
						}
					}
				});
			});
		});
		$(window).resize();

        return this;
    };
})(jQuery);