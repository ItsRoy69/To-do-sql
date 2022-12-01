const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/tasks', (req, res)=> {
    res.send('list all tasks')
})

app.get('/addTask', (req, res)=> {
    res.send('You can add task')
})

app.get('/delete', (req, res)=> {
    res.send('Deleted task')
})

app.listen (4000, ()=>
    console.log('running on port 4000')

)