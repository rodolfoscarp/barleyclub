const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

module.exports = {
    async show(req, res) {
        const produtos = await Produto.find();

        return res.json(produtos);
    },
    async insert(req, res) {
        const produtos = await Produto.create(req.body);

        return res.json(produtos);
    },
    async delete(req, res) {
        const produtos = await Produto.findByIdAndRemove(req.params.id);

        return res.send();
    },
    async update(req, res) {
        const produtos = await Produto.findByIdAndUpdate(req.params.id, req.body,
            { new: true, useFindAndModify: false });

        return res.json(produtos);
    },
    async showDestaques(req,res){
        const produtos = await Produto.find({destaque: true});

        return res.json(produtos);
    },
    async index(req,res){
        const produtos = await Produto.findById(req.params.id);

        return res.json(produtos);
    }
}