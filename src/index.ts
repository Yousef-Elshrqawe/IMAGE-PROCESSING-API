import express from 'express';
import routes from './routes/index';
import File from './file';

const app: express.Application = express();
const port: number = 3000;

app.use(routes);
app.listen(port, async (): Promise<void> => {
    await File.createThumbPath();
    console.log(`Server is listening on port ${port}`);
});
export default app;
