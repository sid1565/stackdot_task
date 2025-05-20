import express from 'express';
import bodyParser from 'body-parser';
import router from './src/api/routes/route.js';

const app = express();
const port = process.env.DB_PORT || 3000;
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

app.listen(port, function() {
    console.log(`Server is running on port ====> ${port}`);
})