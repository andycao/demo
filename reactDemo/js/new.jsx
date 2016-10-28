var TodoList = React.createClass({

    render: function() {
        var createItem = function(itemText, handleDelete) {
            console.log(handleDelete);
            return <li>{itemText} <button ></button></li>;
        };
        return <ul>{this.props.items.map((task, taskIndex) => 
                <li key={taskIndex}>
                    {task}
                    <button onClick={this.props.handleDelete}> x </button>
                </li>
            )}
        </ul>;
    }
});
var TodoApp = React.createClass({
    getInitialState: function() {
        return {items: [], text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleDelete: function(e){
        e.preventDefault();
        console.log(e);
        var newItems = this.state.items.splice(this.state.items.length, 1);
        this.setState({items: newItems});

    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function() {
        return (
          <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} handleDelete={this.handleDelete} />
          <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
          </form>
          </div>
          );
    }
});

var mountNode = document.getElementById('example');
ReactDOM.render(<TodoApp />, mountNode);

