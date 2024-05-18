import 'dotenv/config';
import express,{json}from 'express';
import DenunciasController from './features/denuncias/api/v1/denuncias-controller.mjs';

const app = express();
const port = 3000;
app.use(express.json());


const denunciasApiController = new DenunciasController();
app.use('/api/', denunciasApiController.getRouter());

const PORT = process.env.PORT || 3000;
console.log(process.env.MYSQL_DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
