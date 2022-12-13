const express = require('express');

const app = express();

const port = 3002;

const states = [ 
    {
        state: "Montana",
        taxRate: 0.09
    }
]

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.send(`<h2>Office Supplies, come on down!</h2>`);
}) 