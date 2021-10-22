const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) =>{
    res.send('Hellow from my first node ever i am exited yayayayayyayy learn node');
})

const users =[
    {id:0, name:'shabana', email:'Shabana@gmail.com', phone:'0987654'},

    {id:1, name:'Shabnoor', email:'Shabana@gmail.com', phone:'0987654'},

    {id:2, name:'shuchorita', email:'Shabana@gmail.com', phone:'0987654'},

    {id:3, name:'shamo', email:'Shabana@gmail.com', phone:'0987654'},

    {id:4, name:'shabana', email:'Shabana@gmail.com', phone:'0987654'},

    {id:5, name:'shab', email:'Shabana@gmail.com', phone:'0987654'},
]

app.get('/users', (req, res)=>{
    // search query 
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else{
        res.send(users)
    }
});

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hit', req.body)
    res.json(newUser);
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);

})

app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('yummy yummy tok marka fazli');
})

app.listen(port, () =>{
    console.log('listening to port',port);
})