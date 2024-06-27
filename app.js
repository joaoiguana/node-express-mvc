import express from 'express';

const app = express();
const port = 3000;

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Import routes
import router from './routes/index.js';
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
