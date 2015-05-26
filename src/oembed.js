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
    return this.each(function(index) {
      var element = $(this), opts;
      opts = $.extend($.fn.oembed.defaults, { url: element.attr('data-url') }, element.data('oembedOptions'), options);
      $.get('//oembed.nl/?callback=?', opts, function(data) {
        element.html(data.html).trigger('oembed:loaded');
      }, 'jsonp');
    });
  };

  $.fn.oembed.defaults = {};

});
