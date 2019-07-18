# React js

## Dependencies
```
npm i react react-dom
npm i babel-core babel-loader babel-preset-es2015 babel-preset-react -D
npm i webpack webpack-dev-server -D
```

2. component
Change the content in index.js file
```
var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <h1>Hellooooo</h1>
        );
    }
});
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
```

also add "<div id="todo-wrapper"></div>" in index.html file