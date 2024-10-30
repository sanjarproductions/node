// console.log("Hello World")

const express = require('express');
const { readFile } = require('fs');

const app = express();
app.get("/", (request, response) => {
    readFile('./home.html', 'utf-8', (err, html) => {

        if(err){
            response.status(500).send('Sorry, out of order')
        }

        response.send(html)
    })
})

app.listen(process.env.PORT || 3000, () => console.log(`Live on http://localhost:3000`))