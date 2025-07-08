const express = require('express');
const path = require('path');
const port = process.env.port || 8000;

const app = express();

//setup static folder
//app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'}
];
//get all posts 
app.get('/api/posts', (req, res) => {
    console.log(req.query);
    
    res.json(posts);
});

// get single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.json(posts.filter((post) => post.id ===id));
});


app.listen(8000, () => console.log(`Server is running on port ${port}`));
