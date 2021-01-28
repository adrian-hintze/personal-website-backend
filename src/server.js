const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Under construction...'))

// Listen to the App Engine-specified port, or 8080 otherwise
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}.`));
