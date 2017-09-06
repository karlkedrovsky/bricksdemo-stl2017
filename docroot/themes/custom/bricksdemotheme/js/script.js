(function($, Drupal, drupalSettings) {
  Drupal.behaviors.bricksdemothemeInit = {
    attach: function(context, settings) {
      console.log('initializing foundation');
      $(document).once('body').foundation();
    }
  };
})(jQuery, Drupal, drupalSettings);
