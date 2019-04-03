const app = require('./src/config/custom-express');

app.listen('3000');

app.get('/', function(req , resp){
    resp.send(
    `
        <html>
            <head>
                <meta charset = "utf-8">
            </head>
            <body><h1> Funcionou</h1></body>
           
        </html>
    `

    );
});