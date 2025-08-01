const express = require('express');

const app = express()

const port = 3000

app.use(express.static('imgs/posts'))

const postsRouter = require('./routers/posts');

app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  res.send('Benvenuti nel server Express');
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
