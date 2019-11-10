const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

module.exports = {
    async show(req, res) {
        const pedidos = await Pedido.find();

        return res.json(pedidos);
    },
    async insert(req, res) {
        const pedidos = await Pedido.create(req.body);

        return res.json(pedidos);
    },
    async delete(req, res) {
        const pedidos = await Pedido.findByIdAndRemove(req.params.id);

        return res.send();
    },
    async update(req, res) {
        const pedidos = await Pedido.findByIdAndUpdate(req.params.id, req.body,
            { new: true, useFindAndModify: false });

        return res.json(pedidos);
    }
}