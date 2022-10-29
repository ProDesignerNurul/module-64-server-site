const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('kaj hoise');
})

// username : dbuser1
// password : mFTwmF4xwiqLWukY


// mngoDB start 



const uri = "mongodb+srv://dbuser1:mFTwmF4xwiqLWukY@cluster0.zwnyjff.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        const userCollection = client.db('simpleNode').collection('users');
        const user = { name: 'abdur rahman', email: 'aburrahman@gmail.com'}
        // const result = await userCollection.insertOne(user)
        // console.log(result)
        app.post('/users', async (req, res) => {
            const user = req.body;
            // user.id = users.length + 1;
            // users.push(user)
            const result = await userCollection.insertOne(user);
            console.log(result)
            user.id = result.insertedId;
            res.send(user)
        })
    }
    finally{

    }
}

run().catch( error => console.log(error))


// mngoDB end 



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

// app.post('/users', (req, res) => {
//     const user = req.body;
//     user.id = users.length + 1;
//     users.push(user)
//     console.log('API Post Hit')
//     console.log(req.body)
//     res.send(user)
// })

app.listen(port, () => {
    console.log('server is running')
})