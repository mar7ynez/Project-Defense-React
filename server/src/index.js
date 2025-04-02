import express from 'express';

import { configExpress } from './config/expressConfig.js';
import { connectDb } from './config/dbConfig.js';
import { router as routes } from './router.js';

const app = express();
const port = 3030;

configExpress(app);

app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);

    connectDb();
});