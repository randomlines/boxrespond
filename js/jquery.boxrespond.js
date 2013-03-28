/*
 * Box Respond for jQuery
 * http://therandomlines.com/responsive-boxes/
 * Copyright 2013, Ashim D'Silva
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function($){
    $.boxRespond = function(){
		'use strict';

		var sizes, $r;
		$(window).resize(function(){
			$('.r-box').each(function(){
				$r = $(this);
				$r.attr('data-r', $r.attr('data-r-sizes').split(' ').join(''));
				sizes = $r.attr('data-r').split(',');
				$.each(sizes, function(key, value){
					if ($r.width() > parseInt(value, 10))
					{
						if (!$r.hasClass('gt-'+value))
						{
							$r.addClass('gt-'+value);
						}
					}
					else
					{
						if ($r.hasClass('gt-'+value))
						{
							$r.removeClass('gt-'+value);
						}
					}
				});
			});
		});
		$(window).resize();

        return this;
    };
})(jQuery);