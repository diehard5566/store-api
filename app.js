require('dotenv').config();
// async error

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send(`<h1>Store</h1><a href="/api/v1/products">products</a>`)
})

//product route

app.use(notFoundMiddleware);

const port = process.env.PORT || 3000

const start = async () => {
    try {
        //connectDB
        app.listen(port, console.log(`Server is listening port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start()