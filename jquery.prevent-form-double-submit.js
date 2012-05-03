(function($){
  $.fn.prevent_double_submit = function() {    
    return this.each(function() {
      obj = $(this);
      obj.submit(function() {
        $(':submit', this).on('click', function() {
          return false;
        });
      });
    });
  };
})(jQuery);