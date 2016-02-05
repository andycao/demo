'use strict';

var TodoList = React.createClass({
    displayName: 'TodoList',

    render: function render() {
        var _this = this;

        var createItem = function createItem(itemText, handleDelete) {
            console.log(handleDelete);
            return React.createElement(
                'li',
                null,
                itemText,
                ' ',
                React.createElement('button', null)
            );
        };
        return React.createElement(
            'ul',
            null,
            this.props.items.map(function (task, taskIndex) {
                return React.createElement(
                    'li',
                    { key: taskIndex },
                    task,
                    React.createElement(
                        'button',
                        { onClick: _this.props.handleDelete },
                        ' x '
                    )
                );
            })
        );
    }
});
var TodoApp = React.createClass({
    displayName: 'TodoApp',

    getInitialState: function getInitialState() {
        return { items: [], text: '' };
    },
    onChange: function onChange(e) {
        this.setState({ text: e.target.value });
    },
    handleDelete: function handleDelete(e) {
        e.preventDefault();
        console.log(e);
        var newItems = this.state.items.splice(this.state.items.length, 1);
        this.setState({ items: newItems });
    },
    handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({ items: nextItems, text: nextText });
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                'TODO'
            ),
            React.createElement(TodoList, { items: this.state.items, handleDelete: this.handleDelete }),
            React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement('input', { onChange: this.onChange, value: this.state.text }),
                React.createElement(
                    'button',
                    null,
                    'Add #' + (this.state.items.length + 1)
                )
            )
        );
    }
});

var mountNode = document.getElementById('example');
ReactDOM.render(React.createElement(TodoApp, null), mountNode);