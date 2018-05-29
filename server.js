const express = require('express');
const app = express();
app.use(express.static('public'));

asks = 0;
reset = Date.now();
app.get('/add', (req, res) => {
    asks += 1;
    res.status(200).send({'asks': asks});
});

app.get('/reset', (req, res) => {
    asks = 0;
    reset = Date.now();
    res.status(200).send({'asks': asks, "reset": reset});
});

app.get('/current', (req, res) => {
    res.status(200).send({'asks': asks, "reset": reset});
}); 

app.listen(3000, () => console.log('Server listening on port 3000!'));
