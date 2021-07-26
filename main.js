const express = require('express');
const app = express();
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(3001, () => {
  console.log('app listen on port 3001');
});

app.get('/', (req, res) => {
  res.json({msg: 200});
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json({msg: 200});
});
