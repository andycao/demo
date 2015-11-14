var vm = new Vue({
  el : "#todoApp",
  data : {
    todos : [
    { text : 'todo1', done : true },
    { text : 'todo2', done : false },
    { text : 'todo3', done : false }
    ],
    newTodo : ''
  },
  computed : {
    doneCount : function(){
      var count = 0;
      this.todos.forEach(function(element, index){
        count += element.done ? 0 : 1;
      });
      return count;
    }
  },
  methods : {
    addTodo : function(newTodo, event){
      event.preventDefault();

      var todoText = newTodo.trim();
      if(todoText){
        this.todos.push({ text : todoText, done : false });
        this.newTodo = '';
      }
    },
    mysubmit : function(newTodo, event){
      event.preventDefault();
      console.log(newTodo);
      console.log('submit form');
      return false;
    }
  }

});