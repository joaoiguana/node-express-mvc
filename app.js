import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/myExpressApp';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB successfully!');
});

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Import routes
import router from './routes/index.js';
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
