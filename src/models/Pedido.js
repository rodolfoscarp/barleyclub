const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PedidoSchema = new mongoose.Schema({
    items: [{
        quantidade: {
            type: Number,
            require: true
        },
        produto: {
            type: Array,
            required: true
        }
    }],
    cliente: {
        nome: {
            type: String,
            require: true
        },
        endereco: {
            rua: {
                type: String,
                require: true
            },
            bairro: {
                type: String,
                require: true
            },
            cidade: {
                type: String,
                require: true
            },
            estado: {
                type: String,
                require: true
            },
            complemento: {
                type: String,
                require: false
            },
            cep: {
                type: Number,
                require: true
            }
        },
        email: {
            type: String,
            require: true
        }
    },
    status: {
        type: String,
        require: true
    }
})

PedidoSchema.plugin(mongoosePaginate);

mongoose.model('Pedido', PedidoSchema);