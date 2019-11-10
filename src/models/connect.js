const mongoose = require('mongoose');

const host = 'mongodb://localhost:27017/barleyclub-dev';
const param = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(host, param);