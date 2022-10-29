const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('kaj hoise');
})

const users = [
    {
        name: 'nurul', mobile: '01764227126', email: 'maxnewsbd@gmail.com'
    },
    {
        name: 'amin', mobile: '0171064545', email: 'maxnewsbd@gmail.com'
    },
    {
        name: 'md', mobile: '01764227126', email: 'maxnewsbd@gmail.com'
    },
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log('server is running')
})