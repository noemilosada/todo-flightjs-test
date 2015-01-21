define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var HideShow = require('component/hideShow'),
      DeleteTodo = require('component/deleteTodo'),
      AddTodo = require('component/addTodo');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
      HideShow.attachTo('.hide-show');
      AddTodo.attachTo('.add-todo');
      DeleteTodo.attachTo('.todo-preview');
  }

});
