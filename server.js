const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/ola_music_planner", { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)} 
);

//route information
app.use(routes);

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });
// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.listen(port, () => console.log(`Listening on port ${port}`));