const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    },
    url_img: {
        type: String,
        require: true
    },
    destaque: {
        type: Boolean,
        require: true
    }
},
    { collection: 'produto' })

ProdutoSchema.plugin(mongoosePaginate);

mongoose.model('Produto', ProdutoSchema);