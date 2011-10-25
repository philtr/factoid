/**
 * Factoid v0.1.0
 * Factoid hovers like on Bing.com
 * http://phillipridlen.com
 *
 * Copyright (C) 2011 Phillip Ridlen
 *
 */

(function($) {
  $.fn.factoid = function() {
    this.children().each(function(){
      var position = {
        x: $(this).data('position-x'),
        y: $(this).data('position-y')
      };

      $(this).css({
        'position': 'absolute',
        'top': position.y,
        'left': position.x
      });

      $(this).children().each(function() {
        $(this).hide();
      });

      $(this).hover(function() {
        $(this).children().each(function() {
          $(this).show();
        })},
      function() {
        $(this).children().each(function() {
          $(this).hide();
        });
      });
    });
  };
})( jQuery );