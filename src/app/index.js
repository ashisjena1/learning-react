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
        todos = todos.map((item,index) => <li key={index}>{item}</li>)
        return(
            <div id="todo-list">
            <p>The busiest people have the most leisure...</p>
            <p>{this.state.age}</p>
            <ul>
                <li>{this.state.todos[0]}</li>
                <li>{this.state.todos[1]}</li>
                <li>{this.state.todos[2]}</li>
            </ul>
            <br/>
            {todos}
        </div>
        );
    }//render
});

var myCheese = { name: 'Camembert', smallFactor:'Extreme pong', price:'3.50'};
//put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));