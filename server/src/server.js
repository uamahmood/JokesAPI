const express = require('express');
const app = express();
const routes = require('./routes').router;

const port = 8080;

app.use(express.json())

app.use(routes);

app.listen(port, () => {
    console.log(`express app listening at http://localhost:${port}`);
})