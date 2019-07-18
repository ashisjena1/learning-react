var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap',"go & sleep"],
            age : 30
        }
    }, // getInitialState
    render: function(){
        var ager = setTimeout(function() {
            this.setState({
                age:35
            });
        }.bind(this),3000)

        var todos = this.state.todos;
        todos = todos.map((item,index) => <TodoItem key={index} item={item} />)
        return(
            <div id="todo-list">
            <p onClick={this.clicked}>The busiest people have the most leisure...</p>
            <ul>
                {todos}
            </ul>
        </div>
        );
    },//render

    //Custom functions
    clicked: function(){
        console.log('You clicked');
    }
});

// Creatr TodoItem component
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="itemName">{this.props.item}</span>
                </div>
            </li>
        )
    }
})
//put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));