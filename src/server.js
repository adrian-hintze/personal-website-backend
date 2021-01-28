const express = require('express');
const path = require('path');


const app = express();
app.use('/', express.static(path.join(__dirname, 'web')));

// Listen to the App Engine-specified port, or 8080 otherwise
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}.`));
