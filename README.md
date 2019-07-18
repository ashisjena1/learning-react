# React js

## Dependencies
```
npm i react react-dom
npm i babel-core babel-loader babel-preset-es2015 babel-preset-react -D
npm i webpack webpack-dev-server -D
```
1. setup
Add Webapck.congi.js file
```
Webapck.congi.js
----------------
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'src')+'/app/index.js',
    output : {
        path: path.resolve(__dirname,"dist") + '/app',
        filename: 'bundle.js',
        publicPath:'/app/'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                include:path.resolve(__dirname,'src'),
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                }
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
}

```

Create a src folder
Add index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="/app/bundle.js"></script>
</body>
</html>
```

Create a src/app folder
add index.js
```
alert("It works")
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

3. Props
props are used to pass data into component whicch is used for display. 
```
ReactDOM.render(<TodoComponent mssg="I like Cheese" cheese={myCheese} />, document.getElementById('todo-wrapper'));
```

4.State
```
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    }, // getInitialState
    render: function(){
        return(
            <div id="todo-list">
            <p>The busiest people have the most leisure...</p>
            <ul>
                <li>{this.state.todos[0]}</li>
                <li>{this.state.todos[1]}</li>
                <li>{this.state.todos[2]}</li>
            </ul>
        </div>
        );
    }//render
});
```