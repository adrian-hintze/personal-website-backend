import * as express from 'express';

const app: express.Express = express();

app.get('/', (req, res) => res.send('Under construction...'))

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}.`));
