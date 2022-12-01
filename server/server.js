const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/tasks', (req, res)=> {
    res.send('list all tasks')
})

app.post('/addTask', (req, res)=> {
    console.log(req.body)
    res.send('You can add task')
})

app.get('/delete', (req, res)=> {
    res.send('Deleted task')
})

app.listen (4000, ()=>
    console.log('running on port 4000')

)