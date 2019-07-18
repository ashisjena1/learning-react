var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap',"go & sleep"]
        }
    }, // getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map((item,index) => <TodoItem key={index} item={item} onDelete={this.onDelete}/>)
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
    },

    onDelete: function(item){
        var updatedTodos = this.state.todos.filter((val,index) => item !== val)
        this.setState({
            todos: updatedTodos
        });
    }

    
});

// Creatr TodoItem component
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="itemName">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        )
    },
    // custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
})
//put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));