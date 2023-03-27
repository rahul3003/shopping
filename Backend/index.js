const express = require('express');
const bodyParser = require('body-parser');
const dcConnect = require('./config/dbConnect');
const app = express()
const authRouter = require('./routes/authRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use("/api/user", authRouter)

app.use(notFound)
app.use(errorHandler)

//to start sever
app.listen(PORT, () => [
    console.log(`Server started on port ${PORT}`)
])