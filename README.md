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