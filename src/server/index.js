require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then((db) => { 
    app.set('db', db)
    db.get_inventory()
})
.catch((err) => { console.log(err) });

app.get('/api/inventory', ctrl.getInventory);
app.post('/api/product', ctrl.addProduct);
app.delete('/api/product/:id', ctrl.deleteProduct)
app.put(`/api/product/:id`, ctrl.editProduct)
app.get(`/api/inventory/:id`, ctrl.getProduct)


const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})