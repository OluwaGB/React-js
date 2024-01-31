<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https:unpkg.com/@babel/standalone/babel.min.js"></script>

    <!---<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Document</title>------>
</head>
<body>
    <div id="mydiv"></div>
    <script type="text/babel"> <!-----//script type is set to babel instead of javascript du to the third scr file up there //---->
        function Hello() {
            return<h1>Hello World</h1>;//the jsx syntax allows html tag to be used in javascript
        }
        const  container = document.getElementById('mydiv');//The container is an object in the DOM that is only accesed with the div as an id
        const root = ReactDOM.createRoot(container);//the root is also an object in thr react DOM which is acessed by creating root for using reactDOM.create method
        root.render(<Hello/>)//this render the function declared earlear inside the container already created with the previously used reactDOm method
    </script>
    
    
</body>
</html>
