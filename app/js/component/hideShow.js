'use strict';

define(

  [
    'flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(hideShow);

    function hideShow() {
        // Attributes
        this.defaultAttrs({
            spanHideShow: 'span'
        });

        // Click event to toggle content visibility
        this.onClick = function() {
            this.select('spanHideShow').toggle();
        };

        // Initialize
        this.after("initialize", function() {
            this.select('spanHideShow').hide(); // Hide text by default
            this.on('click', this.onClick);
        });
    }
  }
);
