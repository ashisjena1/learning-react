var React = require('react');
var ReactDOM = require('react-dom');
import { Router,Route,browserHistory,Link } from 'react-router';

// Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

//CSS requires
require('./css/index.css');

var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
});

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
                <Link to={'/about'}>About</Link>
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
    }

    
});

//put component into html page
ReactDOM.render(<App/>, document.getElementById('todo-wrapper'));