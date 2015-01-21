'use strict';

define(

  [
    'flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(addTodo);

    /**
     * Add a new todo to the list
     *
     * @method addTodo
     * @return {Void}
     */
    function addTodo() {
        // Attributes
        this.defaultAttrs({
            preview: '.todo-preview',
            input: '#addTodo',
            submit: '.submit-todo'
        });

        // Initialize
        this.after("initialize", function() {
            this.on(document, "click", {
                submit: getTodo,
            });
        });
    }

    /**
     * Get the input content after a submition
     *
     * @method getTodo
     * @param {Object} ev
     * @return {Void}
     */
    function getTodo(ev) {
        ev.preventDefault();

        populateList(this.select('input').val(), this);
    }

    /**
     * Populate the todo list
     *
     * @method populateList 
     * @param {String} value
     * @param {Object} context 
     * @return {Void}
     */
    function populateList(value, context) {
        var previewHtml = context.select('preview').html();

        if (value != "") {
            context.select('preview').html('<li>' 
                    + value 
                    + '<span class="glyphicon glyphicon-remove pull-right delete-todo" aria-hidden="true"></span>' 
                    + '</li>' 
                    +  previewHtml);
        }

        clearInput(context);
    }

    /**
     * Clear input value
     *
     * @method clearInput
     * @param {Object} context
     * @return {Void}
     */
    function clearInput(context) {
        context.select('input').val('');
    }

  }
);
