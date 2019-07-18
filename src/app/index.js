var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');

// Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

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
                <AddItem onAdd={this.onAdd}/>
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
    },
    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        });
    },

    // Life cycle functions

    componentWillMount: function(){
        console.log('Component will mount');
    },

    componentDidMount: function(){
        console.log('Component Did mount');
        // best place for grabbing external data
    },

    componentWillUpdate: function(){
        console.log('Component will Update');
    }

    
});

//put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));