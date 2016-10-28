/**
 * Created by andycao on 16/7/5.
 */

var React = require('react');
var ReactDOM = require('react-dom');

require('./list.js');

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});
ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);