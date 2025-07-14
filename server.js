import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8000;

//get the directory name
const __filename =fileURLToPath (import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

//body parsser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger middleware
app.use(logger);

//setup static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api/posts', posts); 

//error hander
app.use(notFound);
app.use(errorhandler);



app.listen(port, () => console.log(`Server is running on port ${port}`));






