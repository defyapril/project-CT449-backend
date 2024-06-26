const mongoose = require('mongoose');

async function connect() {
    try {
        if (!mongoose.connection.readyState) {
            await mongoose.connect('mongodb://127.0.0.1:27017/borrowbookdemo');
            console.log('Database Connect successfully!!!');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
