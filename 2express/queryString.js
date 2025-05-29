//A query string is extra information sent in the URL after a ?.
//?name=tushar&age=22 → This is the query string.
//name and age are query parameters.
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`You searched for name: ${name}, age: ${age}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});