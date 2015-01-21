'use strict';

define(

  [
    'flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(deleteTodo);

    /**
     * Add a new todo to the list
     *
     * @method addTodo
     * @return {Void}
     */
    function deleteTodo() {
        // Attributes
        this.defaultAttrs({
            preview: '.todo-preview',
            remove: '.delete-todo'
        });

        // Initialize
        this.after("initialize", function() {
            this.on('click', { 'remove': deleteItem });
        });

    }

    /**
     * Delete an item from the preview list
     *
     * @method deleteItem
     * @param {Object} ev
     * @return {Void}
     */
    function deleteItem(ev, e) {
        ev.preventDefault();
        
        $(e.el).parent().remove();
    }

  }
);
