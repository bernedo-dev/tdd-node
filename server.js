const express = require('express');
const { authenticate } = require('./middlewares');
const { posts } = require('./endpoints');
const services = require('./services');
const app = express();
const port = 3000;


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

const postsHandlers = posts({ services });

app.post('/', authenticate, postsHandlers.post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


module.exports = app;