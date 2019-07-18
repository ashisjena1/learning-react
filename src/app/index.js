var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Hellooooo</h1>
                <p>{this.props.mssg}</p>
                <br/>

                <p><strong>Cheese name: </strong> {this.props.cheese.name}</p>
                <p><strong>Cheese smell factor: </strong> {this.props.cheese.smellFactor}</p>
                <p><strong>Cheese price: </strong>£{this.props.cheese.price}</p>
                
            </div>
        );
    }
});

var myCheese = { name: 'Camembert', smallFactor:'Extreme pong', price:'3.50'};
//put component into html page
ReactDOM.render(<TodoComponent mssg="I like Cheese" cheese={myCheese} />, document.getElementById('todo-wrapper'));