require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then((db) => {app.set('db',db)})
.catch((err) => {console.log(err)});

app.get('/api/inventory', ctrl.getInventory);
// app.get('/api/..../:id', ctrl.get....);
app.post('/api/products', ctrl.create);
// app.put('/api/..../:id', ctrl.put....);
// app.delete('/api/..../:id', ctrl.delete....);

const PORT = process.env.SERVERPORT || 4000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})