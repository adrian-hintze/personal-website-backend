import * as express from 'express';

const app: express.Express = express();

// force HTTPS, check if it can be done in app engine
app.get('*', (req, res) => {
    res.redirect('https://' + req.headers.host + req.url);
})

app.get('/', (req, res) => res.send('Under construction...'))

const port = 80;
app.listen(port, () => console.log(`App listening on port ${port}.`));
