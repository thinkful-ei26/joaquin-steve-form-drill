const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.post('/api/messages', bodyParser.json(), (req, res) => {
    // TODO: Validate the field types
    // TODO: Store the message
    return res.status(204).end();
});

app.listen(8080);
