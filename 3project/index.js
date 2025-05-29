// Description: This code sets up an Express server and initializes a user array.
const express = require('express');
const app = express();


const users = [
    {id: 1, name: 'Tushar', age: 20},
    {id: 2, name: 'Srishti', age: 20},
    {id: 3, name: 'Vanshika', age: 22},
];

//get all the users
//yeh locallhost 3000 pe /users likte hi sab dikh jaaega
app.get('/users', (req, res) => {
    res.send(users);
});

//search user by name (query string)

app.get('/search', (req, res) => {
    const name = req.query.name;
    const filtered = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));

    res.send(filtered);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

// Concept	Used In
// nodemon	Auto server reload
// express	Backend framework
// app.get()	Route creation
// req.params	Path parameter (get user by ID)
// req.query	Query string (search user by name)
// res.send()	Sending response to browser/client

