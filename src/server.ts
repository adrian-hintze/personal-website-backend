import * as express from 'express';

const app: express.Express = express();

function forceHttps(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.secure) {
        return next();
    };

    res.redirect('https://' + req.hostname + req.url);
}

// force HTTPS, check if it can be done in app engine
app.use(forceHttps);

app.get('/', (req, res) => res.send('Under construction...'))

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}.`));
