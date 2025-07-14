import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8000;



const app = express();

//body parsser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger middleware
app.use(logger);

//setup static folder
//app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api/posts', posts); 

//error hander
app.use(notFound);
app.use(errorhandler);



app.listen(port, () => console.log(`Server is running on port ${port}`));






