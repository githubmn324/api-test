import { absolutePath } from 'swagger-ui-dist';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import path from 'path';
var app = express();
app.use(cors());
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log({ __dirname: __dirname });

app.use('/spec', express.static(path.join(__dirname, './spec')));

app.use(express.static(absolutePath()));

app.listen(3000);
