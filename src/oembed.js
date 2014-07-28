(function(root, factory){

  // AMD
  if(typeof define === 'function' && define.amd){
    define(['jquery'], function($){
      factory(root, $);
    });
  }

  // Browser
  else {
    factory(root, (root.jQuery || root.$));
  }

})(this, function(root, $){

  $.fn.oembed = function(options){
    this.each(function(index) {
      var element = $(this);
      options = $.extend({}, $.fn.oembed.defaults, element.data('oembedOptions'), options);
      $.get('//oembed.nl/?callback=?', options, function(data) {
        element.html(data.html).trigger('oembed:loaded');
      }, 'jsonp');
    });
  };

  $.fn.oembed.defaults = {};

});