import express from "express"
// import examplesController from "./controllers/examples-controller.js";
// const app = express()

// examplesController(app);

// app.listen(4000)

const app = express()
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

app.listen(4000)