module.exports = {
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {name, price, image_url} = req.body;
        db.create_product([name, price, image_url])
        .then(() => {res.sendStatus(200)})
        .catch((err) => res.status(500).send('error adding product'))
    },
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
        .then((inventory) => {res.status(200).send(inventory)})
        .catch((err) => {
            res.status(500).send('Get All Inventory Error');
            console.log(err);
        })
    },
    deleteProduct: (req, res) => {
        console.log(req.params)
        const db = req.app.get('db');
        db.delete_product([req.params.id])
        .then(() => {res.sendStatus(200)})
        .catch((err) => {res.status(200).send('delete error')})
    },
    editProduct: (req, res) => {
        const db = req.app.get('db');
        const {product_id} = this.params.id;
        const {name, price, image_url} = req.body;
        db.edit_product([product_id, name, price, image_url])
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send('Update Error');
            console.log(err);
        })
    },
    getProduct: (req, res) => {
        const db = req.app.get('db');
        db.get_product([req.params.id])
        .then((product) => {res.status(200).send(product)})
        .catch((err) => {
            res.status(500).send('Get One Error');
            console.log(err);
        })
    }
}