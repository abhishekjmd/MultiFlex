const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://multiflex:Gc1zL9KTXkWGap2Q@cluster0.czomqvt.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB!');
    // console.log(dbUrl)
});
